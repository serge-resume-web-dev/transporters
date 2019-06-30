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
		this.mobileCloseAfterClick = this.mobileCloseAfterClick.bind(this);
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

	mobileCloseAfterClick() {
		if (this.props.mobile) {
			setTimeout(() => {
				this.setState({
					open: false
				});
			}, 500);
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
		const { name, mobile } = this.props;
		const opacity = { opacity: open ? ".9" : ".6" };
		const activeNavLink = { opacity: ".6" };

		return (
			<div
				className="btn-dropdown"
				ref={dropdown => (this.dropdown = dropdown)}
			>
				<div className="btn-dropdown-button" onClick={this.clickHandler}>
					{mobile ? (
						<p className="hamburger-button">
							<i className="fa fa-bars" aria-hidden="true" />
						</p>
					) : (
						<p style={opacity} className="desktop-button">
							{name}
							<i
								className={open ? "fa fa-angle-up" : "fa fa-angle-down"}
								aria-hidden="true"
							/>
						</p>
					)}
				</div>
				{this.state.open ? (
					<div className="btn-dropdown-dropdown">
						<ul>
							<li>
								<NavLink
									to="/profile"
									activeStyle={activeNavLink}
									onClick={this.mobileCloseAfterClick}
								>
									My Profile
								</NavLink>
								<hr className="stick" />
							</li>
							<li>
								<NavLink
									to="/settings"
									activeStyle={activeNavLink}
									onClick={this.mobileCloseAfterClick}
								>
									Settings
								</NavLink>
								<hr className="stick" />
							</li>
							<li>
								<NavLink
									to="/logout"
									activeStyle={activeNavLink}
									onClick={this.mobileCloseAfterClick}
								>
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
