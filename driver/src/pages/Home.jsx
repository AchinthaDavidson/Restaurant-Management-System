import React, { useEffect, useState } from "react";
import axios from "axios";
import './Index.css';
import SmallMap from "./SmallMap.jsx"
import {Link, useNavigate} from 'react-router-dom';

const Home = () => {
    
  const [driverName,setDriverName] = useState("");
  const [loginStatus,setLoginStatus] = useState(null);
  const searchTerm = "Delivery"
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  var count = 0

    useEffect(() => {

       const name = JSON.parse(localStorage.getItem('userNameStorage'));
       const logStat = JSON.parse(localStorage.getItem('userStatus'));
        if (name) {
         // console.log("name is " ,name);
         // console.log(logStat)
          setDriverName(name);
          setLoginStatus(logStat)
        }
      function getorder() {
        axios.get("http://localhost:8070/order/").then((res) => {     
          setOrders(res.data); 
          // console.log(orders[1]);
        });
      }
      getorder();
    }, []);


  const handleMapShow = (id) => {
    count ++
    if(count%2==0){
        document.getElementById(id).hidden=true;
        document.getElementById("locationTag").hidden=false;
    }else{
        document.getElementById(id).hidden=false;
        document.getElementById("locationTag").hidden=true;
       
    }
 };

function logOut () {
  const  username = " "
  const logged = " "
  localStorage.setItem('userNameStorage',JSON.stringify(username))
  localStorage.setItem('userStatus',JSON.stringify(logged))
  window.location.href = "/sign";
}

function navigateToMap  (order) {
  //window.location.href = "/map";
  navigate('/map',{state: {driverName: driverName, order:{order}}});
};


if(loginStatus==" ") {
  return <div><h1>Please Log in First</h1></div>

}else{
  return (
    <div className="mainPage">
      <button 
                onClick={()=>logOut()} 
                    className="middlebtns"
                    style={{ margin:"Auto Auto"}}>   
                    LOG OUT
                </button> 
        <table className="mainTable">
            <thead>
              <tr className="tbl-head">
                <th className="del-tbl-head">Order ID</th>
                <th className="del-tbl-head">Placed Time</th>
                <th className="del-tbl-head">Price</th>
                <th className="del-tbl-head">Customer Email</th>
                <th className="del-tbl-head">Customer Phone Number</th>          
                <th className="del-tbl-head">View on Map</th>          
                <th className="del-tbl-head"
                    style={{
                    maxHeight:"20rem", minWidth:"20rem", 
                    margin:"Auto Auto", margin:"Auto Auto",
                    maxWidth:"20rem",minHeight:"20rem"}}>Customer Location</th>
                <th className="del-tbl-head">Take Dilivery</th>
              </tr>
              
            </thead>
            <tbody>
           
        {orders
            .filter((val) => {
                if (val.type.toLowerCase().includes(searchTerm.toLowerCase())) {
                    if(val.location!=" "){
                        return val;
                    }
               // console.log(val);
              
         
              }

            }).map((order, index) => (
     
              <tr className="homeTR" key={index}  >
                <td className="homeTD">{order.order_id}</td>
                <td className="homeTD">
                  {order.date} - {order.time}
                </td>             
                <td className="homeTD">{order.amout}</td>
                
                <td className="homeTD">{order.cus_id}</td>

                <td className="homeTD">No Data</td>

                <td style={{ textAlign:"center"}}>

                <button 
                onClick={(e) => handleMapShow(order.order_id)} 
                    className="middlebtns"
                    style={{ margin:"Auto Auto"}}>   
                    View on Map
                </button> 

                </td> 
   
                <td className="homeTD" style={{ textAlign:"center", margin:"0 0 0 0"}}>
                    <span hidden={false} id="locationTag" style={{ margin:"Auto Auto"}}>{order.location}</span>
                    <div 
                        //id="mapArea"  
                        id={order.order_id}
                        className="mapArea" 
                        hidden={true} 
                            style={{
                                minHeight:"20vh", minWidth:"25vh", 
                                margin:"Auto Auto", margin:"Auto Auto"}}
                    >
                    <div>
                    <SmallMap id={order.location}>

                    </SmallMap>

                    </div>        
                            
                    </div>

                </td>   

                <td className="homeTD" style={{ textAlign:"center"}}>
                     

                    {/* <Link to={{
                      pathname: '/map',
                      state: {driverName: 1, customer:{order}}
                    }} >
                       </Link> */}

                      <button 
                        className="middlebtns" 
                        onClick={()=>{navigateToMap(order)}} 
                        style={{ alignContent:"Left",  margin:"Auto Auto"}}>   
                        Take Delivery
                      </button> 

                   
                    </td>        
              </tr>
                   
            ))}
             </tbody>
             
          </table>
     
    </div>
  )
}
}
export default Home