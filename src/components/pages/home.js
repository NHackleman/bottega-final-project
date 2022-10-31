import React from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/firebase";

export default function home() {
	// useEffect(() => {
	// 	onAuthStateChanged(auth, (user) => {
	// 		console.log(user);
	// 	});
	// });
	return (
		<div className="home-page">
			<h1 className="home-title">Peach Poutine Gaming</h1>
		</div>
	);
}
