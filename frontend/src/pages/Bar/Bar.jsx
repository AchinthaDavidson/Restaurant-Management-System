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
  var count = 0;for (var k in barinv) if (barinv.hasOwnProperty(k)) ++count;

  return (
    <div>
      <Niv name="Bar Inventory" />
      <div className="data">
      <div style={{display:'flex', margin: '1em',borderStyle:"solid",borderLeftWidth:"5px",width:'25%',borderColor:" white white white #ff8243",backgroundColor:"white",borderRadius:"9px"}}>
          <div style={{flexGrow: '1' ,paddingTop:"5px",paddingLeft:"5px",fontSize:'30px'}}>Stock Summary</div>
          <div style={{flexGrow: '1',textAlign:'center' ,padding:'6px' ,borderLeft:"5px solid #DEE1E5"}}>
            <div style={{fontSize:'30px'}}>{count}</div>
            <div style={{fontSize:'10px'}}> Available Product In Stock</div>
          </div>
        </div>

        <a href="Bar/BarAdd">
          <button className="barinvadd">Add Bar Inventory </button>
        </a>

        <a href="Bar/BarDelete">
          <button className="barinvdel">Delete Bar Inventory</button>
        </a>

        {/* <div className="cardinv">
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
        </div> */}
        <div className="table1">
          <table className="bar-tbl">
            <thead className="stk-tbl-head">
              <tr>
                <td className="tbl-head">Product Code</td>
                <td className="tbl-head">Product Name</td>
                <td className="tbl-head">Product Type</td>
                <td className="tbl-head">Quantity</td>
                <td className="tbl-head">Status</td>
              </tr>
            </thead>
            <tbody>
            {barinv.map((barinv,index) =>(
              <tr className="view-bar-inv" key={index}>
              <td className="view-bar-inv">{barinv.Product_Code}</td>
              <td className="view-bar-inv">{barinv.Product_Name}</td>
              <td className="view-bar-inv">{barinv.Product_Type}</td>
              <td className="view-bar-inv">{barinv.Quantity}</td>
              <td className="view-bar-inv">good</td>
            </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bar;
