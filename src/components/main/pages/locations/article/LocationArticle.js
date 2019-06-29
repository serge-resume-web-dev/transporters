import React from "react";
import "./LocationArticle.scss";

const LocationArticle = props => {
	const { heading, paragraph1, paragraph2 } = props.places;
	return (
		<article className="location-article">
			<h2>{heading}</h2>
			<p>{paragraph1}</p>
			<p>{paragraph2}</p>
		</article>
	);
};

export default LocationArticle;
