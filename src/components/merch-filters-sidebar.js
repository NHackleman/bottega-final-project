import React, { Component } from "react";

export default class MerchFiltersSidebar extends Component {
	constructor() {
		super();

		// this.filterClicked = this.filterClicked.bind(this);
	}

	// filterClicked() {
	// 	console.log("This filter was clicked");
	// }

	render() {
		return (
			<div className="merch-wrapper">
				<div className="sidebar-wrapper">
					<div className="merch-filters">
						<div
							className="merch-filter"
							onClick={() => {
								console.log("button clicked");
							}}
						>
							Shirts
						</div>
						<div
							className="merch-filter"
							onClick={() => {
								console.log("button clicked");
							}}
						>
							Pants
						</div>
						<div
							className="merch-filter"
							onClick={() => {
								console.log("button clicked");
							}}
						>
							Hats
						</div>
						<div
							className="merch-filter"
							onClick={() => {
								console.log("button clicked");
							}}
						>
							Misc
						</div>
					</div>
				</div>

				<div className="merch-items-wrapper">
					<div>Merch goes here</div>
				</div>
			</div>
		);
	}
}
