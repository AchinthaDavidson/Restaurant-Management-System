const router = require("express").Router();
const waiter = require("../models/waiter");
router.route("/add").post((req,res)=>{

    console.log("hi");
    const W_Id='5'
    const  name ='iddamalhh'
    const  Email    ='idde@gg.bom';
    const  address  ='req.body.cus_id';
    const  phone_no     = 'req.body.type';
    const  password     ='kjhkh';
    const  status    ='0'

    // const order_id ='1';
    // const  w_id     ="vsfgsg"
    // const  cus_id   ="dfxhfh"
    // const  type     ="takeaway"
   
    // const  date     =d.getUTCDate()+"/"+d.getUTCMonth()+1+"/"+d.getFullYear();
    // const  time     =d.getHours()+":"+d.getMinutes()

    const newwaiter =new  waiter({
        W_Id,
        
        name,
        Email,   
        address, 
        phone_no,
        password,
        status     
    })

    newwaiter.save().then(()=>{
        res.json("save details")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    waiter.find().then((waiter)=>{
        res.json(waiter)
    }).catch((err)=>{
        console.log(err)
    })
})


module.exports=router;