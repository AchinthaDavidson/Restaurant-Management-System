import React from "react";
import "./shoppingcart.css";
import { IoMdCloseCircle } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import CartItem from "../../components/CartItem";
import {
	GoogleMap,
	Marker,
	useJsApiLoader,
	Autocomplete,
	DirectionsRenderer,
} from "@react-google-maps/api";

const libraries = ["places"];

function ShoppingCart({
	visibilty,
	products,
	onProductRemove,
	onClose,
	onQuantityChange,
}) {
	const [address, setAddress] = useState("");
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: process.env.REACT_APP_GOOGLEMAP_API_KEY,
		libraries,
	});
	if(!isLoaded) return <div><h1>Loading</h1></div>;
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
					{products.map((product,index) => (
						<CartItem product={product} key={index} onQuantityChange={onQuantityChange} onProductRemove={onProductRemove}/>
					))}
					<hr/>
				<div >
						
					<input 
						style={{ padding: "1rem" , backgroundColor:"white", color:"black" , margin:"auto auto"}}
						type="text" placeholder="Enter Your Phone Number Here " pattern="[0-9]{10}"
						title="Enter valid phone number"/>

					 <Autocomplete		
						z-index={50}
						onChange={(e) => setAddress(e.target.value)}
						style={{ padding: "1rem" , backgroundColor:"white", color:"black" }}>
                               <input
							   z-index-={101}
                                  type="text"
                                  hidden={false}
                                  id="locationInputs"
                                  style={{ padding: "1rem" , backgroundColor:"white", color:"black"}}
                                  placeholder="Enter your drop point..."
                                  onClick={(e) => setAddress(e.target.value)}  
								  defaultValue={address}    /> 

                     </Autocomplete> 
					</div>
					<div style={{margin:"auto auto"}}>
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
		</div>
	);
}

export default ShoppingCart;
