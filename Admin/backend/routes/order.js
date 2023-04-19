const router = require("express").Router();
const order = require("../models/order");
// const Coustomer = require("../models/coustomer");
let Coustomer =require("../models/order");
const d=new Date();

// ADD coustomer
router.route("/add").post((req,res)=>{

    console.log("hi");

    const order_id =req.body.order_id;
    const  w_id    =req.body.w_id;
    const  cus_id  =req.body.cus_id;
    const  type     = req.body.type;
    const  date     =d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getFullYear();
    const  time     =d.getHours()+":"+d.getMinutes()
    const  amout    = Number( req.body.total);

    // const order_id ='1';
    // const  w_id     ="vsfgsg"
    // const  cus_id   ="dfxhfh"
    // const  type     ="takeaway"
   
    // const  date     =d.getUTCDate()+"/"+d.getUTCMonth()+1+"/"+d.getFullYear();
    // const  time     =d.getHours()+":"+d.getMinutes()
    // const  amout    = "Number( req.body.total)"
    const neworder =new  order({
        order_id,
        w_id,   
        cus_id,
        type,
        date,
        time,
        amout    
    })

    neworder.save().then(()=>{
        res.json("save details")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    order.find().sort({date:-1}).then((orders)=>{
        res.json(orders)
    }).catch((err)=>{
        console.log(err)
    })
})

//count
const  date1 =d.getMonth()+1+"-"+d.getFullYear();
router.route("/count").get((req,res)=>{
order.find({date:{$regex :date1 }}).count().then((orders)=>{
        res.json(orders)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/sum/:id").get((req,res)=>{
let id=req.params.id
    order.aggregate([{$match:{date:{$regex :id}}},{$group:{_id:null ,price:{$sum:"$amout"}}}]).then((orders)=>{
            res.json(orders)
        }).catch((err)=>{
            console.log(err)
        })
    })

router.route("/orderId").get((req,res)=>{
    order.find({},{order_id:1}).sort({_id:-1}).limit(1).then((orders)=>{
        res.json(orders)
    }).catch((err)=>{
        console.log(err)
    })
})


router.route("/type").get((req,res)=>{
    order.find({},{type:1,date:1}).then((orders)=>{
        res.json(orders)
    }).catch((err)=>{
        console.log(err)
    })
})

const  date2 =d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getFullYear();
router.route("/top").get((req,res)=>{
    order.find({date:date2 }).sort({amout:-1}).limit(10).then((orders)=>{
        res.json(orders)
    }).catch((err)=>{
        console.log(err)
    })
})
module.exports=router;