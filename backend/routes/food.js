const router = require("express").Router();
const food=require("../models/food");
const order = require("../models/order");

router.route("/create").post((req,res)=>{


const name=req.body.dishTitle
const Cat_id='222'
const ingridients= req.body.dishDescription
const Price=req.body.dishPrice 
const Picture="hgfh"


const newfood=new food({
    
    name,
    Cat_id,
    ingridients,
    Price,
    Picture
    
    })

    newfood.save().then(()=>{
        res.json("save details")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{
    food.find().then((food)=>{
        res.json(food)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route("/viewDish").get(async(req,res)=>{

    console.log("view all dishes requested");

    food
        .find()
        .then((items) => res.json(items))
        .catch((err) => console.log(err))
});

router.route("/count").get((req,res)=>{
    food.count().then((food)=>{
        res.json(food)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/delete/:id").delete(async(req,res)=>{

    console.log("delete dishes requested");

    food.findByIdAndDelete({_id:req.params.id})
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

router.route("/update/:id").put(async(req,res)=>{

    console.log("update dishes requested");

    food.findByIdAndUpdate(
        {_id: req.params.id} ,{
            name : req.body.title,
            ingridients: req.body.description,
            Price : req.body.price       
    
    }
       ).then((doc) => console.log(doc))
        .catch((err) => console.log(err));
    
    });

module.exports=router;