import React from "react";
import imageSuccess from "./../../../../img/success.png";
import "./PopUp.scss";

const PopUp = props => {
	const { hidePopup } = props;

	return (
		<React.Fragment>
			<div className="backdrop" onClick={hidePopup} />
			<div className="popup">
				<div className="item button-close">
					<i className="fa fa-times" aria-hidden="true" onClick={hidePopup} />
				</div>
				<div className="item">
					<img src={imageSuccess} alt="success tick" />
				</div>
				<h4 className="item">Successfully!</h4>
				<p className="item">Registration completed.</p>
			</div>
		</React.Fragment>
	);
};

export default PopUp;
