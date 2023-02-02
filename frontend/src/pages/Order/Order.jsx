import React from "react";
import { useState, useRef, useEffect } from "react";
import ReactToPrint from "react-to-print";
import Button from "@mui/material/Button";
import Niv from "../../components/Niv";
import Table from "./Table";
import axios from "axios";

import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
// import { display } from "@mui/system";



function Order() {
  const d = new Date();
  // function addComponent() {
  // const order_id = '008';
  const [w_id,setW_id] = useState("-");;
  const [cus_id,setcus_id] = useState("-");
  const [type,settype] = useState("Takeaway");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const invoiceDate = useState(
    d.getDate() +
      "/" +
      (d.getMonth() +1)
    
      +"/" +
      d.getFullYear() +
      " - " +
      d.getHours() +
      ":" +
      d.getMinutes()
  );
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState([]);
  const componentRef = useRef();
  const [isEditing, setIsEditing] = useState(false);
  const [isdining, setDining] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [orders, setOrders] = useState([]);
  const [waiter, setwaiter] = useState([]);
  const [staytus, setstaytus] = useState("0");
  // must be change for food
  useEffect(() => {
    function getorder() {
      axios.get("http://localhost:8070/food/").then((res) => {
        // console.log(res.data);
        setOrders(res.data);
        // console.log(orders[1]);
      });
    }
    getorder();
  }, []);

  function setdata(fprice, fname) {
    alert(fname + " " + fprice);
    document.getElementById("Iname").style.visibility = "hidden";
    document.getElementById("radio").style.visibility = "visible";
    document.getElementById("Fname").value = fname;
    setDescription(fname);
    setPrice(fprice);
  }

  function setSearch() {
    // alert('ho')
    if (document.getElementById("Iname").style.visibility === "visible") {
      document.getElementById("Iname").style.visibility = "hidden";
      document.getElementById("radio").style.visibility = "visible";
    } else {
      document.getElementById("Iname").style.visibility = "visible";
      document.getElementById("radio").style.visibility = "hidden";
    }
  }
  const delivery = () => {
    // alert("hi")
    setDining(true);
    settype("Delivery")
    document.getElementById('name').hidden=false
    document.getElementById('id').hidden=false
    document.getElementById('email').hidden=false
    document.getElementById('address').hidden=false
    document.getElementById('name').innerHTML='Customer Name';
    document.getElementsByClassName("Delivery")[0].hidden=false
    document.getElementsByClassName("Delivery")[1].hidden=false
    document.getElementsByClassName("Delivery")[2].hidden=false
    document.getElementsByClassName("Delivery")[3].hidden=false
    document.getElementById('T_no').hidden=false;
    document.getElementById("Address").hidden=false;
   
 
  };
const Dining = () => {
    // alert("hi")
    settype("Dining")
    setDining(false)
    document.getElementById('name').hidden=true
    
    document.getElementById('id').hidden=true
    document.getElementById('email').hidden=true
    document.getElementById('address').hidden=true
  
    document.getElementsByClassName("Delivery")[0].hidden=true
    document.getElementsByClassName("Delivery")[1].hidden=true
    document.getElementsByClassName("Delivery")[2].hidden=true
    document.getElementsByClassName("Delivery")[3].hidden=true
    
  };

 const Takeaway= () => {
    // alert("hi")
    setDining(true)
    settype("Takeaway")
    document.getElementById('name').hidden=true
    document.getElementById('id').hidden=true
    document.getElementById('email').hidden=true
    document.getElementById('address').hidden=true

    
    document.getElementsByClassName("Delivery")[0].hidden=true
    document.getElementsByClassName("Delivery")[1].hidden=true
    document.getElementsByClassName("Delivery")[2].hidden=true
    document.getElementsByClassName("Delivery")[3].hidden=true
  };


  // Submit form function
  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!description || !quantity || !price) {
      toast.error("Please fill in all inputs");
    } else {
      const newItems = {
        id: uuidv4(),
        description,
        quantity,
        price,
        amount,
      };
      // alert(price);

      const neworder_food = {
        order_id,
        description,
        quantity,
      };
      axios
        .post("http://localhost:8070/orderfood/add", neworder_food)
        .then(() => {
          alert("food add");
          document.getElementById("print").hidden = false;
        })
        .catch((err) => {
          alert(err);
        });

        
     

        if(staytus==="0"){

          const neworder_cus = {
            name,
            email,
            address,
            phone 
          };
          axios
            .post("http://localhost:8070/coustomer/add", neworder_cus)
            .then(() => {
              alert("cus add");
             
            })
            .catch((err) => {
              alert(err);
            });
        }
     
      setDescription("");
      setQuantity("1");
      setPrice("");
      setAmount("");
      setSearchTerm("");
      setList([...list, newItems]);
      // setIsEditing(false);
      document.getElementById("Fname").value = ("");
    }
  };

