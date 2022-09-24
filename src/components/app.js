import React, { Component } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";

import Navbar from "./navbar";
import Home from "./home.js";
import Merch from "./merch.js";
import AboutUs from "./about-us.js";
import NoMatch from "./no-match.js";
import Login from "./login.js";
import ShoppingCart from "./shopping-cart.js";

import Icons from "../helpers/icons";

export default class App extends Component {
	constructor() {
		super();

		Icons();
	}
	render() {
		return (
			<div className="container">
				<Routes>
					<Navbar />

					<Route exact path="/" component={Home} />
					<Route path="/merch" component={Merch} />
					<Route path="/about-us" component={AboutUs} />
					<Route path="/login" component={Login} />
					<Route path="/cart" component={ShoppingCart} />
					<Route path="*" component={NoMatch} />
				</Routes>
			</div>
		);
	}
}
