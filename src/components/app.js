import React, { Component } from "react";

import Navbar from "./navbar";

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<img src="./assets/Peach-Poutine-Logo-v2.png" alt="Main Logo" />

        <Navbar />
			</div>
		);
	}
}
