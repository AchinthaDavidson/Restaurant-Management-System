import React from "react";
import Niv from "../../components/Niv";
import "./RestaurantDelete.css";
import { useState, useRef, useEffect } from "react";
import DeleteData from "./DeleteData";


const RestaurantDelete = () => {
  const [id,setid] = useState("");
  const [name,setname] = useState("");
  const [time,settime] = useState("");
  const [date,setdate] = useState("");
  const [Quantity,setQuantity] = useState("");
  const [cost,setcost] = useState("");

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
                    onChange={(e) => setid(e.target.value)}/>
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
                <DeleteData id={id}/>

            <table className="ResDelDesc">
              <tr className="tbl-head">
                <td className="del-tbl-head">Time</td>
                <td className="del-tbl-head">Buy Date</td>
                <td className="del-tbl-head">Quantity</td>
                <td className="del-tbl-head">Buy Cost</td>
                <td className="del-tbl-head"></td>
              </tr>
              <tr>
                <td className="del-tbl-data">{time}</td>
                <td className="del-tbl-data">{date}</td>
                <td className="del-tbl-data">{Quantity}</td>
                <td className="del-tbl-data">{cost}</td>
                <td className="del-tbl-data">
                  <input type="checkbox" />
                </td>
              </tr>
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
