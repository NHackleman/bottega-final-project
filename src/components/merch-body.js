import React, { Component } from "react";
import axios from "axios";

import MerchItem from "./merch-item.js";

class MerchBody extends Component {
	constructor() {
		super();

		this.state = {
			merchItems: [],
		};
		const corsAnywhereUrl = "https://vast-woodland-10845.herokuapp.com/";

		this.getMerchItems = this.getMerchItems.bind(this);
	}

	getMerchItems() {
		axios
			.get(`http://localhost:5000/cart-items`)
			.then((res) => {
				this.setState({
					merchItems: this.state.merchItems.concat(res.data),
				});
				console.log(this.state.merchItems);
			})
			.catch((err) => {
				console.error("Fetch error", err);
			});
	}

	componentWillMount() {
		this.getMerchItems();
	}

	// Cannot find props in MerchItem
	render() {
		const merch_items = this.state.merchItems.map((merchItem) => {
			return <MerchItem key={merchItem.id} merchItem={merchItem} />;
		});
		return (
			<div>
				<h1 className="api-data">API Data</h1>

				<div className="content-container">{merch_items}</div>
			</div>
		);
	}
}

export default MerchBody;