//  select waiter
useEffect(() => {
  function getwaiter() {
    axios.get("http://localhost:8070/waiter/").then((res) => {
      // console.log(res.data);
      setwaiter(res.data);
      // console.log(orders[1]);
    });
  }
  getwaiter();
}, []);


  // Calculate items amount function
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * price);
    };

    calculateAmount(amount);
  }, [amount, price, quantity, setAmount]);

  // Calculate total amount of items in table
  useEffect(() => {
    let rows = document.querySelectorAll(".amount");
    let sum = 0;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setTotal(sum);
      }
    }
  });

  // Edit function

  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setDescription(editingRow.description);
    setQuantity(editingRow.quantity);
    setPrice(editingRow.price);

    const deletee =
      "http://localhost:8070/orderfood/delete/" +
      order_id +
      "/" +
      editingRow.description;
    // alert(deletee);

    axios
      .delete(deletee)
      .then(() => {
        alert("delete");
      })
      .catch((err) => {
        alert(err);
      });
  };

  // Delete function
  const deleteRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));

    const deletee =
      "http://localhost:8070/orderfood/delete/" +
      order_id +
      "/" +
      editingRow.description;
    alert(deletee);

    axios
      .delete(deletee)
      .then(() => {
        alert("delete");
      })
      .catch((err) => {
        alert(err);
      });
  };
  // deletedata
  const deletedata = () => {
   
    const deletee =
      "http://localhost:8070/orderfood/delete/" +
      order_id 
     
    alert(deletee);

    axios
      .delete(deletee)
      .then(() => {
        alert("delete");
      })
      .catch((err) => {
        alert(err);
      });
      window.location.reload(false)
  };
  // save database
  function sendorder(e) {
    alert(cus_id);
    e.preventDefault();
    setName("");
    setAddress("");
    setEmail("");
    setPhone("");
    if (total > 0) {
      const neworder = {
        order_id,
        w_id,
        cus_id,
        type,
        total
        
      };
      axios
        .post("http://localhost:8070/order/add", neworder)
        .then(() => {
          alert("order add");
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  const [orderid, setorder_id] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8070/order/orderId").then((res) => {
      console.log(res.data);
      setorder_id(res.data);
    });
  }, []);

  let id = orderid.map((item) => item.order_id);
  //  console.log(id[0]);
  const order_id = Number(id[0]) + 1;
//get cus details
const [customer, setcustomer] = useState([]);

useEffect(() => {
  axios.get("http://localhost:8070/customer").then((res) => {
    // console.log(res.data);
    setcustomer(res.data);
  });
}, []);

