import React from "react";
import "./shoppingcart.css";
import { IoMdCloseCircle } from "react-icons/io";
import { GoogleMap, Marker, useJsApiLoader, Autocomplete,DirectionsRenderer } from '@react-google-maps/api';
import { useState, useRef, useEffect } from "react";
import CartItem from "../../components/CartItem";

function ShoppingCart({
	visibilty,
	products,
	onProductRemove,
	onClose,
	onQuantityChange,
}) 
{
	const [address, setAddress] = useState("");

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
					<hr/>
					<div className="input-field">
						<label className="PhoneNo">Phone number</label>
						<input type="text" placeholder="Phone Number" pattern="[0-9]{10}"
						title="Enter valied phone number"/>
					</div>
					<div className="input-field">
						<label className="Address">Current Address</label>

						<Autocomplete onChange={(e) => setAddress(e.target.value)}>
						

						<input type="text" hidden={true} id="locationInputs" 
						style={{padding:"1rem 1rem 1rem 1rem"}} 
						placeholder="Enter your drop point..." 
						onChange={(e) => setAddress(e.target.value)}
						onClick={(e) => setAddress(e.target.value)}
						onMouseMove={(e) => setAddress(e.target.value)}
						onMouseUp={(e) => setAddress(e.target.value)}
						value={address}
						/>
						</Autocomplete>
					</div>

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

