import { MdFavorite } from 'react-icons/md';
import './App.css';
import { useEffect, useState } from "react";
import * as React from 'react';
import ShoppingCart from './components/shoppingcart';
import { FaShoppingCart } from "react-icons/fa";

const products = [
	{
		id: 1,
		name: "Tomato and Onion Salad",
		price: 550,
		image: require("./Images/Tomato.jpeg"),
	},
	{
		id: 2,
		name: "Cucumber Salad",
		price: 500,
		image: require("./Images/Cucumber.jpeg"),
	},
	{
		id: 3,
		name: "Tomato and Onion Salad",
		price: 550,
		image: require("./Images/Tomato.jpeg"),
	},
	{
		id: 4,
		name: "Cucumber Salad",
		price: 500,
		image: require("./Images/Cucumber.jpeg"),
	},
	{
		id: 5,
		name: "Tomato and Onion Salad",
		price: 550,
		image: require("./Images/Tomato.jpeg"),
	},
	{
		id: 6,
		name: "Cucumber Salad",
		price: 500,
		image: require("./Images/Cucumber.jpeg"),
	},
];


function App() {
	const [cartsVisibilty, setCartVisible] =
		useState(false);
	const [productsInCart, setProducts] =
		useState(
			JSON.parse(
				localStorage.getItem(
					"shopping-cart"
				)
			) || []
		);
	useEffect(() => {
		localStorage.setItem(
			"shopping-cart",
			JSON.stringify(productsInCart)
		);
	}, [productsInCart]);
	const addProductToCart = (product) => {
		const newProduct = {
			...product,
			count: 1,
		};
		setProducts([
			...productsInCart,
			newProduct,
		]);
	};

	const onQuantityChange = (
		productId,
		count
	) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === productId
				);
			if (productsIndex !== -1) {
				oldState[productsIndex].count =
					count;
			}
			return [...oldState];
		});
	};

	const onProductRemove = (product) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === product.id
				);
			if (productsIndex !== -1) {
				oldState.splice(productsIndex, 1);
			}
			return [...oldState];
		});
	};



  return (
    <div className = 'App'>
      <ShoppingCart
				visibilty={cartsVisibilty}
				products={productsInCart}
				onClose={() =>
					setCartVisible(false)
				}
				onQuantityChange={
					onQuantityChange
				}
				onProductRemove={onProductRemove}
			/>

      <head>
        <title>Food Menu</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap%22" rel= "stylesheet"/>
      </head>


      <body>
        <div className="heading">
          <h1>PALLADIUM RESTAURANT & BAR</h1>
          <h3>&mdash; OUR MENU &mdash;</h3>
        </div>

        <div className="navbar">
		
          <button
            className="btn-shopping-cart-btn"
            onClick={() =>
              setCartVisible(true)
            }>
          
            <FaShoppingCart size={35} />
            {productsInCart.length >
              0 && (
              <span className="product-count">
                {
                  productsInCart.length
                }
              </span>
            )}
          </button>
        </div>

        <div className="menu">
        {products.map((product) => (
          <div className="food-items">
            <div className="image">
              <img src={product.image} alt="menu"/>
            </div>
            <div className="details">
              <div className="details-sub">
                <h5>{product.name}</h5>
                <h5 class="price">Rs.{product.price}</h5>
              </div>

              <bottom>
                <button onClick={() =>
										addProductToCart(
											product
										)
									}>Add To Cart</button>
                <fav>
                  <MdFavorite size={30}/>
                </fav>
              </bottom>
            </div>
          </div>
        ))}
         

          

        </div>
      </body>

    </div>
  );
}

export default App;