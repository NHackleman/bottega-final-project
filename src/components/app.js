import React, { Component } from "react";
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
import { useState } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
} from "firebase/auth";
import "regenerator-runtime/runtime";

import Navbar from "./navbar";
import Home from "./pages/home.js";
import Merch from "./pages/merch.js";
import AboutUs from "./pages/about-us.js";
import NoMatch from "./pages/no-match.js";
import CreateAccount from "./auth/create-account.js";
import Login from "./auth/login.js";
import ShoppingCart from "./pages/shopping-cart.js";

import auth from "./auth/firebase.js";

import Icons from "../helpers/icons";

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};

		// onAuthStateChanged(auth, (currentUser) => {
		// 	setUser(currentUser);
		// });

		Icons();
	}

	render() {
		return (
			<div className="container">
				<Routes>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/merch" component={Merch} />
						<Route path="/about-us" component={AboutUs} />
						<Route
							path="/create-account"
							component={CreateAccount}
						/>
						<Route path="/login" component={Login} />
						<Route path="/cart" component={ShoppingCart} />
						<Route path="*" component={NoMatch} />
					</Switch>
				</Routes>
			</div>
		);
	}
}
