import React, { Component } from "react";

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			// confirmPasswordInput: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		console.log(
			"Handle Submit",
			this.state.email,
			this.state.password
			// this.state.confirmPasswordInput
		);
		event.preventDefault();
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	render() {
		return (
			<div className="login-page">
				<div className="login-wrapper">
					<h1>Login</h1>

					<form onSubmit={this.handleSubmit}>
						<input
							type="email"
							name="email"
							placeholder="Email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
						<input
							type="password"
							name="password"
							placeholder="Password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
						{/* <input
							type="password"
							name="confirmPassword"
							placeholder="Confirm Password"
							value={this.state.confirmPasswordInput}
							onChange={this.handleChange}
						/> */}

						<div className="bottom-buttons-wrapper">
							<a className="login-link">Login</a>
							<button
								type="submit"
								className="create-account-button"
							>
								Create Account
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
