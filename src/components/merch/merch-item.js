import React from "react";

const merchItem = (props) => {
	const { id, name, pictureUrl, price, type } = props.merchItem;

	return (
		<div>
			<h3>{id}</h3>
			<h3>{name}</h3>
			<h3>{pictureUrl}</h3>
			<h3>{price}</h3>
			<h3>{type}</h3>
		</div>
	);
};

export default merchItem;
