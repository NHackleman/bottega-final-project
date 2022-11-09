import React, { Component, useContext, useEffect, useState } from "react";
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
import app from "./auth/firebase";

function App() {
	const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");

	Icons();

	function getLoggedInStatus() {
		try {
			const auth = getAuth(app);
			onAuthStateChanged(auth, (user) => {
				if (user) {
					setLoggedInStatus("LOGGED_IN");
					console.log("Logged In");
				} else {
					setLoggedInStatus("NOT_LOGGED_IN");
					console.log("Not Logged In");
				}
			});
			console.log("Mounted");
		} catch (err) {
			console.log("Error at mount", err);
		}
	}

	useEffect(() => {
		getLoggedInStatus;
	}, []);

	return (
		<div className="container">
			<Routes>
				<Navbar loggedInStatus={loggedInStatus} />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/merch" component={Merch} />
					<Route path="/about-us" component={AboutUs} />
					<Route path="/create-account" component={CreateAccount} />
					<Route path="/login" component={Login} />

					<Route path="/cart" component={ShoppingCart} />
					<Route path="*" component={NoMatch} />
				</Switch>
			</Routes>
		</div>
	);
}

export default App;
