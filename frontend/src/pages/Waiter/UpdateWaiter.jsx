import React from "react";
import Niv from "../../components/Niv";
//import "./addWaiter.css";
import axios from 'axios';
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateWaiter = () => {

  const {id} = useParams();

    const [wid , setWid] = useState("");
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [address , setAddress] = useState("");
    const [phone , setPhone] = useState("");
    const [password , setPassword] = useState("");
    const [status , setStatus] = useState("");
   
    
   
    

    /* */
    useEffect(() => {
        function getWaiter() {

            axios.get("http://localhost:8070/waiter/"+id).then((res) =>{
                setWid(res.data.W_Id);
                setName(res.data.name);
                setEmail(res.data.Email);
                setAddress(res.data.address);
                setPassword(res.data.password);
                setStatus(res.data.status);
                setPhone(res.data.phone_no);
                
                
                

            });

        }
        getWaiter() ;
    },[]);

   
   
  /**/
  
  
  function Update(id){

    axios.put("http://localhost:8070/waiter/update/" + id).then(()=>{
        alert('Updated Successfully!')
       
    })
    .catch(err => {
        alert(err)
        console.log(id)
    });
  }

  return (
    <div>
    <Niv name="Waiter/ UpdateWaiter" />
    <div className="data">
    <div className="waiterAdd">
      <header>Update Waiter</header>

      <form className="waiteraddForm" onSubmit={Update}>
      <div class="fields">
              <div class="input-field">
                <label className="Id"> Waiter Id</label>
                <input type="text" placeholder="Waiter Id"  value={wid}
                onChange={(e) => setWid(e.target.value)} required/>
              </div>

              <div class="input-field">
                <label className="Name">Waiter Name</label>
                <input type="text" placeholder=" Waiter Name" value={name}
                onChange={(e) => setName(e.target.value)} required/>
              </div>

              <div class="input-field">
                <label className="email">Email</label>
                <input type="text" value={email}  placeholder="Email"
                onChange={(e) => setEmail(e.target.value)} required/>
              </div>

              <div class="input-field">
                <label className="address">Address</label>
                <input type="text" value={address}  placeholder="Address"
                onChange={(e) => setAddress(e.target.value)} required/>
              </div>

              <div class="input-field">
                <label className="phone">Phone Number</label>
                <input type="text" value={phone} placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)} required/>
              </div>

              <div class="input-field">
                <label className="password">Password</label>
                <input type="text" value={password}  placeholder="Password"
                onChange={(e) => setPassword(e.target.value)} required/>
              </div>

              <div class="input-field">
                <label className="status">Status</label>
                <input type="text" value={status} placeholder="Status"
                onChange={(e) => setStatus(e.target.value)} required/>
              </div>

          </div>


            <button class="waiterbtn" type="submit" >
              Update
            </button>
            
      </form>
        <a href="/Waiter">
        <button class="waiterbtn">
          <span>Back</span>
        </button>
        </a>
    </div>
    </div>
  </div>


  );
};

export default UpdateWaiter;
