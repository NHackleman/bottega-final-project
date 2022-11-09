import React, { Component } from "react";

function merchFiltersSidebar(props) {
	function setShirtFilter() {
		props.handleShirtFilter();
	}

	function setPantsFilter() {
		props.handlePantsFilter();
	}

	function setMiscFilter() {
		props.handleMiscFilter();
	}

	return (
		<div>
			<div className="sidebar-wrapper">
				<div className="merch-filters">
					<div onClick={setShirtFilter} className="merch-filter">
						Shirts
					</div>
					<div onClick={setPantsFilter} className="merch-filter">
						Pants
					</div>
					<div onClick={setMiscFilter} className="merch-filter">
						Misc
					</div>
				</div>
			</div>
		</div>
	);
}

export default merchFiltersSidebar;
