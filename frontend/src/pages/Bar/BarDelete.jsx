import React from "react";
import Niv from "../../components/Niv";
import "./BarDelete.css";
import axios from "axios";
import { useState, useRef, useEffect } from "react";


function BarDelete() {
  const d = new Date();
  const[items,setbar] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");

  const[Expire_Date1, setExpire_Date1] = useState("");
  const[Quantity1, setQuantity1] = useState("");
  const[Buy_Cost1, setBuycost1] = useState("");
  const[Buy_Date1, setBuydate1] = useState();

  // useEffect(()=>{
  //   const getbarval = () =>{
  //     axios.get("http://localhost:8070/barInventory/")
  //     .then((barinventories)=>{
  //       setbar(barinventories.data);
  //     }).catch((err)=>{
  //       alert(err);
  //     })
  //   }
  //   getbarval();
  // },[])

  function findcode(code) {
    setCode(code);
    if(code.length === 3){

      function getItems(){
        const url = "http://localhost:8070/barinventory_data/find/"+code;

        axios.get(url).then((res)=>{
          setbar(res.data);
        });
      }
      getItems();
      // alert(code);
      // items.map((items)=>{
      //   if(items.Product_Code.includes(code)===true){
      //     setName(items.Product_Name);
      //     setBuydate1(items.Buy_Date);
      //     setExpire_Date1(items.Expire_Date);
      //     setQuantity1(items.Quantity);
      //     setBuycost1(items.Buy_Cost);
      //   }
      // })
    }
  }

  return (
    <div>
      <Niv name="Bar Inventory" />
      <div className="data">
        <div className="carddel">
          <form action="#" className="Bardelform">
            <header className="bardelheader">Delete Detalis</header>
            <br />

            <div className="form first">
              <div class="delete details">
                <div class="fields">
                  <div class="input-field">
                    <label className="delProductCode">Product Code</label>
                    <input type="text" placeholder="Product code" value={code}
                        onChange={(e) => findcode(e.target.value)}/>
                  </div>

                  <div class="input-field">
                    <label className="delProductName">Product Name</label>
                    <input type="text" placeholder="Product name" value={name}
                        onChange={(e) => setName(e.target.value)}/>
                  </div>
                </div>
              </div>
            </div>
            <table className="barDelDesc">
              <tr className="tbl-head">
              <td className="del-tbl-head">Product Name</td>
                <td className="del-tbl-head">Expire Date</td>
                <td className="del-tbl-head">Quantity</td>
                <td className="del-tbl-head">Buy Price</td>
              </tr>
              {items.map((items,index)=>(
              <tr className="tbl-dta" key={index}>
                <td>{items.name}</td>
                <td>{items.Expire_Date1}</td>
                <td>{items.Quantity1}</td>
                <td>{items.Buy_Cost1}</td>
                <td><input type="checkbox" /></td>
              </tr>
              ))}
            </table>
            <button class="Add" type="submit">
              <span class="addbtn">Delete</span>
            </button>
          </form>

          <a href="/Bar">
            <button class="Barcancel" >
              <span class="addbtn">Cancel</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BarDelete;
