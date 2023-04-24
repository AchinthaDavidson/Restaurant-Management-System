import React, { useEffect, useState } from "react";
import axios from "axios";
import './Index.css';

const Home = () => {

    const searchTerm = "Delivery"
    const [orders, setOrders] = useState([]);
    useEffect(() => {
      function getorder() {
        axios.get("http://localhost:8070/order/").then((res) => {

           //console.log(res.data);
          setOrders(res.data); 
          // console.log(orders[1]);
        });
      }
      getorder();
    }, []);

    const navigateToMap = () => {
        window.location.href = "/map";
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
                <th className="del-tbl-head">Customer Location</th>
                <th className="del-tbl-head">Take Dilivery</th>

              </tr>
            </thead>

            <tbody>
            {orders
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.type.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            }).map((order, index) => (
              
              <tr key={index}>
                <td>{order.order_id}</td>
                <td>
                  {order.date} - {order.time}
                </td>             
                <td>{order.amout}</td>
                
                <td>{order.cus_id}</td>

                <td>No Data</td>

                <td style={{ textAlign:"center"}}>

                <button 
                onClick={navigateToMap}
                    className="middlebtns"
                    style={{ margin:"Auto Auto", margin:"Auto Auto"}}>   
                    View
                </button> 

                </td>

                <td style={{ textAlign:"center"}}>
                <button 
                    className="middlebtns"
                    style={{ alignContent:"Left",  margin:"Auto Auto"}}>   
                    Take
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