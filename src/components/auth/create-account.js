// import React, { Component } from "react";

// import {
// 	createUserWithEmailAndPassword,
// 	onAuthStateChanged,
// } from "firebase/auth";
// import "regenerator-runtime/runtime";
// import { NavLink } from "react-router-dom";

// import auth from "./firebase";

// export default class CreateAccount extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			email: "",
// 			password: "",
// 			confirmPassword: "",
// 			errorText: "",
// 		};

// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 		this.checkLoggedInStatus = this.checkLoggedInStatus.bind(this);
// 	}

// 	async handleSubmit(event) {
// 		event.preventDefault();
// 		const userEmail = this.state.email;
// 		const userPassword = this.state.password;

// 		if (this.state.password !== this.state.confirmPassword) {
// 			alert("Passwords don't match. Try again.");
// 		} else {
// 			await createUserWithEmailAndPassword(auth, userEmail, userPassword)
// 				.then((userCredential) => {
// 					const user = userCredential.user;
// 					this.props.handleSuccessfulAuth();
// 					console.log("Success");
// 				})
// 				.catch((error) => {
// 					const errorCode = error.code;
// 					const errorMessage = error.message;
// 					// this.props.handleUnsuccessfulAuth();
// 					console.error("Custom error", errorCode, errorMessage);
// 				});
// 		}
// 	}

// 	handleChange(event) {
// 		this.setState({
// 			[event.target.name]: event.target.value,
// 			errorText: "",
// 		});
// 	}

// 	checkLoggedInStatus() {
// 		onAuthStateChanged(auth, (user) => {
// 			console.log(user);
// 		});
// 	}

// 	render() {
// 		return (
// 			<div className="create-account-page">
// 				<div className="create-account-wrapper">
// 					<h1>Create Account</h1>
// 					<h3>{this.state.errorText}</h3>

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
// 						<input
// 							type="password"
// 							name="confirmPassword"
// 							placeholder="Confirm Password"
// 							value={this.state.confirmPassword}
// 							onChange={this.handleChange}
// 						/>

// 						<div className="bottom-buttons-wrapper">
// 							<NavLink to="/login" className="login-link">
// 								Login
// 							</NavLink>
// 							<button
// 								type="submit"
// 								className="create-account-button"
// 							>
// 								Create Account
// 							</button>
// 						</div>
// 					</form>

// 					<button onClick={this.checkLoggedInStatus}>button</button>
// 				</div>
// 			</div>
// 		);
// 	}
// }

import React, { Component } from "react";
import { useState } from "react";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth";
import { NavLink } from "react-router-dom";

import { auth } from "./firebase.js";

function createAccount() {
	const [registerEmail, setRegisterEmail] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");

	const [user, setUser] = useState({});

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	});

	const register = async () => {
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			console.log(user);
		} catch (error) {
			console.error(error.message);
		}
	};

	const logout = async () => {
		await signOut(auth);
	};

	return (
		<div className="app">
			<div>
				<h3> Register User </h3>
				<input
					placeholder="Email..."
					onChange={(event) => {
						setRegisterEmail(event.target.value);
					}}
				/>
				<input
					placeholder="Password..."
					onChange={(event) => {
						setRegisterPassword(event.target.value);
					}}
				/>

				<button onClick={register}> Create user </button>
			</div>

			<h4> User Logged In: </h4>
			{user ? user.email : null}

			<button onClick={logout}> Sign Out </button>
		</div>
	);
}

export default createAccount;

// Can create an account and login. app.js file needs a check that finds out if the user is logged in so they can add items to cart, view cart, etc.
