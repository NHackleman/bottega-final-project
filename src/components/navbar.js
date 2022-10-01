import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function navbar() {
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
				<NavLink to="/create-account" className="login-icon">
					<FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />
				</NavLink>
			</div>
		</div>
	);
}

export default navbar;
