import React from "react";
import LocationArticle from "./article/LocationArticle";
import LocationNavbar from "./navbar/LocationNavbar";
import "./Locations.scss";
import { locations } from "./../../../../mock-data/locations-data";

const Locations = () => {
	return (
		<div className="locations flex-container">
			<LocationArticle {...locations[0]} />
			<LocationNavbar />
		</div>
	);
};

export default Locations;
