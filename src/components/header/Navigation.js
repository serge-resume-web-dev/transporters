import React from "react";
import Logo from "../common/logo/Logo";
import DropButton from "./../common/dropbutton/DropButton";
import "./Navigation.scss";

const Navigation = () => {
	return (
		<nav className="navigation-top">
			<div className="logo">
				<Logo />
			</div>
			<div className="nav-button">
				<DropButton name="Julia Wozniak" />
			</div>
		</nav>
	);
};

export default Navigation;
