import React, { useState, useEffect } from "react";
import axios from "axios";

import MerchFiltersSidebar from "../merch/merch-filters-sidebar";
import MerchBody from "../merch/merch-body";

function merch(props) {
	const [items, setItems] = useState([]);
	const itemList = [];

	const [filter, setFilter] = useState("CLEAR");

	useEffect(() => {
		if (filter === "CLEAR") {
			axios({
				method: "GET",
				url: "https://nph-capstone-backend.herokuapp.com/merch-items",
			})
				.then((res) => {
					res.data.map((item) => {
						itemList.push(item);
					});
					setItems(itemList);
				})
				.catch((err) => {
					console.error(err);
				});
		} else if (filter === "SHIRTS") {
			axios({
				method: "GET",
				url: "https://nph-capstone-backend.herokuapp.com/merch-items/shirt",
			})
				.then((res) => {
					res.data.map((item) => {
						itemList.push(item);
					});
					setItems(itemList);
				})
				.catch((err) => {
					console.error(err);
				});
		} else if (filter === "PANTS") {
			axios({
				method: "GET",
				url: "https://nph-capstone-backend.herokuapp.com/merch-items/pants",
			})
				.then((res) => {
					res.data.map((item) => {
						itemList.push(item);
					});
					setItems(itemList);
				})
				.catch((err) => {
					console.error(err);
				});
		} else if (filter === "MISC") {
			axios({
				method: "GET",
				url: "https://nph-capstone-backend.herokuapp.com/merch-items/misc",
			})
				.then((res) => {
					res.data.map((item) => {
						itemList.push(item);
					});
					setItems(itemList);
				})
				.catch((err) => {
					console.error(err);
				});
		}
	}, [filter]);

	function handleShirtFilter() {
		setFilter("SHIRTS");
	}

	function handlePantsFilter() {
		setFilter("PANTS");
	}

	function handleMiscFilter() {
		setFilter("MISC");
	}

	return (
		<div>
			<div className="merch-page">
				<MerchFiltersSidebar
					handleShirtFilter={handleShirtFilter}
					handlePantsFilter={handlePantsFilter}
					handleMiscFilter={handleMiscFilter}
				/>

				<MerchBody items={items} />
			</div>
		</div>
	);
}

export default merch;
