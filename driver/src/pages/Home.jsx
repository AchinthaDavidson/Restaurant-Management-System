import React, { useEffect, useState } from "react";
import axios from "axios";
import './Index.css';
import SmallMap from "./SmallMap.jsx"

const Home = () => {
    
    const searchTerm = "Delivery"
    const [orders, setOrders] = useState([]);
    var count = 0
    useEffect(() => {
      function getorder() {
        axios.get("http://localhost:8070/order/").then((res) => {     
          setOrders(res.data); 
          // console.log(orders[1]);
        });
      }
      getorder();
    }, []);

    const navigateToMap = () => {
        window.location.href = "/smallMap";
  };

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

 const handleMapUnShow = () => {
  
};

  return (
    <div className="mainPage">
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
                    <button 
                        className="middlebtns"
                    // onClick={() => handleMapUnShow()} 
                    // onClick={navigateToMap} 
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

export default Home