import React from "react";
import Niv from "../../components/Niv";
import "./addMenu.css";
import axios from 'axios';
import { useState, useRef, useEffect } from "react";

const AddMenu = () => {

  const [id , setid] = useState("");
  const [name , setname] = useState("");
  const [Image , setimage] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
  const Menu = {id,name,Image};
    axios.post("http://localhost:8090/menu/add",Menu)
    .then(()=>{
      alert("Added successfully");
      setid('')
      setname('')
      setimage('')
    })
    .catch((err)=>{
      alert(err);
    })
  }

  return (
    <div>
      <Niv name="Menu/ Add Menu" />
      <div className="data">
      <div className="menuAdd">
        <header>Add Product</header>

        <form className="MenuaddForm" onSubmit={handleSubmit}>
        <div class="fields">
                <div class="input-field">
                  <label className="Cat_Id">Category Id</label>
                  <input type="text" placeholder="Category Id" value={id}
                  onChange={(e) => setid(e.target.value)}/>
                </div>

                <div class="input-field">
                  <label className="Cat_Name">Category Name</label>
                  <input type="text" placeholder="Category Name" value={name}
                  onChange={(e) => setname(e.target.value)}/>
                </div>

                <div class="input-field">
                  <label className="Menu_image">Image</label>
                  <input type="file" value={Image}
                  onChange={(e) => setimage(e.target.value)}/>
                </div>
            </div>

              <button class="Menubtn" type="submit" >
                <span>Add</span>
              </button>
        </form>
          <a href="/Menu">
          <button class="Menubtn">
            <span>Cancel</span>
          </button>
          </a>
      </div>
      </div>
    </div>

  );
};

export default AddMenu;
