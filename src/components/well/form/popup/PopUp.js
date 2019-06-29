import React from "react";
import imageSuccess from "./../../../../img/success.png";
import "./PopUp.scss";

const PopUp = props => {
	const { hidePopup, success, error } = props;

	return (
		<React.Fragment>
			<div className="backdrop" onClick={hidePopup} />
			<div className="popup">
				<div className="item button-close">
					<i className="fa fa-times" aria-hidden="true" onClick={hidePopup} />
				</div>
				<div className="item">
					{success ? (
						<img src={imageSuccess} alt="success tick" />
					) : (
						<i className="fa fa-exclamation-circle" aria-hidden="true" />
					)}
				</div>
				<h4 className="item">
					{success ? "Successfully!" : "Ouff! Something went wrong."}
				</h4>
				<p className="item">
					{success ? "Registration completed." : `Error: ${error.toString()}`}
				</p>
			</div>
		</React.Fragment>
	);
};

export default PopUp;
