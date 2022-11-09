import React from "react";
import { useState } from "react";
import {
	onAuthStateChanged,
	signInWithEmailAndPassword,
	getAuth,
} from "firebase/auth";
import { NavLink } from "react-router-dom";
import app from "./firebase";

function login(props) {
	const [loginEmail, setloginEmail] = useState("");
	const [loginPassword, setloginPassword] = useState("");

	const [user, setUser] = useState({});
	const auth = getAuth(app);

	// onAuthStateChanged(auth, (currentUser) => {
	// 	setUser(currentUser);
	// });

	// const login = async () => {
	// 	try {
	// 		const user = await signInWithEmailAndPassword(
	// 			auth,
	// 			loginEmail,
	// 			loginPassword
	// 		);
	// 		console.log(user);
	// 	} catch (error) {
	// 		console.error("Create User error...", error.message);
	// 	}
	// };

	const login = async (event) => {
		event.preventDefault();
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword
			);
			console.log(user);
		} catch (error) {
			console.error("Create User error...", error.message);
		}
		props.history.push("/");
	};

	return (
		<div className="login-page">
			<div className="login-wrapper">
				<h1> Login User </h1>
				<form onSubmit={login}>
					<input
						placeholder="Email..."
						type="email"
						onChange={(event) => {
							setloginEmail(event.target.value);
						}}
					/>
					<input
						placeholder="Password..."
						type="password"
						onChange={(event) => {
							setloginPassword(event.target.value);
						}}
					/>

					<div className="bottom-buttons-wrapper">
						<NavLink to="/create-account" className="login-link">
							Create Account
						</NavLink>
						<input
							type="submit"
							value="Login"
							className="login-button"
						/>
					</div>
				</form>
			</div>
		</div>
	);
}

export default login;
