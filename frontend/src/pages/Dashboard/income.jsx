import React from "react";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


  
const Income = () => {

const [sales, setsales] = useState([]);
const[state,setState] = useState(true);
const d=new Date()
const day=  d.getDate() +"-" +(d.getMonth() + 1) +"-" +d.getFullYear()
const month= (d.getMonth() + 1) +"-" +d.getFullYear()
const year= d.getFullYear()

const [url,setUrl] =useState("http://localhost:8070/order/sum/"+day)


    function getorder() {
      axios.get(url).then((res) => {
    
        setsales(res.data[0].price);
      
      });
    }
    getorder();


function findmonth() {
if (state) {

    setUrl("http://localhost:8070/order/sum/"+month)
    getorder();
    setState(false);
    document.getElementById("month").innerHTML="day";
    

}
else{
  setUrl("http://localhost:8070/order/sum/"+day)
  getorder();
  setState(true);
  document.getElementById("month").innerHTML="month";
}

}

    return (
        <div style={{ display: "flex" }}>
        <div style={{ flexGrow: "1" }}>
          <Typography
            style={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            Sales Value
          </Typography>
          <Typography variant="h5" component="div">
            <label style={{ fontSize: "30px" }}>Rs {sales}.00</label>
          </Typography>
          <Typography style={{ mb: 1.5 }} color="text.secondary">
            Today
            
          </Typography>
        </div>

        <div style={{ flexGrow: "1" }}>
          <Typography
            style={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            Cost of sales
          </Typography>
          <Typography variant="h5" component="div">
            <label style={{ fontSize: "30px" }}>Rs 400000.89</label>
          </Typography>
          <Typography style={{ mb: 1.5 }} color="text.secondary">
            Today
           
          </Typography>
        </div>

        <div style={{ flexGrow: "1" }}>
          <Typography
            style={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            Sales Income
          </Typography>
          <Typography variant="h5" component="div">
            <label style={{ fontSize: "30px" }}>Rs 58960.89</label>
          </Typography>
          <Typography style={{ mb: 1.5 }} color="text.secondary">
            Today
           
          </Typography>
        </div>

        <div style={{ flexGrow: "1" }}>
        <Box sx={{ textAlign: "right" }}>
      <Button
        variant="contained"
        id ="month"
        style={{ marginRight: 3, backgroundColor: "#1c003f" }}
        onClick={() => findmonth()}
      >
        month
      </Button>
     
      
    </Box>



        </div>
      </div>
  
  )
};
export default Income;