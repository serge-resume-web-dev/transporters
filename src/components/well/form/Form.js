import React, { Component } from "react";
import PopUp from "./popup/PopUp";
import "./Form.scss";

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: {
				value: "",
				placeholder: "Your email address"
			},
			phone: {
				value: "",
				placeholder: "Your mobile number"
			},
			password: {
				value: "",
				placeholder: "At least 4 character"
			},
			popup: false
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
		this.setState({
			[name]: {
				value
			}
		});
	}

	resetHandler() {
		this.setState(this.initState);
	}

	submitHandler(e) {
		e.preventDefault();
		const data = {
			email: this.state.email.value,
			phone: this.state.phone.value,
			password: this.state.password.value
		};
		const url =
			"http://5d0f6dddc56e7600145a42a6.mockapi.io/api/v1/users-database";
		console.log("Async post request form submit data: ", data);
		this.postUserData(url, data)
			.then(response => {
				console.log(response);
				this.showPopup();
			})
			.catch(error => console.error(error));

		//when complete:
		this.setState(this.initState);
	}

	postUserData(url, data) {
		return fetch(url, {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			mode: "cors", // no-cors, cors, *same-origin
			cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
			credentials: "same-origin", // include, *same-origin, omit
			headers: {
				"Content-Type": "application/json"
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			redirect: "follow", // manual, *follow, error
			referrer: "no-referrer", // no-referrer, *client
			body: JSON.stringify(data) // body data type must match "Content-Type" header
		}).then(response => response.json()); // parses JSON response into native JavaScript objects
	}

	showPopup() {
		this.setState({ popup: true });
	}

	hidePopup() {
		this.setState({ popup: false });
	}

	render() {
		const { email, phone, password, popup } = this.state;
		return (
			<React.Fragment>
				{popup ? <PopUp hidePopup={this.hidePopup} /> : null}
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
							<span className="error" />
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
							<span className="error" />
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
							<span className="error" />
						</label>
						<div className="buttons">
							<input type="submit" value="Send" />
							<input type="reset" value="Reset" onClick={this.resetHandler} />
						</div>
					</form>
				</div>
			</React.Fragment>
		);
	}
}

export default Form;
