const router = require('express').Router();
let Inventoryfood = require('../models/Inventoryfood');
const d = new Date();

/*add*/
router.route("/add").post((req,res)=>{
    const d = new Date();
    const Item_Id = req.body.id;
    const Quantity =req.body.quantity;
    const Unit_Price = req.body.unitPrice;
    const Supplier = req.body.supplier; 
    const Expire_Date   = req.body.expiredate;
    const date =  d.getUTCDate()+"/"+d.getUTCMonth()+1+"/"+d.getFullYear();
    const time = d.getHours()+":"+d.getMinutes();

    // const Item_Id = 'req.body.id';
    // const Quantity = 'ddd';
    // const Unit_Price = 'dd';
    // const Supplier = 'req.body.supplier'; 
    // const Expire_Date   = 'req.body.expiredate';
    // const date = d.getUTCDate()+"/"+d.getUTCMonth()+1+"/"+d.getFullYear();
    // const time = d.getHours()+":"+d.getMinutes();
    
    const newRes = new Inventoryfood({
        Item_Id,               
        Quantity,      
        Unit_Price,  
        Supplier, 
        Expire_Date,              
        date,  
        time, 
    })

    newRes.save().then(()=>{
        res.json("Items added");
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;