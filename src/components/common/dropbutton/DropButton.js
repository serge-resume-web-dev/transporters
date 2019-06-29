import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./DropButton.scss";

class DropButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(e) {
		if (this.dropdown.contains(e.target)) {
			this.setState({
				open: true
			});
		} else {
			this.setState({
				open: false
			});
		}
	}

	componentDidMount() {
		document.addEventListener("click", this.clickHandler, false);
	}

	componentWillUnmount() {
		document.removeEventListener("click", this.clickHandler, false);
	}

	render() {
		const { open } = this.state;
		const { name } = this.props;
		const opacity = { opacity: open ? ".9" : ".6" };
		const activeNavLink = { opacity: ".6" };

		return (
			<div
				className="btn-dropdown"
				ref={dropdown => (this.dropdown = dropdown)}
			>
				<div className="btn-dropdown-button" onClick={this.clickHandler}>
					<p style={opacity}>
						{name}
						<i
							className={open ? "fa fa-angle-up" : "fa fa-angle-down"}
							aria-hidden="true"
						/>
					</p>
				</div>
				{this.state.open ? (
					<div className="btn-dropdown-dropdown">
						<ul>
							<li>
								<NavLink to="/profile" activeStyle={activeNavLink}>
									My Profile
								</NavLink>
								<hr className="stick" />
							</li>
							<li>
								<NavLink to="/settings" activeStyle={activeNavLink}>
									Settings
								</NavLink>
								<hr className="stick" />
							</li>
							<li>
								<NavLink to="/logout" activeStyle={activeNavLink}>
									Logout
								</NavLink>
							</li>
						</ul>
					</div>
				) : null}
			</div>
		);
	}
}

export default DropButton;
