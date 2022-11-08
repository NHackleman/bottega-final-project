import axios from "axios";
import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import app from "../auth/firebase.js";

import MerchItem from "./merch-item.js";

function merchBody() {
	const [items, setItems] = useState([]);
	let i = -1;
	const itemList = [];

	useEffect(() => {
		axios({
			method: "GET",
			url: "http://localhost:5000/cart-items",
		})
			.then((res) => {
				res.data.map((item) => {
					itemList.push(item);
					// setItems((itemList) => [...itemList, item]);
				});
				setItems(itemList);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const merchItems = items.map((merchItem) => {
		i += 1;
		return <MerchItem key={i} item={merchItem} />;
	});
	return (
		<div>
			<div className="merch-items-grid">{merchItems}</div>
		</div>
	);
}

export default merchBody;
