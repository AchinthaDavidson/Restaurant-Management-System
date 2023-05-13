import Header from "../../components/header";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import "./Bar menu.css";

function Barmenu() {

    const [bardata, setbarData] = useState([]);

useEffect(()=>{
    const getbarval = () =>{
      axios.get("http://localhost:8070/barInventory/")
      .then((barinventories)=>{
        setbarData(barinventories.data);
      }).catch((err)=>{
        alert(err);
      })
    }
    getbarval();
},[]);

  return (
    <>
      <Header />
      <div className="cont">
        <div className="App">
          <body>
            <div className="bar heading">
              <h1>PALLADIUM RESTAURANT & BAR</h1>
              <h3>&mdash; OUR BAR MENU &mdash;</h3>
            </div>

            <div className="bar menu">
                {bardata.map((bardata)=>(
                    <div className="bar-items">
                        <div className="bar_image">
                            <img src={bardata.ImageURL} alt="menu" />
                        </div>
                        <div className="details">
                            <div className="details-sub">
                                <h5>{bardata.Product_Name}</h5>
                                <h5 class="price">Rs.{bardata.Price}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </body>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Barmenu;
