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
				<NavLink to="/shirts" className="navbar-link">
					Shirts
				</NavLink>
				<NavLink to="/pants" className="navbar-link">
					Pants
				</NavLink>
				<NavLink to="/hats" className="navbar-link">
					Hats
				</NavLink>
			</div>

			<div className="icons-wrapper">
				<a className="navbar-icon">
					<FontAwesomeIcon icon="fa-solid fa-shopping-cart" />
				</a>
				<a className="navbar-icon">
					<FontAwesomeIcon icon="fa-solid fa-user" />
				</a>
			</div>
		</div>
	);
}

export default navbar;
