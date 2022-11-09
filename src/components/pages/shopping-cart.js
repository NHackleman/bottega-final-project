import {
	collection,
	getDocs,
	getFirestore,
	deleteDoc,
	doc,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import app from "../auth/firebase";

import CartItem from "../cart/cart-item";

function shoppingCart() {
	let total = 0;
	let i = -1;
	const [merchItems, setMerchItems] = useState([]);
	const db = getFirestore(app);
	const dbInstance = collection(db, "shopping-cart");

	useEffect(() => {
		const fetchItems = async () => {
			const data = await getDocs(dbInstance);

			setMerchItems(
				data.docs.map((item) => {
					return { ...item.data(), id: item.id };
				})
			);
		};

		fetchItems().catch((err) => {
			console.error("Data fetch error", err);
		});
	}, [merchItems]);

	const itemList = merchItems.map((item) => {
		i += 1;
		return <CartItem key={i} item={item} />;
	});

	const cartPrices = merchItems.map((item) => {
		total += Number(item.price);
		i += 1;
		return (
			<div key={i} className="checkout-item">
				<div className="checkout-item-name">{item.name}</div>
				<div>${item.price}.00</div>
			</div>
		);
	});

	return (
		<div className="cart-page">
			<div className="cart-wrapper">
				<div className="cart-items-column">
					<h3 className="cart-title">Your Cart Items:</h3>
					<div>{itemList}</div>
				</div>

				<div className="checkout-column">
					<button className="checkout-button">Checkout</button>
					<h3 className="total-price">Total: ${total}.00</h3>
					<div>{cartPrices}</div>
				</div>
			</div>
		</div>
	);
}

export default shoppingCart;
