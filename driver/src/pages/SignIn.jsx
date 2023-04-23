import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import "../styles/authScreens.css";

import TextInput from "../components/TextInput";
import Button from "../components/Button";

export default function SignIn() {
  const customStyle = { marginTop: "30px" };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [driver, setdriver] = useState([]);
  
  const handleEmailChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    function getdriver() {
      axios.get("http://localhost:8070/driver/").then((res) => {
        // console.log(res.data);
        setdriver(res.data);
        // console.log(orders[1]);
      });
    }
    getdriver();
  }, []);

  

  const handleButtonClick = () => {
 
    if (username.length>=1&& password.length>=1){
    
    driver.filter((val) => {
      if (val.Email.includes(username) && val.password.includes(password)) {
        window.location.href = "/home";
        // <Navigate to="/home" />
        // alert("ok")
      }else{
     
         setError("Invalid email or password");
      }
    })
  }
  else{
    setError("please set correct username and password");
  }

  };



 
  useEffect(() => {
    let loginInfo = localStorage.getItem("loginInfo");
    if (!loginInfo)
      localStorage.setItem(
        "loginInfo",
        JSON.stringify({
          email: "user@email.com",
          password: "1234",
          name: "User",
        })
      );
  }, []);

  return (
    <div className="container">
      <div className="card-wrapper">
        <div className="content-card">
          <div className="side">
            <div className="form-container">
              <TextInput
                label="Email"
                type="email"
                placeholder="john@xyz.com"
                action={handleEmailChange}
               
              />
              <TextInput
                label="Password"
                type="password"
                placeholder="******"
                action={handlePasswordChange}
                error={error}
                
              />
             
              <Button
                text="Sign In"
                customStyle={customStyle}
                action={handleButtonClick}
              />
              
            </div>
          </div>
          <div className="side image-side">
            <div className="image-side-content">
              <span className="title">Sign In</span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
