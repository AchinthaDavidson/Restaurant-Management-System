import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Bardata = (props) => {
    const id = props.id;
    const [data,setdata] = useState([]);
    useEffect(()=>{
        function getItems1(){
            const url="http://localhost:8070/bardata/find/"+id;

            axios.get(url).then((res)=>{
                console.log(res.data);
                setdata(res.data);
            }); 
        }
        getItems1();
    },[])
    console.log(data);

return (
    <div>
      <table className="barData">
        <tr>
          <th>Date</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Total Cost</th>
        </tr>
          {data.map((data, index) => (
            <tr>
              <td>{data.Buy_Date} - {data.time}</td>
              <td>{data.Quantity}</td>
              <td>{data.Unit_Cost}</td>
              <td>{data.Quantity*data.Unit_Cost}</td>
            </tr>
          ))}
      </table>
    </div>
      
  );

};
export default Bardata;