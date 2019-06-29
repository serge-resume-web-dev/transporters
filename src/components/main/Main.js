import React from "react";
import { Route, Switch } from "react-router-dom";
import Locations from "./pages/locations/Locations";
import Profile from "./pages/user/Profile";
import Settings from "./pages/user/Settings";
import Logout from "./pages/user/Logout";
import PageNotFound from "./pages/PageNotFound";

const Main = () => {
	return (
		<section className="border">
			<h2 className="text-center">Main</h2>
			<Switch>
				<Route exact path="/" component={Locations} />
				<Route path="/profile" component={Profile} />
				<Route path="/settings" component={Settings} />
				<Route path="/logout" component={Logout} />
				<Route component={PageNotFound} />
			</Switch>
		</section>
	);
};

export default Main;
