import React, { Component } from "react";
import Login from "./login";

export default class Auth extends Component {
	constructor(props) {
		super(props);

		this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
		this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
	}

	handleSuccessfulAuth() {
		this.props.handleSuccessfulLogin();
		this.props.history.push("/");
	}

	handleUnsuccessfulAuth() {
		this.props.handleSuccessfulLogout();
	}

	render() {
		return (
			<div className="auth-page-wrapper">
				<div className="login-wrapper">
					<Login
						handleSuccessfulAuth={this.handleSuccessfulAuth}
						handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
					/>
				</div>
			</div>
		);
	}
}
