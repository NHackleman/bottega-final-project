import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from "./navbar";
import Home from "./home.js";
import Shirts from "./shirts.js";
import Pants from "./pants.js";
import Hats from "./hats.js";
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
						<Route path="/shirts" component={Shirts} />
						<Route path="/pants" component={Pants} />
						<Route path="/hats" component={Hats} />
						<Route path="*" component={NoMatch} />
					</Switch>
				</Router>
			</div>
		);
	}
}
