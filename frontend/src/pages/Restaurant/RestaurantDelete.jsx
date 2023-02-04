import React from "react";
import axios from "axios";
import Niv from "../../components/Niv";
import "./RestaurantDelete.css";
import { useState, useRef, useEffect } from "react";

const RestaurantDelete = () => {
  const [id,setid] = useState("");
  const [name,setname] = useState("");
  const [time,settime] = useState("");
  const [date,setdate] = useState("");
  const [Quantity,setQuantity] = useState("");
  const [cost,setcost] = useState("");
  const [items, setItems] = useState([]);
  const delete1 = [];
  console.log(delete1)

  function Find(id){
    setid(id);
    
      if (id.length===4){
       
          function getItems() {
            const url="http://localhost:8070/Inventoryfood/find/"+id;

            axios.get(url).then((res) => {
              // console.log(res.data);
              setItems(res.data);
              // console.log(orders[1]);
            });
          }
          getItems();
        
      }
  }
  return (
    <div>
      <Niv name="Restaurent/ Delete Records" />
      <div className="data">
        <div className="carddel">
          <form action="#" className="Resdelform">
            <header className="delheader">Delete the records</header>
            <br />
            <div className="form first">
              <div class="delete details">
                <div class="fields">
                  <div class="input-field">
                    <label className="ResdelProductCode">Item Id</label>
                    <input type="text" placeholder="Item Id" value={id}
                    onChange={(e) => Find(e.target.value)}/>
                  </div>
                  <div class="input-field">
                    <label className="ResdelProductCode">Item Name</label>
                    <input type="text" placeholder="Item Name" value={name}
                    onChange={(e) => setname(e.target.value)}/>
                  </div>
                  <div class="input-field">
                    <label>Date</label>
                    <input type="date" />
                  </div>
                </div>
              </div>
            </div>
            <br/>
              

            <table className="ResDelDesc">
              <tr className="tbl-head">
                <td className="del-tbl-head">Time</td>
                <td className="del-tbl-head">Buy Date</td>
                <td className="del-tbl-head">Quantity</td>
                <td className="del-tbl-head">Unit Cost</td>
                <td className="del-tbl-head">Buy Cost</td>
                <td className="del-tbl-head"></td>
              </tr>
              {items.map((items, index) => (
              <tr key={index}>
             
                <td className="del-tbl-data">{items.time}</td>
                <td className="del-tbl-data">{items.date}</td>
                <td className="del-tbl-data">{items.Quantity}</td>
                <td className="del-tbl-data">{items.Unit_Price}</td>
                <td className="del-tbl-data">{Number(items.Quantity*items.Unit_Price)}</td>
                <td className="del-tbl-data">
                  <input type="checkbox" onClick={()=>delete1.push(items._id)}/>
                </td>
              </tr>
              ))}
            </table>
            <button class="Add">
              <span class="addbtn">Delete</span>
            </button>
          </form>
            <a href="/Restaurant">
            <button class="back">
              <span class="bckbtn">Go Back</span>
            </button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDelete;
