// import React, { Component } from "react";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { FirebaseApp, initializeApp } from "firebase/app";
// import "regenerator-runtime/runtime";
// import { NavLink } from "react-router-dom";

// import firebaseConfig from "./firebase";

// export default class Login extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			email: "",
// 			password: "",
// 		};

// 		const app = initializeApp(firebaseConfig);

// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}

// 	async handleSubmit(event) {
// 		event.preventDefault();
// 		const auth = getAuth(this.app);

// 		await signInWithEmailAndPassword(
// 			auth,
// 			this.state.email,
// 			this.state.password
// 		)
// 			.then((userCredential) => {
// 				const user = userCredential.user;
// 				console.log(
// 					"Login Success",
// 					this.state.email,
// 					this.state.password
// 				);
// 			})
// 			.catch((error) => {
// 				const errorCode = error.code;
// 				const errorMessage = error.message;
// 				alert("ERROR", errorCode, errorMessage);
// 			});
// 	}

// 	handleChange(event) {
// 		this.setState({
// 			[event.target.name]: event.target.value,
// 		});
// 	}

// 	render() {
// 		return (
// 			<div className="login-page">
// 				<div className="login-wrapper">
// 					<h1>Login</h1>

// 					<form onSubmit={this.handleSubmit}>
// 						<input
// 							type="email"
// 							name="email"
// 							placeholder="Email"
// 							value={this.state.email}
// 							onChange={this.handleChange}
// 						/>
// 						<input
// 							type="password"
// 							name="password"
// 							placeholder="Password"
// 							value={this.state.password}
// 							onChange={this.handleChange}
// 						/>

// 						<div className="bottom-buttons-wrapper">
// 							<NavLink
// 								to="/create-account"
// 								className="create-account-link"
// 							>
// 								Create Account
// 							</NavLink>
// 							<button type="submit" className="login-button">
// 								Login
// 							</button>
// 						</div>
// 					</form>
// 				</div>
// 			</div>
// 		);
// 	}
// }

import React from "react";
import { useState } from "react";
import {
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { NavLink } from "react-router-dom";

import { auth } from "./firebase.js";

function login() {
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");

	const [user, setUser] = useState({});

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	});

	const login = async () => {
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword
			);
			console.log(user);
		} catch (error) {
			console.error(error.message);
		}
	};

	// const logout = async () => {
	// 	await signOut(auth);
	// };

	return (
		<div className="login-body">
			<div>
				<h3> Login </h3>
				<input
					placeholder="Email..."
					onChange={(event) => {
						setLoginEmail(event.target.value);
					}}
				/>
				<input
					placeholder="Password..."
					onChange={(event) => {
						setLoginPassword(event.target.value);
					}}
				/>

				<button onClick={login}> Login </button>
			</div>

			<h4> User Logged In: </h4>
			{user ? user.email : null}

			{/* <button onClick={logout}> Sign Out </button> */}

			<NavLink to="/create-account" className="create-account-link">
				Create Account
			</NavLink>
		</div>
	);
}

export default login;
