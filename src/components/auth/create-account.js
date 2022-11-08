import React from "react";
import { useState } from "react";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	getAuth,
} from "firebase/auth";
import { NavLink } from "react-router-dom";
import app from "./firebase";

function createAccount() {
	const [registerEmail, setRegisterEmail] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");

	const [user, setUser] = useState({});
	const auth = getAuth(app);

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
			console.error("Create User error...", error.message);
		}
	};

	return (
		<div className="create-account-page">
			<div className="create-account-wrapper">
				<h1> Register User </h1>
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

				<div className="bottom-buttons-wrapper">
					<NavLink to="/login" className="login-link">
						Login
					</NavLink>
					<button onClick={register}> Create user </button>
				</div>
			</div>
		</div>
	);
}

export default createAccount;
