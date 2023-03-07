import React from "react";
import '../App.css';
import logo from '../Images/logo.png';
// import { Outlet, Link } from "react-router-dom";


console.log(logo);


function Header(){


    return(
     
      <>
      <div class="m-0">
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-black">
        <div class="container-fluid">
            <a href="/" class="navbar-brand"><img src={logo} style={{height:"160px"}} alt="logo"/></a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div class="navbar-nav" style={{marginLeft:"2%"}}>
                    <a href="/" class="nav-item nav-link"style={{paddingLeft:"20%", paddingRight:"20%"}}><b>HOME</b></a>
                    <a href="/Menu" class="nav-item nav-link"style={{paddingLeft:"20%", paddingRight:"20%"}} ><b>MENU</b></a>
                    <a href="/FAQs" class="nav-item nav-link"style={{paddingLeft:"20%", paddingRight:"20%"}}><b>FAQs</b></a>

                    
                    
                </div>

                
                <div class="navbar-nav" style={{marginLeft:"68%"}}>
                    <a href="/login" class="nav-item nav-link" >Login</a>
                </div> 
                
                    
                
            </div>
        </div>
    </nav>
</div>
      </>
    )
}

export default Header;