//find data

 function findData(phone) {
  setPhone(phone)
 
  if (phone.length === 9) {
    // alert("hi");
    setPhone(phone)
   customer.map((customer) => {
// alert(customer.phone_no)
      if(customer.phone_no.includes(phone)===true){
        // alert(customer.phone_no)
        setstaytus("1");
        setName(customer.name)
        setAddress(customer.address)
        setEmail(customer.Email)
        setcus_id(customer.name)
        
      }
    })
  }
  
}
  return (
    <div>
      <Niv name="Order" />
      <div className="data">
        <div style={{ display: "flex", position: "relative" }}>
          <div>
            <Button
              variant="contained"
              style={{ backgroundColor: "#1c003f", marginTop: "10px" }}
              // onClick={() => window.location.reload(false)}
              onClick={() => deletedata()}
            >
              Clear
            </Button>
          </div>
          <div style={{ position: "absolute", right: "0px" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#01BC90",
                color: "black",
              }}
              href="/Order/history"
            >
              <b>Order History</b>
            </Button>
          </div>
        </div>
        <div
          style={{ display: "flex", position: "relative", maxHeight: "85%" }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "9px",
              marginTop: "80px",
              flexGrow: "1",
              maxWidth: "47%",
              padding: "30px",
            }}
          >
            <div style={{ display: "flex", position: "relative" }}>
              <div>
                <label htmlFor="invoiceNumber">
                  Invoice Number : {order_id}
                </label>
              </div>

              <div style={{ position: "absolute", right: "0px" }}>
                <label htmlFor="invoiceDate">
                  Invoice Date : {invoiceDate}{" "}
                </label>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div style={{ paddingTop: "10px", position: "absolute" }}>
                <div>
                  <label htmlFor="description">Food Name</label>
                  <br />

                  <input
                    id="Fname"
                    type="text"
                    placeholder="search food....."
                    style={{ padding: "5px", minWidth: "100%" }}
                    onChange={(event) => {
                      setSearchTerm(event.target.value);
                    }}
                    onClick={() => {
                      setSearch();
                    }}
                  />
                </div>
                <div
                  style={{
                    maxHeight: "100px",
                    background: "#F4F0F0",
                    overflowY: "auto",

                    // position: "relative",
                    opacity: "0.85",
                    visibility: "hidden",
                    minWidth: "100%",
                  }}
                  id="Iname"
                >
                  {orders
                    .filter((val) => {
                      if (searchTerm === "") {
                        return val;
                      } else if (
                        val.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        document.getElementById("Iname").style.visibility =
                          "visible";
                        return val;
                      }
                    })
                    .map((order, index) => (
                      <p
                        key={index}
                        onClick={() => setdata(order.Price, order.name)}
                      >
                        {order.name}
                      </p>
                    ))}
                </div>
              </div>
              <div style={{ paddingTop: "15%", display: "flex" }}>
                <div style={{}}>
                  <label htmlFor="quantity">Quantity :</label>
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    style={{ marginLeft: "25px" }}
                  />
                </div>
                <div className="flex flex-col" style={{ marginLeft: "20%" }}>
                  <label htmlFor="price">Price</label>
                  <input
                    disabled
                    type="text"
                    name="price"
                    id="price"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <form
                action=""
                style={{ paddingTop: "20px" }}
                id="radio"
              >
                <input type="radio" name="language"onClick={Takeaway} />
                <label for="javascript">Takeaway</label>
                <input type="radio" name="language" onClick={Dining} style={{marginLeft:'15%'}}/>
                <label for="javascript">Dining</label>
                <input type="radio" name="language" onClick={delivery} style={{marginLeft:'15%'}}/>
                <label for="javascript">Delivery</label>
              </form>
              <hr style={{ borderColor: "black", marginTop: "20px" }}></hr>
              {isdining?  
              <div
                style={{
                  display: "flex",
                  marginTop: "20px",
                  // position: "relative",
                  // display:"none"
                }}
               
              >
               
                <div  id='T_no'  hidden>
                <div style={{ padding: "10px" }}>
                    <label htmlFor="phone" id='id'>Enter phone : </label>
                    <input
                      // disabled
                      className="Delivery"
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Enter your phone"
                      autoComplete="off"
                      value={phone}
                      onChange={(e) => findData(e.target.value)}
                    />
                  </div>
                  <div style={{ padding: "10px" }}>
                    <label htmlFor="name" id='name'>Enter Name :</label>
                    <input
                      // disabled
                      className="Delivery"
                      type="text"
                      name="text"
                      id="name"
                      placeholder="Enter your name"
                      autoComplete="off"
                      value={name}
                      onChange={(e) =>((setName(e.target.value), setcus_id(e.target.value) ))}
                      style={{ marginLeft: "5px" }}
                    />
                  </div>

                  <div style={{ padding: "10px" }}>
                    <label htmlFor="email" id='email'>Enter email : </label>
                    <input
                      // disabled
                      className="Delivery"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ marginLeft: "6px" }}
                    />
                  </div>

                
                </div>
                <div
                  style={{
                    position: "absolute",
                    marginLeft: "25%",
                    padding: "10px",
                  }}
                  id="Address"
                  hidden
                  
                >
                  <label htmlFor="address" id='address'>Enter address</label>
                  <br />
                  <textarea
                    // disabled
                    className="Delivery"
                    type="text"
                    rows="4"
                    cols="30"
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    style={{ paddingTop: "2px" }}
                  ></textarea>
                </div>
              </div>
                : <div>
                  Select Waiter : 
                  <select  value={w_id}  onChange={(e) => setW_id(e.target.value)}>  
                    {waiter.map((waiter) => 
                        (<option>{waiter.name}</option> 
                  ))} 
                  </select>
                  </div>
                 }
              <div
                style={{
                  display: "flex",
                  position: "relative",
                  padding: "10px",
                }}
              >
                <div>
                  <label htmlFor="amount"><b>Amount : LKR {amount} </b></label>
                </div>
                <div style={{ position: "absolute", right: "0px" }}>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#01BC90", color: "black" }}
                    type="submit"
                  >
                    <b>{isEditing ? "Edit" : "Add "}</b>
                  </Button>
                </div>
              </div>
            </form>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "9px",
              marginTop: "80px",
              right: "10px",
              flexGrow: "1",
              marginLeft: "100px",
              maxWidth: "47%",
              minWidth: "45%",
              padding: "10px",
              whiteSpace: "nowrap",
              overflowY: "auto",
            }}
          >
            <div onClick={sendorder}>
              <ReactToPrint
                trigger={() => (
                  <button
                    // style={{ backgroundColor: "#01BC90", color: "black" }}
                    type="submit"
                    hidden
                    id="print"
                  >
                    Print
                  </button>
                )}
                content={() => componentRef.current}
                onAfterPrint={() => window.location.reload(false)}
              />
            </div>
            <div ref={componentRef} className="p-5">
              <Table
                invoiceNumber={order_id}
                invoiceDate={invoiceDate}
                description={description}
                quantity={quantity}
                price={price}
                amount={amount}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            minWidth: 230,
            marginTop: "40px",
            backgroundColor: "white",
            borderRadius: "9px",
            padding: "10px",
          }}
        >
          <table width="100%" className="mb-10" style={{ textAlign: "center" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price (LKR)</th>
                <th>Amount</th>
              </tr>
            </thead>
            {list.map(({ id, description, quantity, price, amount }) => (
              <React.Fragment key={id}>
                <tbody>
                  <tr className="h-10">
                    <td>{description}</td>
                    <td>{quantity}</td>
                    <td>{price}</td>
                    <td className="amount">{amount}</td>
                    <td>
                      <Button onClick={() => editRow(id)}>
                        <AiOutlineEdit
                          style={{ fontSize: "3- 0px", color: "black" }}
                        />
                      </Button>
                    </td>
                    <td>
                      <Button onClick={() => deleteRow(id)}>
                        <AiOutlineDelete
                          style={{ fontSize: "30px", color: "black" }}
                        />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </React.Fragment>
            ))}
          </table>

          <div>
            <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
              LKR: {total.toLocaleString()}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
