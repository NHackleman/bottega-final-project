import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getFirestore, collection, deleteDoc, doc } from "firebase/firestore";
import app from "../auth/firebase";

const cartItem = (props) => {
	const item = props.item;
	const db = getFirestore(app);
	const dbInstance = collection(db, "shopping-cart");

	const handleDelete = async () => {
		await deleteDoc(doc(db, "shopping-cart", item.id)).catch((err) => {
			console.error("item deletion error", err);
		});
	};

	return (
		<div className="cart-item-wrapper">
			<div className="item-name">{item.name}</div>
			<div className="right-side">
				<img src={item.pictureUrl} alt={item.name} />
				<FontAwesomeIcon
					className="delete-icon"
					icon="fa-solid fa-circle-xmark"
					onClick={handleDelete}
				/>
			</div>
		</div>
	);
};

export default cartItem;
