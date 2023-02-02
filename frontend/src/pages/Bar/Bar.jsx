import React from "react";
import Niv from "../../components/Niv";
import "./Bar.css";
import axios from "axios";
import { useState,useEffect } from "react";

const Bar = () => {

  const[barinv, setbar] = useState([]);

  useEffect(()=>{
    const getbarval = () =>{
      axios.get("http://localhost:8070/barInventory/")
      .then((barinventories)=>{
        setbar(barinventories.data);
      }).catch((err)=>{
        alert(err);
      })
    }
    getbarval();
  },[])

  return (
    <div>
      <Niv name="Bar Inventory" />
      <div className="data">
        <h2>Stock view</h2>

        <a href="Bar/BarAdd">
          <button className="barinvadd">Add Bar Inventory </button>
        </a>

        <a href="Bar/BarDelete">
          <button className="barinvdel">Delete Bar Inventory</button>
        </a>

        <div className="cardinv">
          <table className="barstatus">
          <div className="tbl-head">
            <tr className="tbl-head">
            <td className="tbl-head">Product Code</td>
              <td className="tbl-head">Product Name</td>
              <td className="tbl-head">Product Type</td>
              <td className="tbl-head">Quantity</td>
              <td className="tbl-head">Status</td>
              
            </tr>
            </div>
            {barinv.map((barinv,index) =>(
              <div>
              <tr className="view-bar-inv" key={index}>
              <td className="view-bar-inv">{barinv.Product_Code}</td>
              <td className="view-bar-inv">{barinv.Product_Name}</td>
              <td className="view-bar-inv">{barinv.Product_Type}</td>
              <td className="view-bar-inv">{barinv.Quantity}</td>
              <td className="view-bar-inv">good</td>
            </tr>
            <hr/>
            </div>
            ))}
          </table>
          
        </div>
      </div>
    </div>
  );
};

export default Bar;
