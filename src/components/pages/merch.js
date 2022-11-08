import React from "react";

import MerchFiltersSidebar from "../merch/merch-filters-sidebar";
import MerchBody from "../merch/merch-body";

function merch(props) {
	return (
		<div>
			<div className="merch-page">
				<MerchFiltersSidebar />

				<MerchBody />
			</div>
		</div>
	);
}

export default merch;
