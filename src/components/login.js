import React, { Component } from "react";

class Login extends Component {
	render() {
		return (
			<div className="login-page">
				<div className="login-wrapper">
					<h1>Login</h1>

					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />

					<div className="bottom-buttons-wrapper">
						<a
							className="create-account-link"
							onClick={() => {
								console.log("Create account");
							}}
						>
							Create Account
						</a>
						<button className="login-button">Login</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
