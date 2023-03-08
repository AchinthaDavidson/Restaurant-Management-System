import React from "react";
import pic4 from '../../Images/6.png';
import pic3 from '../../Images/3.png';
import pic2 from '../../Images/2.png';
import logo from '../../Images/logo.png';
import newtag from '../../Images/new.png';
import pizza from '../../Images/pizza.png';
import Header from "../../Components/header";
import Footer from "../../Components/Footer";
import './Homepage.css';
import { useNavigate } from "react-router-dom";

console.log(logo);



function Homepage(){

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/Menu`; 
    navigate(path);
  }

    return(
      
<>
<Header/>
<div class="container-fluid" style={{marginBottom:"4%",marginTop:"10%"}}>
    <div class="row">
        <div class="col-lg-6">
            <img class="img-fluid"src={pizza} style={{height:"auto"}} alt="Pizza"/>
        </div>
        <div class="col-lg-6">
        <p class="text-center" style={{fontSize:"55px",color:"white"}}>Easy way to order your food</p>
          <h1 class="text-center" style={{fontSize:"100px",color:"white"}}>Tasty and<br/>Fresh Food</h1>
          <h1 class="text-center" style={{fontSize:"100px"}} id="cursive">Anytime</h1>
          <p class="text-center" style={{fontSize:"40px",color:"white"}}>Just confirm your order and enjoy our delicious fastest<br/>delivery.</p>
          <div class="col text-center">
            <button class="button-33" onClick={routeChange}>See Menu</button>
          </div>
            
        </div>
    </div>
</div>




<p class="text-center" style={{color:"white", fontSize:"35px"}}><b>What's New</b></p>
    <div class="card-group" style={{margin:"-2% 3% 4% 3%"}}>
  <div class="card bg-light" style={{margin:"2%", borderRadius: "5%"}}>
    <img class="card-img-top" src={pic2} alt="Salad"/>
    <div class="card-body">
      <h5 class="card-title" >Egg Salad</h5>
      <p class="card-text" >Rs. 425 /=</p>
    </div>
    <div class="card-footer">
    <img class="card-img-new" style={{height:"50px"}} src={newtag} alt="new"/>
    <button type="button" style={{marginLeft:"60%"}} class="btn btn-success" onClick={routeChange}>Order Now</button>
    </div>
  </div>
  <div class="card bg-light" style={{margin:"2%", borderRadius: "5%"}}>
    <img class="card-img-top" src={pic3} alt="prawn"/>
    <div class="card-body">
      <h5 class="card-title">Prawn Curry</h5>
      <p class="card-text" >Rs. 800 /=</p>
    </div>
    <div class="card-footer">
    <img class="card-img-new" style={{height:"50px"}} src={newtag} alt="new"/>
    <button type="button" style={{marginLeft:"60%"}} class="btn btn-success" onClick={routeChange}>Order Now</button>
    </div>

  </div>
  <div class="card bg-light" style={{margin:"2%", borderRadius: "5%"}}>
    <img class="card-img-top" src={pic4} alt="Cake"/>
    <div class="card-body">
      <h5 class="card-title">Chocolate Cake</h5>
      <p class="card-text">Rs. 380 /=</p>
    </div>
    <div class="card-footer">
    <img class="card-img-new" style={{height:"50px"}} src={newtag} alt="new"/>
    <button type="button" style={{marginLeft:"60%"}} class="btn btn-success" onClick={routeChange}>Order Now</button>
    </div>
    
  </div>
</div>


<div class="media" style={{margin:"4% 5%"}}>
  {/* <img class="rounded float-right" src={logo} style={{height:"200px"}} alt="Generic placeholder image"/> */}
  <div class="media-body">
    <h5 class="mt-0" style={{color:"white", fontSize:"35px"}}><b>About Us</b></h5>
    <p style={{color:"white", fontSize:"25px"}}>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p class="mb-0" style={{color:"white", fontSize:"25px"}}>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>



<Footer/>

</>
    )
}

export default Homepage;