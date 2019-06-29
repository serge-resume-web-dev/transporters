import React from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";
import logo from "./../../../img/logo.png";

const Logo = () => {
	return (
		<Link to="/" className="logo">
			<img src={logo} alt="logo image Transporters" />
			<span>Transporters</span>
		</Link>
	);
};

export default Logo;
