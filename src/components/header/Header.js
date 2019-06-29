import React from "react";
import Navigation from "./Navigation";
import Intro from "./Intro";

const Header = () => {
	return (
		<header className="header">
			<Navigation />
			<Intro />
		</header>
	);
};

export default Header;
