import React from "react";
import "./shoppingcart.css";
import { IoMdCloseCircle } from "react-icons/io";

import CartItem from "../../components/CartItem";

function ShoppingCart({
	visibilty,
	products,
	onProductRemove,
	onClose,
	onQuantityChange,
}) {
	return (
		<div
			className="modal"
			style={{
				display: visibilty
					? "block"
					: "none",
			}}>
			<div className="shoppingCart">
				<div className="header">
					<h2>Shopping cart</h2>
					<button
						className="btn close-btn"
						onClick={onClose}>
						<IoMdCloseCircle
							size={30}
						/>
					</button>
				</div>
				<div className="cart-products">
					{products.length === 0 && (
						<span className="empty-text">
							Your cart is
							currently empty
						</span>
					)}
					{products.map((product) => (
						<CartItem product={product} onQuantityChange={onQuantityChange} onProductRemove={onProductRemove}/>
					))}
					{products.length > 0 && (
						<a href="/OrderSummary">
						<button className="btn checkout-btn">
							Proceed to checkout
						</button>
						</a>
					)}
				</div>
			</div>
		</div>
	);
}

export default ShoppingCart;

