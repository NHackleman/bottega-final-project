import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../auth/firebase";
import {
	getFirestore,
	serverTimestamp,
	collection,
	addDoc,
} from "firebase/firestore";

const merchItem = (props) => {
	const { name, pictureUrl, price } = props.item;
	const [loggedIn, setLoggedIn] = useState(false);

	const auth = getAuth(app);
	const db = getFirestore(app);

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				setLoggedIn(true);
			}
		});
	}, []);

	function addMerchItem() {
		onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				try {
					const itemsRef = addDoc(collection(db, "shopping-cart"), {
						userID: currentUser.uid,
						name: name,
						pictureUrl: pictureUrl,
						price: price,
						addedAt: serverTimestamp(),
					});
					alert(`${name} added to cart!`);
					console.log("Document written", itemsRef);
				} catch (err) {
					console.log("Error adding to document", err);
				}
			} else {
				alert("Please log in to add items to cart");
			}
		});
	}

	return (
		<div className="merch-items">
			<div className="merch-item">
				<img src={pictureUrl} />
				<div className="item-text">
					<div>{name}</div>
					<div>${price}</div>
				</div>
				<div className="icon-wrapper">
					{loggedIn ? (
						<FontAwesomeIcon
							icon="fa-solid fa-plus"
							className="plus-icon"
							onClick={addMerchItem}
						/>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default merchItem;
