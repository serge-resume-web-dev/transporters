import React, { Component } from "react";
import Logo from "../common/logo/Logo";
import DropButton from "./../common/dropbutton/DropButton";
import "./Navigation.scss";

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mobile: false
		};
		this.setMobileScreen = this.setMobileScreen.bind(this);
	}

	setMobileScreen(e) {
		if (e.target.innerWidth < 576) {
			this.setState({
				mobile: true
			});
		} else {
			this.setState({
				mobile: false
			});
		}
	}

	componentDidMount() {
		if (window.innerWidth < 576) {
			this.setState({
				mobile: true
			});
		} else {
			this.setState({
				mobile: false
			});
		}
		window.addEventListener("resize", this.setMobileScreen, false);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.setMobileScreen, false);
	}

	render() {
		return (
			<nav className="navigation-top">
				{this.state.mobile ? (
					<div className="nav-button">
						<DropButton name="Julia Wozniak" mobile={this.state.mobile} />
						<div className="logo-container-mobile">
							<Logo />
						</div>
					</div>
				) : (
					<React.Fragment>
						<div className="logo-container">
							<Logo />
						</div>
						<div className="nav-button">
							<DropButton name="Julia Wozniak" mobile={this.state.mobile} />
						</div>
					</React.Fragment>
				)}
			</nav>
		);
	}
}

export default Navigation;
