import React, { useEffect, useState } from "react";

import MerchItem from "./merch-item.js";

function merchBody(props) {
	let i = -1;

	const merchItems = props.items.map((merchItem) => {
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
