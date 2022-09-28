import React, { Component } from "react";

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			confirmPassword: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

		const regularExpression =
			/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
		const pass = this.state.password;
		let checkPassword = regularExpression.test(pass);

		if (this.state.password !== this.state.confirmPassword) {
			console.error("Passwords don't match. Try again.");
		} else if (this.state.password.length < 8) {
			console.error("Password too short. Try again");
		} else if (!checkPassword) {
			console.error(
				"Passwords must contain at least one number and special character"
			);
		} else {
			console.log(
				"Success",
				this.state.email,
				this.state.password,
				this.state.confirmPassword
			);
		}
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
						<input
							type="password"
							name="confirmPassword"
							placeholder="Confirm Password"
							value={this.state.confirmPassword}
							onChange={this.handleChange}
						/>

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
