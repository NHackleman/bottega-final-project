import React, { Component } from "react";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { FirebaseApp, initializeApp } from "firebase/app";
import "regenerator-runtime/runtime";
import { getDatabase } from "firebase/database";
import { NavLink } from "react-router-dom";

export default class CreateAccount extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			confirmPassword: "",
			apiKey: "AIzaSyDb8_bjxESZKK832EgKTShrcroy9byC8yM",
			authDomain: "bottega-project-43055.firebaseapp.com",
			projectId: "bottega-project-43055",
			storageBucket: "bottega-project-43055.appspot.com",
			messagingSenderId: "64318185338",
			appId: "1:64318185338:web:07b981438f21df1fe7c0c3",
		};

		const app = initializeApp({
			apiKey: this.state.apiKey,
			authDomain: this.state.authDomain,
			projectId: this.state.projectId,
			storageBucket: this.state.storageBucket,
			messagingSenderId: this.state.messagingSenderId,
			appId: this.state.appId,
		});

		const db = getDatabase(app);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit(event) {
		event.preventDefault();
		const auth = getAuth(this.app);

		if (this.state.password !== this.state.confirmPassword) {
			alert("Passwords don't match. Try again.");
		} else {
			await createUserWithEmailAndPassword(
				auth,
				this.state.email,
				this.state.password
			)
				.then((userCredential) => {
					const user = userCredential.user;
					console.log(
						"Success",
						this.state.email,
						this.state.password,
						this.state.confirmPassword
					);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					alert("ERROR", errorCode, errorMessage);
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
