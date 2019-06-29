import React from "react";
import "./App.scss";
import Header from "./header/Header";
import Main from "./main/Main";
import Well from "./well/Well";
import Footer from "./footer/Footer";

const App = () => {
	return (
		<div className="app wrapper border">
			<Header />
			<Main />
			<Well />
			<Footer />
		</div>
	);
};

export default App;
