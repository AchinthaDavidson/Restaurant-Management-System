const express = require("express");
const mongoose= require("mongoose");
const bodyParser= require("body-parser");
const cors = require("cors");
const dotenv =require("dotenv");
require("dotenv").config();

const app=express();

const PORT= process.env.PORT||8070;

app.use(cors());
app.use(bodyParser.json());

const URL=process.env.MONGODB_URL;

mongoose.connect(URL, {
    
    useNewUrlParser: true
   
   
  })

const connection =mongoose.connection;
connection.once("open",()=>{
    console.log("db connect success!");
})

const coustomerRouter= require("./routes/customer.js");
app.use("/customer", coustomerRouter);

const orderRouter= require("./routes/order.js");
app.use("/order", orderRouter);

const order_foodRouter= require("./routes/order_food.js");
app.use("/orderfood", order_foodRouter);

const foodRouter= require("./routes/food.js");
app.use("/food", foodRouter);

const waiterRouter= require("./routes/waiter");
app.use("/waiter", waiterRouter);

const menuRouter= require("./routes/menu ");
app.use("/Menu", menuRouter);


app.listen(PORT,()=>{
    console.log('Sever is runing on port 8070')
})