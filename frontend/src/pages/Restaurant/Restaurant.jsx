import React, { useEffect, useState } from "react";
import axios from "axios";
import Niv from "../../components/Niv";
import "./stockView.css";

  const Restaurent = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
      function getItems() {
        axios.get("http://localhost:8070/resInventory/").then((res) => {
          // console.log(res.data);
          setItems(res.data);
          // console.log(orders[1]);
        });
      }
      getItems();
    }, []);
    var count = 0;
for (var k in items) if (items.hasOwnProperty(k)) ++count;


  return (
    <div>
      <Niv name="Restaurant Inventory" />
      <div className="data">
      <div style={{display:'flex', margin: '1em',borderStyle:"solid",borderLeftWidth:"5px",width:'25%',borderColor:" white white white #ff8243",backgroundColor:"white",borderRadius:"9px"}}>
    <div style={{flexGrow: '1' ,paddingTop:"5px",paddingLeft:"5px",fontSize:'30px'}}>
    Stock Summary
    </div>     
    <div style={{flexGrow: '1',textAlign:'center' ,padding:'6px' ,borderLeft:"5px solid #DEE1E5"}}>
    <div style={{fontSize:'30px'}}> {count}</div>
    <div style={{fontSize:'10px'}}> Available Items In Stock</div>
    </div>  
      </div>
      <div>
      <input type="text" style={{ height: "40px" }} placeholder="Search" />
      <a href="/Restaurant/RestaurantDelete">
        <button class="delete_btn">Delete the record</button>
      </a>
      <a href="/Restaurant/RestaurantAdd">
        <button class="add_new">+ Add New</button>
      </a>

    </div>
        <div class="table1">
          <div class="header_fixed">
            <table className="stk-table">
              <thead className="stk-tbl-head">
                <tr className="">
                  <th className="stk-view-tbl">Item Id</th>
                  <th className="stk-view-tbl">Item Name</th>
                  <th className="stk-view-tbl">Current Stock</th>
                  <th className="stk-view-tbl">Total Cost</th>
                  <th className="stk-view-tbl">Re-order level</th>
                  <th className="stk-view-tbl">Status</th>
                </tr>
              </thead>
              <tbody>
                {items.map((items, index) => (
                  <tr key={index}>
                    <td>{items.Item_Id}</td>
                    <td>{items.Item_Name}</td>
                    <td>{items.Quantity}{items.Unit}</td>
                    <td>{items.Total_Cost}</td>
                    <td>{items.Re_Order_Level}</td>
                    <td>{items.Re_Order_Level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Restaurent;