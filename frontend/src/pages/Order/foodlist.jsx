import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Foodlist = (props) => {
  
  const id=props.id;
  const url="http://localhost:8070/orderfood/findone/"+id
  const[foodlists,setFoodlists] = useState([]);
  useEffect(() => {
      function getfoodlist(){
          axios.get(url).then(res=>{
            // console.log(res.data);
            setFoodlists(res.data);
          // console.log (orders[1])
            
          });
      }
      getfoodlist();
  },[])

return (
    <div>
            {foodlists.map((foodlists, index) => (
                  <tr key={index}>
                     <td >{foodlists.food_id}</td>
                     <td >{foodlists.qty}</td>
                    
                  </tr>
                ))}
       
      
      
        </div>
      
  );
};

export default Foodlist ;
