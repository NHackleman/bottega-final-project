import React from "react";
import { useState } from "react";
import {
	onAuthStateChanged,
	signInWithEmailAndPassword,
	getAuth,
} from "firebase/auth";
import { NavLink } from "react-router-dom";
import app from "./firebase";

function login() {
	const [loginEmail, setloginEmail] = useState("");
	const [loginPassword, setloginPassword] = useState("");

	const [user, setUser] = useState({});
	const auth = getAuth(app);

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
			window.sessionStorage.setItem("email", user.user.email);
		} catch (error) {
			console.error("Create User error...", error.message);
		}
	};

	return (
		<div className="login-page">
			<div className="login-wrapper">
				<h1> Login User </h1>
				<input
					placeholder="Email..."
					onChange={(event) => {
						setloginEmail(event.target.value);
					}}
				/>
				<input
					placeholder="Password..."
					onChange={(event) => {
						setloginPassword(event.target.value);
					}}
				/>

				<div className="bottom-buttons-wrapper">
					<NavLink to="/create-account" className="login-link">
						Create Account
					</NavLink>
					<button onClick={login}> Login </button>
				</div>
			</div>
		</div>
	);
}

export default login;
