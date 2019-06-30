import React from "react";
import "./Footer.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="flex-container">
				<div className="left">
					<p>Transporters {new Date().getFullYear()}</p>
				</div>
				<div className="right">
					<p>Test task</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
