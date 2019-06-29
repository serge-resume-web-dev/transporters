import React from "react";
import Logo from "../common/logo/Logo";
import "./Navigation.scss";

const Navigation = () => {
	return (
		<nav className="navigation-top">
			<div className="logo border">
				<Logo />
			</div>
			<div className="nav-button border">Nav button</div>
		</nav>
	);
};

export default Navigation;
