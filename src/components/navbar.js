import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import app from "./auth/firebase";

function navbar(props) {
	const [user, setUser] = useState({});
	const auth = getAuth(app);

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	});

	const logout = async () => {
		await signOut(auth);
		console.log("Signed Out...");
	};

	const loginIcon = () => {
		return (
			<div>
				<NavLink to="/create-account" className="login-icon">
					<FontAwesomeIcon icon="fa-solid fa-user" />
				</NavLink>
			</div>
		);
	};

	const logoutIcon = () => {
		return (
			<div>
				<NavLink to="/" onClick={logout} className="login-icon">
					<FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
				</NavLink>
			</div>
		);
	};

	return (
		<div className="navbar-wrapper">
			<img src="./assets/Peach-Poutine.png" alt="Main Logo" />

			<div className="navbar-link-wrapper">
				<NavLink to="/" className="navbar-link">
					Home
				</NavLink>
				<NavLink to="/merch" className="navbar-link">
					Merch
				</NavLink>
				<NavLink to="/about-us" className="navbar-link">
					About
				</NavLink>
			</div>

			<div className="icons-wrapper">
				<NavLink to="/cart" className="shopping-cart-icon">
					<FontAwesomeIcon icon="fa-solid fa-shopping-cart" />
				</NavLink>
				{/* {props.loggedInStatus === "LOGGED_IN" ? logoutIcon : loginIcon} */}
				{user ? logoutIcon() : loginIcon()}
			</div>
		</div>
	);
}

export default navbar;
