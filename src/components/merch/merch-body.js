import React, { Component } from "react";
import axios from "axios";

import MerchItem from "./merch-item.js";
import merchItemList from "../../helpers/items.js";

function merchBody() {

	// function getMerchItems() {
	// 	axios
	// 		.get("http://localhost:5000/cart-items")
	// 		.then((res) => {
	// 			console.log(res.data);
	// 		})
	// 		.catch((err) => {
	// 			console.error("Fetch error", err);
	// 		});
	// }

	const merchItemRecords = merchItemList.map((merchItem) => {
		return <MerchItem key={merchItem.id} item={merchItem} />;
	});
	return (
		<div>
			<div className="merch-items-grid">{merchItemRecords}</div>
		</div>
	);
}

export default merchBody;
