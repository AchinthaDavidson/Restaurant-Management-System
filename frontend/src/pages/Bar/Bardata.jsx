import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Bardataa = (props) => {
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
        getItems1();
    },[])
    console.log(data1);
return(
    <div>
        <table className="barData">
        {/* <thead> */}
            <tr>
                <th>Date</th>
                <th>Quantity</th>
                <th>Unit Cost</th>
                <th>Total cost</th>
            </tr>
        {/* </thead> */}
            {data1.map((data1,index)=>{
            <tr>
                <td>{data1.Buy_Date}</td>
                <td>{data1.Quantity}</td>
                <td>{data1.Unit_Cost}</td>
                <td>{data1.Unit_Cost}</td>
            </tr> 
            })}
        </table>

        <div style={{border:"2px solid black", width:"150px",height:"150px",float:"right",marginRight:"50px"}}>
            <img src={data1.ImageURL}></img>
        </div>
    </div>
    );
};
export default Bardataa;