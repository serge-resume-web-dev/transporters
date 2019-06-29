import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Locations from "./pages/locations/Locations";
import Profile from "./pages/user/Profile";
import Settings from "./pages/user/Settings";
import Logout from "./pages/user/Logout";
import PageNotFound from "./pages/PageNotFound";
import "./Main.scss";

const Main = () => {
	return (
		<section className="main">
			<Switch>
				<Route
					exact
					path="/"
					render={() => <Redirect from="/" to="/location/amsterdam" />}
				/>
				<Route path="/location/:id" component={Locations} />
				<Route path="/profile" component={Profile} />
				<Route path="/settings" component={Settings} />
				<Route path="/logout" component={Logout} />
				<Route component={PageNotFound} />
			</Switch>
		</section>
	);
};

export default Main;
