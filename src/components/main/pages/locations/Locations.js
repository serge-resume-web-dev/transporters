import React from "react";
import LocationArticle from "./article/LocationArticle";
import LocationNavbar from "./navbar/LocationNavbar";
import "./Locations.scss";
import { locations as locationsData } from "./../../../../mock-data/locations-data";

const Locations = props => {
	const city = props.match.params.id;
	const currentLocation = locationsData.filter(
		item => item.heading.toLowerCase() === city
	)[0];

	return (
		<div className="locations flex-container">
			<LocationArticle places={currentLocation} />
			<LocationNavbar locations={locationsData} />
		</div>
	);
};

export default Locations;
