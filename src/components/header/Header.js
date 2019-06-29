import React from "react";
import Navigation from "./Navigation";
import Intro from "./Intro";

const Header = () => {
	return (
		<header className="border">
			<Navigation />
			<Intro />
		</header>
	);
};

export default Header;
