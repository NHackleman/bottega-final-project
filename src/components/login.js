import React, { Component } from "react";

import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseApp, initializeApp } from "firebase/app";
import "regenerator-runtime/runtime";
import { getDatabase } from "firebase/database";

import firebaseConfig from "../helpers/firebase";

export default class Login extends Component {
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

	// async loginEmailPassword(event) {
	// 	event.preventDefault();
	// 	try {
	// 		const loginEmail = this.state.email;
	// 		const loginPassword = this.state.password;

	// 		const userCredential = await signInWithEmailAndPassword(
	// 			auth,
	// 			loginEmail,
	// 			loginPassword
	// 		);
	// 		console.log(userCredential.user);
	// 	} catch (e) {
	// 		console.error("Firebase error");
	// 	}
	// }

	async handleSubmit(event) {
		event.preventDefault();
		const auth = getAuth(this.app);

		await createUserWithEmailAndPassword(
			auth,
			this.state.email,
			this.state.password
		)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log("Success");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log("ERROR", errorCode, errorMessage);
			});

		// if (this.state.password !== this.state.confirmPassword) {
		// 	console.error("Passwords don't match. Try again.");
		// } else if (this.state.password.length < 8) {
		// 	console.error("Password too short. Try again");
		// } else if (!checkPassword) {
		// 	console.error(
		// 		"Passwords must contain at least one number and special character"
		// 	);
		// } else {
		// 	console.log(
		// 		"Success",
		// 		this.state.email,
		// 		this.state.password,
		// 		this.state.confirmPassword
		// 	);
		// }
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
