import React from "react";
import LocationArticle from "./article/LocationArticle";
import LocationNavbar from "./navbar/LocationNavbar";
import "./Locations.scss";

const Locations = () => {
	return (
		<div className="locations flex-container">
			<LocationArticle />
			<LocationNavbar />
		</div>
	);
};

export default Locations;
