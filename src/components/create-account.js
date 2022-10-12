import React, { Component } from "react";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { FirebaseApp, initializeApp } from "firebase/app";
import "regenerator-runtime/runtime";
import { NavLink } from "react-router-dom";

import firebaseConfig from "./firebase";

export default class CreateAccount extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			confirmPassword: "",
		};

		const app = initializeApp(firebaseConfig);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSuccessfulAuth() {
		this.props.handleSuccessfulLogin();
		this.props.history.push("/");
	}

	handleUnsuccessfulAuth() {
		this.props.handleUnsuccessfulLogin();
	}

	async handleSubmit(event) {
		event.preventDefault();
		const auth = getAuth(this.app);
		const userEmail = this.state.email;
		const userPassword = this.state.password;

		if (this.state.password !== this.state.confirmPassword) {
			alert("Passwords don't match. Try again.");
		} else {
			await createUserWithEmailAndPassword(auth, userEmail, userPassword)
				.then((userCredential) => {
					const user = userCredential.user;
					
					console.log("Success");
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.error("Custom error", errorCode, errorMessage);
				});
		}
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	render() {
		return (
			<div className="create-account-page">
				<div className="create-account-wrapper">
					<h1>Create Account</h1>

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
							<NavLink to="/login" className="login-link">
								Login
							</NavLink>
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
