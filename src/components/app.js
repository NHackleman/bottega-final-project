import React, { Component } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";

import Navbar from "./navbar";
import Home from "./home.js";
import Merch from "./merch.js";
import AboutUs from "./about-us.js";
import NoMatch from "./no-match.js";
import CreateAccount from "./create-account.js";
import Login from "./login.js";
import ShoppingCart from "./shopping-cart.js";

import Icons from "../helpers/icons";

export default class App extends Component {
	constructor(props) {
		super(props);

		Icons();

		this.state = {
			loggedInStatus: "NOT_LOGGED_IN",
		};
	}

	handleSuccessfulLogin() {
		this.setState({
			loggedInStatus: "LOGGED_IN",
		});
	}

	handleSuccessfulLogout() {
		this.setState({
			loggedInStatus: "NOT_LOGGED_IN",
		});
	}

	render() {
		return (
			<div className="container">
				<Routes>
					<Navbar loggedInStatus={this.state.loggedInStatus} />
					<Route exact path="/" component={Home} />
					<Route path="/merch" component={Merch} />
					<Route path="/about-us" component={AboutUs} />
					<Route
						path="/create-account"
						// render={(props) => {
						// 	<CreateAccount
						// 		{...props}
						handleSuccessfulLogin={this.handleSuccessfulLogin}
						handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
						component={CreateAccount}
					/>
					<Route
						path="/login"
						render={(props) => {
							<Login
								{...props}
								handleSuccessfulLogin={
									this.handleSuccessfulLogin
								}
								handleUnsuccessfulLogin={
									this.handleUnsuccessfulLogin
								}
							/>;
						}}
						component={Login}
					/>
					<Route path="/cart" component={ShoppingCart} />
					<Route path="*" component={NoMatch} />
				</Routes>
			</div>
		);
	}
}
