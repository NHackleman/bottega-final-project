import React, { useContext, useState } from "react";
import { CartItemsContext } from "../helpers/cart-items-context";
import App from "./app";

export default function appWrapper() {
	const [cartItems, setCartItems] = useState([]);
	return (
		<CartItemsContext.Provider value={{ cartItems, setCartItems }}>
			<App />
		</CartItemsContext.Provider>
	);
}
