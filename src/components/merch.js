import React from "react";

import MerchFiltersSidebar from "./merch-filters-sidebar";
import MerchBody from "./merch-body";

function merch() {
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
