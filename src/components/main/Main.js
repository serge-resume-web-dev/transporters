import React from "react";
import LocationArticle from "./LocationArticle";
import LocationNavbar from "./LocationNavbar";

const Main = () => {
	return (
		<section className="border">
			<h2 className="text-center">Main</h2>
			<LocationArticle />
			<LocationNavbar />
		</section>
	);
};

export default Main;
