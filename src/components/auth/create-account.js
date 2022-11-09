import React from "react";
import { useState } from "react";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	getAuth,
} from "firebase/auth";
import { NavLink } from "react-router-dom";
import app from "./firebase";

function createAccount(props) {
	const [registerEmail, setRegisterEmail] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");

	const [user, setUser] = useState({});
	const auth = getAuth(app);

	// onAuthStateChanged(auth, (currentUser) => {
	// 	setUser(currentUser);
	// });

	const register = async (event) => {
		event.preventDefault();
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
		props.history.push("/");
	};

	return (
		<div className="create-account-page">
			<div className="create-account-wrapper">
				<h1> Register User </h1>
				<form onSubmit={register}>
					<input
						placeholder="Email..."
						type="email"
						onChange={(event) => {
							setRegisterEmail(event.target.value);
						}}
					/>
					<input
						type="password"
						placeholder="Password..."
						onChange={(event) => {
							setRegisterPassword(event.target.value);
						}}
					/>

					<div className="bottom-buttons-wrapper">
						<NavLink to="/login" className="login-link">
							Login
						</NavLink>
						<input
							type="submit"
							value="Register"
							className="create-account-button"
						/>
					</div>
				</form>
			</div>
		</div>
	);
}

export default createAccount;
