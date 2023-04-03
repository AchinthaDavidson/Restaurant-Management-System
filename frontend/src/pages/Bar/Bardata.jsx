import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Bardata = (props) => {
    const id = props.id;
    const [data1,setdata1] = useState([]);
    useEffect(()=>{
        function getItems1(){
            const url="http://localhost:8070/bardata/find/"+id;

            axios.get(url).then((res)=>{
                //console.log(res.data);
                setdata1(res.data);
            });
        }
        getItems1(id);
    },[])
    console.log(data1);
return(
    <div>
        <table className="">
        <thead>
            <tr>
                <th>Date</th>
                <th>Quantity</th>
                <th>Unit Cost</th>
                <th>Total cost</th>
            </tr>
        </thead>
            {data1.map((data,index)=>{
            <tr key={index}>
                <td>{data.Buy_Date}</td>
                <td>{data.Quantity}</td>
                <td>{data.Unit_Cost}</td>
                <td>{data.Unit_Cost}</td>
            </tr> 
            })}
        </table>
    </div>
      
  );

};
export default Bardata;