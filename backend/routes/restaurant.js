const router = require('express').Router();
const Inventoryfood = require('../models/Inventoryfood');
let Restaurant = require('../models/restaurant');  

/* add */
router.route("/add").post((req,res)=>{

    const Item_Id = req.body.id;
    const Item_Name  = req.body.name;
    const Quantity =req.body.quantity;
    const Total_Cost = req.body.totalCost;
    const Re_Order_Level = req.body.reorderlevel;

    // const Item_Id = 'req.body.id';
    // const Item_Name  = 'req.body.name';
    // const Quantity = 'ddd';
    // const Total_Cost = 'req.body.totalCost';
    // const Re_Order_Level = 'req.body.reorderlevel';

    const newRes = new Restaurant({
        Item_Id,       
        Item_Name,             
        Quantity,        
        Total_Cost,             
        Re_Order_Level,  
    })

    newRes.save().then(()=>{
        res.json("Items added");
    }).catch((err)=>{
        console.log(err);
    })
})

/* update */
router.route("/update/:id").put(async(req,res)=>{

    let Id = req.params.id;

    /*get data from body*/

    // const {Item_Name,Quantity,Total_Cost,Re_Order_Level} = req.body;
    // const Item_Name  = 'req.body.efg';
    // const Quantity = 'abc';
    // const Total_Cost = 'req.body.def';
    // const Re_Order_Level = 'req.body.ghi';

    const Item_Name  = req.body.name;
    const Quantity =req.body.qty;
    const Total_Cost = req.body.totalCost;
    const Re_Order_Level = req.body.reorderlevel;

    const updatebar = {Item_Name,Quantity,Total_Cost,Re_Order_Level}  

    await Restaurant.updateOne({Item_Id:Id},{$set:updatebar})
    .then(()=>{
        res.status(200).send({status:"bar inventory updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"bar inventory update failed", error:err});
    })
})

 /*delete*/
// router.route("/delete/:id").delete(async(req,res)=>{
    
//     let Id = req.params.id;

//     await Inventoryfood.remove({Item_Id:Id}).then(()=>{
//         res.status(200).send({status:"Inventory details deleted", user : Id})
//     }).catch((err)=>{
//         console.log(err);
//         res.status(500).send({status:"Inventory details delete failed", error:err});
//     })
// })

/* display*/
router.route("/").get((req,res)=>{

    Restaurant.find().sort({Item_Name:-1}).then((restaurant)=>{
        res.json(restaurant)
    }).catch((err)=>{
        console.log(err);
    })
})

//  router.route("/update/:id").put(async (req, res) => {
  
//     let userId = req.params.id;
//     const Quantity =req.body.quantity;
//     const Total_Cost = req.body.totalCost;
//     const Re_Order_Level = req.body.reorderlevel;
//     const updateRestaurant = {Quantity,Total_Cost,Re_Order_Level};
//     const update = await Customer.updateOne({Item_Id:userId}, updateRestaurant)
     
//    .then(() => {
//        res.status(200).send({ status: "user update", user: update });
//      })
//      .catch((err) => {
//        console.log(err);
//      });
//  });

 module.exports = router;