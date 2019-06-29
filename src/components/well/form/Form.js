import React, { Component } from "react";
import "./Form.scss";

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: null,
			phone: null,
			password: null
		};
	}
	render() {
		return (
			<div className="form">
				<h4 className="h4">Register now</h4>
				<form>
					<label htmlFor="email">
						Email
						<input
							type="text"
							name="email"
							id="email"
							placeholder="Your email address"
						/>
						<span className="error" />
					</label>
					<label htmlFor="phone">
						Phone number
						<input
							type="tel"
							name="phone"
							id="phone"
							placeholder="Your mobile number"
						/>
						<span className="error" />
					</label>
					<label htmlFor="password">
						Password
						<input
							type="password"
							name="password"
							id="password"
							placeholder="At least 4 character"
						/>
						<span className="error" />
					</label>
					<div className="buttons">
						<input type="submit" value="Send" />
						<input type="reset" value="Reset" />
					</div>
				</form>
			</div>
		);
	}
}

export default Form;
