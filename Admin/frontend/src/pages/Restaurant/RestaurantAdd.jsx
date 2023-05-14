import React from "react";
import Niv from "../../components/Niv";
import "./ResturantAdd.css";
import axios from 'axios';
import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast, ToastContainer } from "react-toastify";

const RestaurantAdd = () => {
  const [id , setid] = useState("");
  const [name , setname] = useState("");
  const [unit ,setunit ] = useState("");
  const [quantity, setquantity] = useState();
  const [buydate , setbuydate] = useState("");
  const [unitPrice, setunitPrice] = useState();
  const [totalCost, settotalCost] = useState(0);
  const [supplier, setsupplier] = useState("");
  const [reorderlevel, setreorderlevel] = useState("");
  const [expiredate, setexpiredate] = useState("");

  const [Item_Id1,setItem_Id1]=useState("");
  const [Item_Name1,setItem_Name1]=useState("");
  const [Stock,setstock]=useState();
  const [Total,setTotal] = useState("");
  const [level,setlevel]=useState("");
  const [isEditing, setIsEditing] = useState(false);
  

  const show = ()=>{

    if(!id || !name || !unit || !quantity || !buydate || !unitPrice || !totalCost || !supplier || !reorderlevel || !expiredate){
      toast.error("Please fill all the required fields");
      return
    }

    const Inventoryfood = {id,quantity,unitPrice,supplier,expiredate};
    axios.post("http://localhost:8070/Inventoryfood/add",Inventoryfood)
    .then(()=>{
    })
    .catch((err)=>{
      alert(err);
    })

/*add*/
    if (isEditing===false){
     const newres_add = {
       id,name,quantity,totalCost,reorderlevel,unit
     };
     axios.post("http://localhost:8070/resInventory/add",newres_add)
     .then(()=>{
      toast.success("Item added to the inventory");
     })
     .catch((err)=>{
       alert(err);
     });
    }else{

    var qty=Number(quantity)+Number(Stock)
    var totalCost1=(Number(Total))+totalCost
      const Inventoryfood = {name,qty,totalCost1,reorderlevel,unit};
      const url="http://localhost:8070/resInventory/update/" + Item_Id1
    axios.put(url,Inventoryfood)
    .then(()=>{
      toast.success("Item added to the inventory");
    })
    .catch((err)=>{
      alert(err);
    })
  }
}

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

  function findid(id){
    setid(id);
    if (id.length===4){
     
      items.map((items)=>{
        if(items.Item_Id.includes(id)===true){
          setItem_Id1(items.Item_Id);
          setItem_Name1(items.Item_Name);
          setstock(items.Quantity);
          setlevel(items.Re_Order_Level);
          setreorderlevel(items.Re_Order_Level);
          setname(items.Item_Name);
          setTotal(items.Total_Cost);
          setIsEditing(true);
        }
      })
    }
  }

  return (
    <div>
    <ToastContainer position="top-right" theme="colored" />
      <Niv name="Restaurant Inventory/ Add Items" />
      <div className="data">
      <div className="cardAdd">
        <header>Add Items</header>

  <form className="ResturantaddForm">
          <div className="form first">
            <div class="add detail">
              <div class="fields">

                <div class="input-field">
                  <label className="ResturantaddProductCode">Item Id</label>
                  <input type="text" placeholder="Item Id" value={id}
                  onChange={(e) => findid(e.target.value)} pattern="[0-9]{4}"
                  title="Product Code should be 4-digit number"/>
                </div>

                <div class="input-field">
                  <label className="ResturantaddProductName">Item Name</label>
                  <input type="text" placeholder="Item Name" value={name}
                  onChange={(e) => setname(e.target.value)} pattern="[a-zA-Z]{1,30}"
                  title="Name can only contain A-Z charactors and should be less than or equal to 30 characters"/>
                </div>

                <div class="input-field">
                  <label className="ResturantaddBuyDate">Buy Date</label>
                  <input type="date" value={buydate}
                  onChange={(e) => setbuydate(e.target.value)}/>
                </div>

                <div class="input-field">
                <div className="field2">
                  <label className="ResturantaddQuantity">Quantity</label><br/>
                  <input type="number" placeholder="Quantity" value={quantity}
                  onChange={(e) => setquantity(e.target.value)} min={1}
                  title="Value must be greater than or equal to 1"/>
                  <select name="unit" id="format" value={unit} onChange={(e) => setunit(e.target.value)}>
                    <option selected >Select Unit</option>
                    <option>Kg</option>
                    <option >g</option>
                    <option >L</option>
                    <option>ml</option>
                    <option>unit</option>
                  </select>
                </div> 
                </div>

                <div class="input-field">
                  <label className="ResturantaddBuyCost">Unit Price</label>
                  <input type="text" placeholder="Unit Price" value={unitPrice}
                  onChange={(e) => setunitPrice(e.target.value)}/>
                </div>

                <div class="input-field">
                  <label className="ResturantaddBuyCost">Total Cost</label>
                  <input type="text" placeholder="Total Cost" value={(quantity*unitPrice)||0}
                  />
                </div>

                <div class="input-field">
                  <label className="ResturantaddSupplier">Supplier</label>
                  <input type="text" placeholder="Supplier" value={supplier}
                  onChange={(e) => setsupplier(e.target.value)} pattern="[a-zA-Z]{1,30}"
                  title="Contain A-Z charactors"/>
                </div>

                <div class="input-field">
                  <label className="ResturantaddReOrderLevel">Re-order level</label>
                  <input type="number" placeholder="Re-order level" value={reorderlevel}
                  onChange={(e) => setreorderlevel(e.target.value)} min={1}
                  title="Value must be greater than or equal to 1"/>
                </div>

                <div class="input-field">
                  <label className="ResturantaddExpireDate">Expire Date</label>
                  <input type="date" value={expiredate}
                  onChange={(e) => setexpiredate(e.target.value)}/>
                </div>
              </div>
              <button class="Resturantbtn" onClick={() => (show(),settotalCost(quantity*unitPrice))}>
                <span>{isEditing ? "Edit" : "Add "}</span>
              </button>
            </div>
          </div>
         </form>
          <a href="/Restaurant">
          <button class="Resturantbtn">
            <span>Go Back</span>
          </button>
        </a>
      </div>
        <div className="card1">
        <table className="ResDelDesc">
        <tr className="tbl-head">
          <td className="del-tbl-head">Item Id</td>
          <td className="del-tbl-head">Item Name</td>
          <td className="del-tbl-head">Current Stock</td>
          <td className="del-tbl-head">Total Cost</td>
          <td className="del-tbl-head">Re-order level</td>
        </tr>
        <tr>
          <td className="del-tbl-data">{Item_Id1}</td>
          <td className="del-tbl-data">{Item_Name1}</td>
          <td className="del-tbl-data">{Stock}</td>
          <td className="del-tbl-data">{Total}</td>
          <td className="del-tbl-data">{level}</td>
        </tr>
        </table>
        </div>
      </div>
    </div>

  );
};

export default RestaurantAdd;
