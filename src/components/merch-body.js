import React, { useState, useEffect, Component } from "react";
import axios from "axios";

class MerchBody extends Component {
	constructor() {
		super();

		// const [data, setdata] = useState({
		this.state = {
			name: "",
			about: "",
		};

		// });
		const corsAnywhereUrl = "https://vast-woodland-10845.herokuapp.com/";
	}

	componentDidMount() {
		axios
			.get(`http://localhost:5000/profile`)
			.then((res) => {
				this.setState({
					name: res.data.name,
					about: res.data.about,
				});
				console.log("Response", res);
			})
			.catch((err) => {
				console.error("Fetch error", err);
			});
	}

	render() {
		return (
			<div>
				<h1 className="api-data">API Data</h1>

				<h3 className="api-data">{this.state.name}</h3>
				<h3 className="api-data">{this.state.about}</h3>
			</div>
		);
	}
}

export default MerchBody;
