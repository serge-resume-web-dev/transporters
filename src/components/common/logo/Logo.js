import React from "react";
import "./Logo.scss";
import logo from "./../../../img/logo.png";

const Logo = () => {
	return (
		<a href="https://www.my-transporters-homepage.com" className="logo">
			<img src={logo} alt="logo image Transporters" />
			<span>Transporters</span>
		</a>
	);
};

export default Logo;
