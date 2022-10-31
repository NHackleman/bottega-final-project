import React, { Component } from "react";
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
import "regenerator-runtime/runtime";
import { getAuth, onAuthStateChanged, getCurrentUser } from "firebase/auth";

import Navbar from "./navbar";
import Home from "./pages/home.js";
import Merch from "./pages/merch.js";
import AboutUs from "./pages/about-us.js";
import NoMatch from "./pages/no-match.js";
import CreateAccount from "./auth/create-account.js";
import Login from "./auth/login.js";
import ShoppingCart from "./pages/shopping-cart.js";

import Icons from "../helpers/icons";
import auth from "./auth/firebase";

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: "",
			loggedInStatus: "",
		};

		Icons();
	}

	handleLogin() {
		this.setState({
			loggedInStatus: "LOGGED_IN",
		});
	}

	handleLogout() {
		this.setState({
			loggedInStatus: "NOT_LOGGED_IN",
		});
	}

	getLoggedInStatus() {
		try {
			const auth = getAuth();
			onAuthStateChanged(auth, (user) => {
				if (user) {
					console.log("Logged In");
				} else {
					console.log("Not Logged In");
				}
			});
			console.log("Mounted");
		} catch (err) {
			console.log("Error at mount", err);
		}
	}

	componentWillMount() {
		this.getLoggedInStatus;
	}

	componentWillUnmount() {
		console.warn("Successfully Logged Out");
	}

	render() {
		return (
			<div className="container">
				<Routes>
					<Navbar loggedInStatus={this.state.loggedInStatus} />
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
