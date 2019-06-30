import React, { Component } from "react";
import PopUp from "./popup/PopUp";
import validate from "./validator/validator";
import { postUserData } from "../../utility/utilityFunctions";
import "./Form.scss";

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formInputs: {
				email: {
					value: "",
					placeholder: "Your email address",
					valid: false,
					touched: false,
					rules: {
						minLength: 5,
						isRequired: true,
						isEmail: true
					}
				},
				phone: {
					value: "",
					placeholder: "Your mobile number",
					valid: false,
					touched: false,
					rules: {
						minLength: 8,
						isNumerical: true
					}
				},
				password: {
					value: "",
					placeholder: "At least 4 character",
					valid: false,
					touched: false,
					rules: {
						minLength: 4,
						isRequired: true
					}
				}
			},
			popup: {
				show: false,
				success: false,
				error: null
			}
		};

		this.initState = this.state;
		this.submitHandler = this.submitHandler.bind(this);
		this.changeHandler = this.changeHandler.bind(this);
		this.resetHandler = this.resetHandler.bind(this);
		this.showPopup = this.showPopup.bind(this);
		this.hidePopup = this.hidePopup.bind(this);
	}

	changeHandler(e) {
		const name = e.target.name;
		const value = e.target.value;

		const updatedControls = {
			...this.state.formInputs
		};
		const updatedFormElement = {
			...updatedControls[name]
		};

		updatedFormElement.value = value;
		updatedFormElement.touched = true;
		updatedFormElement.valid = validate(value, updatedFormElement.rules);

		updatedControls[name] = updatedFormElement;

		this.setState({
			formInputs: updatedControls
		});
	}

	resetHandler() {
		this.setState(this.initState);
	}

	submitHandler(e) {
		e.preventDefault();
		const data = {
			email: this.state.formInputs.email.value,
			phone: this.state.formInputs.phone.value,
			password: this.state.formInputs.password.value
		};
		const url =
			"https://5d0f6dddc56e7600145a42a6.mockapi.io/api/v1/users-database";

		postUserData(url, data)
			.then(response => {
				this.showPopup("success");
			})
			.catch(error => {
				this.showPopup("error", error);
			});

		this.resetHandler();
	}

	showPopup(status, error = null) {
		this.setState({
			popup: {
				show: true,
				success: status === "success" ? true : false,
				error
			}
		});
	}

	hidePopup() {
		this.setState({
			popup: {
				show: false,
				success: false,
				error: null
			}
		});
	}

	render() {
		const { email, phone, password } = this.state.formInputs;
		const { popup } = this.state;
		return (
			<React.Fragment>
				{popup.show ? (
					<PopUp
						hidePopup={this.hidePopup}
						success={popup.success}
						error={popup.error}
					/>
				) : null}
				<div className="form">
					<h4 className="h4">Register now</h4>
					<form onSubmit={this.submitHandler}>
						<label htmlFor="email">
							Email
							<input
								type="text"
								name="email"
								id="email"
								placeholder={email.placeholder}
								value={email.value}
								onChange={this.changeHandler}
							/>
							<span className="error">
								{email.touched && !email.valid
									? "please, enter a valid email"
									: null}
							</span>
						</label>
						<label htmlFor="phone">
							Phone number
							<input
								type="tel"
								name="phone"
								id="phone"
								placeholder={phone.placeholder}
								value={phone.value}
								onChange={this.changeHandler}
							/>
							<span className="error">
								{phone.touched && !phone.valid
									? "please, enter a valid number, eg. 25 266 345"
									: null}
							</span>
						</label>
						<label htmlFor="password">
							Password
							<input
								type="password"
								name="password"
								id="password"
								placeholder={password.placeholder}
								value={password.value}
								onChange={this.changeHandler}
							/>
							<span className="error">
								{password.touched && !password.valid
									? "minimum 4 charachters long"
									: null}
							</span>
						</label>
						<div className="buttons">
							<input
								type="submit"
								value="Send"
								disabled={!email.valid && !password.valid}
							/>
							<input type="reset" value="Reset" onClick={this.resetHandler} />
						</div>
					</form>
				</div>
			</React.Fragment>
		);
	}
}

export default Form;
