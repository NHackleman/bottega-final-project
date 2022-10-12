import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signOut,
	signInWithEmailAndPassword,
} from "firebase/auth";

// const loginIcon = () => {
// 	return (
// 		<div>
// 			<NavLink to="/create-account" activeClassName="login-icon">
// 				<FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />
// 			</NavLink>
// 		</div>
// 	);
// };

// const logoutIcon = () => {
// 	return (
// 		<div>
// 			<NavLink to="/" activeClassName="login-icon">
// 				<FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
// 			</NavLink>
// 		</div>
// 	);
// };

const dynamicLink = (route, icon) => {
	return (
		<div>
			<NavLink to={route} className="login-icon">
				<FontAwesomeIcon icon={icon} />
			</NavLink>
		</div>
	);
};

function navbar(props) {
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
					About Us
				</NavLink>
			</div>

			<div className="icons-wrapper">
				<NavLink to="/cart" className="shopping-cart-icon">
					<FontAwesomeIcon icon="fa-solid fa-shopping-cart" />
				</NavLink>
				{/* <NavLink to="/create-account" className="login-icon">
					<FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />
				</NavLink> */}
				{/* {props.loggedInStatus === "LOGGED_IN" ? logoutIcon : loginIcon} */}
				{props.loggedInStatus === "NOT_LOGGED_IN"
					? dynamicLink(
							"/create-account",
							"fa-solid fa-right-to-bracket"
					  )
					: dynamicLink("/", "fa-solid fa-right-from-bracket")}
			</div>
		</div>
	);
}

export default navbar;
