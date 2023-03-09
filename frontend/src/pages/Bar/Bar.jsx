import React from "react";
import Niv from "../../components/Niv";
import "./Bar.css";
import { BsArrowUpCircle} from "react-icons/bs"
import axios from "axios";
import Bardata from "./Bardata.jsx";
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
  },[]);
  function Finddata(index){
    // document.getElementsByClassName("data")[index].hidden=false
    document.getElementById(index).hidden=false
  }
  function close(id){
    document.getElementById(id).hidden=true
  }

  var count = 0;for (var k in barinv) if (barinv.hasOwnProperty(k)) ++count;

  return (
    <div>
      <Niv name="Bar Inventory" />
      <div className="data">
      <div style={{display:'flex', margin: '1em',borderStyle:"solid",borderLeftWidth:"5px",width:'25%',borderColor:" white white white #0077be",backgroundColor:"white",borderRadius:"9px"}}>
          <div style={{flexGrow: '1' ,paddingTop:"5px",paddingLeft:"5px",fontSize:'30px'}}>Stock Summary</div>
          <div style={{flexGrow: '1',textAlign:'center' ,padding:'6px' ,borderLeft:"5px solid #dcdcdc"}}>
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

        <div className="table1">
          <table className="bar-tbl">
            <thead className="stk-tbl-head">
              <tr>
                <td className="tbl-head">Product Code</td>
                <td className="tbl-head">Product Name</td>
                <td className="tbl-head">Product Type</td>
                <td className="tbl-head">Quantity</td>
                <td className="tbl-head">Total Cost</td>
                <td className="tbl-head">Status</td>
              </tr>
            </thead>
            <tbody>
            {barinv.map((barinv,index) =>(
              <>
              <tr className="view-bar-inv" onClick={()=>Finddata(index)}>
                <td className="view-bar-inv">{barinv.Product_Code}</td>
                <td className="view-bar-inv">{barinv.Product_Name}</td>
                <td className="view-bar-inv">{barinv.Product_Type}</td>
                <td className="view-bar-inv">{barinv.Quantity}</td>
                <td className="view-bar-inv">{barinv.Total_Cost}</td>
                <td className="view-bar-inv">good</td>
              </tr>
                <tr id={index} hidden>
                  <td colSpan={6}>
                  <Bardata id={barinv.Product_Code}/>
                  <label onClick={()=>close(index)} ><BsArrowUpCircle fontSize={20}/></label>
                  </td>
                </tr>
              </>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bar;
