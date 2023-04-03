import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Bardataa = (props) => {
    const id = props.id;
     const[foodlists,setFoodlists] = useState([]);
    useEffect(()=>{
        function getItems1(){
            const url="http://localhost:8070/bardata/find/"+id;

            axios.get(url).then((res)=>{
                //console.log(res.data);
                setFoodlists(res.data);
            });
        }
        getItems1(id);
    },[])

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
        <tbody>
           
            {foodlists.map((data1,index)=>{
            <tr key={index}>
                <td>{data1.Buy_Date}</td>
                <td>{data1.Quantity}</td>
                <td>{data1.Unit_Cost}</td>
                <td>{data1.Unit_Cost}</td>
            </tr> 
            })}
            </tbody>
        </table>
    </div>
    );
};
export default Bardataa;