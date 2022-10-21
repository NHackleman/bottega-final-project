import React, { Component } from "react";

class ShoppingCart extends Component {
	constructor() {
		super();

		this.state = {
			itemCount: 0,
			cartTotalPrice: 0,
		};
	}
	render() {
		return (
			<div className="cart-page">
				<div className="cart-wrapper">
					<div className="cart-items-column">
						<h3 className="cart-title">Your Cart Items:</h3>
					</div>

					<div className="checkout-column">
						<button className="checkout-button">Checkout</button>
						<h3 className="total-price">
							Total: ${this.state.cartTotalPrice}
						</h3>
					</div>
				</div>
			</div>
		);
	}
}

export default ShoppingCart;
