import React from "react";
import Niv from "../../components/Niv";
import "./BarDelete.css";
import axios from "axios";
import { toast ,ToastContainer } from "react-toastify"
import { useState, useRef, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css"


function BarDelete() {
  const d = new Date();
  const[items,setbar] = useState([]);
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const delete1 = [];

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
        const url = "http://localhost:8070/Bardata/find/"+code;

        axios.get(url).then((res)=>{
          setbar(res.data);
        });
      }
      getItems();
    }
  }

  function deletedata(){
    for(var i = 0 ; i<=delete1.length-1 ; i++){
      const delete2 = "http://localhost:8070/Bardata/delete/"+delete[i]
      axios .delete(delete2)
      .then(()=>{
        toast.success("food delete");
      })
      .catch((err)=>{
        toast.error("cannot delete data")
      });
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
              <td className="del-tbl-head">Time</td>
                <td className="del-tbl-head">Expire Date</td>
                <td className="del-tbl-head">Quantity</td>
                <td className="del-tbl-head">Unit cost</td>
                <td className="del-tbl-head">Cost</td>
              </tr>
              {items.map((items,index)=>(
              <tr className="tbl-dta" key={index}>
                <td>{items.time}</td>
                <td>{items.Expire_Date}</td>
                <td>{items.Quantity}</td>
                <td>{items.Unit_Cost}</td>
                <td>{Number(items.Unit_Cost*items.Quantity)}</td>
                <td><input type="checkbox" onClick={()=>delete1.push(items._id)}/></td>
              </tr>
              ))}
            </table>
            <button class="Add" onClick={()=>deletedata()}>
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
