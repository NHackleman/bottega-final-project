import React from "react";

const merchItem = (props) => {
	const { name, pictureUrl, price } = props.item;
	return (
		<div className="merch-items">
			<div className="merch-item">
				<img src={pictureUrl} />
				<div className="item-text">
					<div>{name}</div>
					<div>${price}</div>
				</div>
			</div>
		</div>
	);
};

export default merchItem;
