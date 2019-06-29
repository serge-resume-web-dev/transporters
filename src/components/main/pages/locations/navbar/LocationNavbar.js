import React from "react";
import { NavLink } from "react-router-dom";
import "./LocationNavbar.scss";

const LocationNavbar = ({ locations }) => {
	return (
		<div className="location-navbar">
			<nav>
				<ul>
					{locations.map((location, index) => (
						<li key={location.heading}>
							<NavLink to={`/location/${location.heading.toLowerCase()}`}>
								{location.heading}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default LocationNavbar;
