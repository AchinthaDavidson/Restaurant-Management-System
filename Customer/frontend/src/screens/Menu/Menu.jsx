import React, { useEffect, useState } from "react";

import Header from "../../components/header";

import axios from "axios";

import Footer from "../../components/Footer";

import ShoppingCart from "./shoppingcart";

import { FaShoppingCart } from "react-icons/fa";

import "./menu.css";

import MenuItem from '../../components/MenuItem';




function Menu() {

const [products, setproducts] = useState([]);

const [searchTerm, setSearchTerm] = useState("");

const [search, setSearch] = useState(true);

const [cartsVisibilty, setCartVisible] = useState(false);

const [productsInCart, setProducts] = useState(

                                            JSON.parse(

                                                localStorage.getItem(

                                                    "shopping-cart"

                                                )

                                            ) || []

                                        );

        /*approach - When the items in the state are updated the local storage is simultaneously updated*/

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

        console.log(newProduct)

        setProducts([

            ...productsInCart,

            newProduct

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

                        item._id === productId

                );

            if (productsIndex !== -1) {

                oldState[productsIndex].count =

                    count;

            }

            return [...oldState];

        });

    };

      

    useEffect(() => {

            axios

              .get("http://localhost:8090/food/")

              .then((res) => {

                setproducts(res.data);

        

                // setDishes(res.data);

              })

              .catch((err) => console.log(err));

          },[]);

        




    const onProductRemove = (product) => {

        console.log(product);

        setProducts((oldState) => {

            const productsIndex =

                oldState.findIndex(

                    (item) =>

                        item._id === product

                );

            if (productsIndex !== -1) {

                oldState.splice(productsIndex, 1);

            }

            return [...oldState];

        });

    };





    




  return (

    <><Header />

    <div className="cont">

      <div className='App'>

        <ShoppingCart

          visibilty={cartsVisibilty}

          products={productsInCart}

          onClose={() => setCartVisible(false)}

          onQuantityChange={onQuantityChange}

          onProductRemove={onProductRemove} />




        <head>

          <title>Food Menu</title>

          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap%22" rel="stylesheet" />

        </head>





        <body>

          <div className="heading">

            <h1>PALLADIUM RESTAURANT & BAR</h1>

            <h3>&mdash; OUR MENU &mdash;</h3>

          </div>




          <div className="navbar">




          <input type="text" style={{ height: "40px", borderColor:"rgba(53, 39, 68, 1)",marginTop:"20px",marginLeft:"40px",color:"black",borderRadius:"15px" }} placeholder=" Search..." onChange={(event) => {

            setSearchTerm(event.target.value);

          }} />




            <button

              className="btn-shopping-cart-btn"

              onClick={() => setCartVisible(true)}>




              <FaShoppingCart size={50} />

              {productsInCart.length >

                0 && (

                  <span className="product-count">

                    {productsInCart.length}

                  </span>

                )}

            </button>

          </div>




          <div className="menu">

            {products.filter((val) => {

              if (searchTerm === "") {

                return val;

              } else if (

                val.Name.toLowerCase().includes(searchTerm.toLowerCase())

              ) {

                return val;

              }

            }).map((product) => (

              <MenuItem product={product} addProductToCart={addProductToCart} productsInCart={productsInCart} />

            ))}

          </div>

        </body>

      </div>

    </div>

    <Footer/>

    </>

  );

}




export default Menu;