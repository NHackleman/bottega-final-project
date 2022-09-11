import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from "./navbar";
import Home from "./home.js";
import Merch from "./merch.js";
import AboutUs from "./about-us.js";
import NoMatch from "./no-match.js";

import Icons from "../helpers/icons";

export default class App extends Component {
	constructor() {
		super();

		Icons();
	}
	render() {
		return (
			<div className="container">
				<Router>
					<Navbar />

					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/merch" component={Merch} />
						<Route path="/about-us" component={AboutUs} />
						<Route path="*" component={NoMatch} />
					</Switch>
				</Router>
			</div>
		);
	}
}
