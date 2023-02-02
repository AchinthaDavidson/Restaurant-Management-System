const router = require('express').Router();
const barInv = require('../models/barinventory_data');

/* add */
router.route("/add").post((req,res)=>{
    const d = new Date();
    const Product_Code = req.body.code;
    const Quantity = req.body.quantity;
    const Expire_Date = req.body.Expiredate;
    const Unit_Cost = req.body.Unitcost;
    const Sell_Price = req.body.Sellprice;
    const Buy_Date = d.getDate() +"/" + (d.getMonth() + 1) +"/" +d.getFullYear() ;

    // const Product_Code = 'req.body.code';
    // const Quantity = 'req.body.quantity';
    // const Expire_Date = 'req.body.Expiredate';
    // const Unit_Cost = 'req.body.Unitcost';
    // const Sell_Price = 'req.body.Sellprice';
    // const Buy_Date = 'req.body.Buydate';

    const newbar = new barInv({
        Product_Code,
        Quantity,
        Expire_Date,
        Unit_Cost,
        Sell_Price,
        Buy_Date
    })

    newbar.save().then(()=>{
        res.json("Bottle added");
    }).catch((err)=>{
        console.log(err);
    })
})
module.exports = router;