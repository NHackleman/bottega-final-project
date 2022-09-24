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
				<Navbar />

				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/merch" element={<Merch />} />
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/login" element={<Login />} />
					<Route path="/cart" element={<ShoppingCart />} />
					<Route path="*" element={<NoMatch />} />
				</Routes>
			</div>
		);
	}
}
