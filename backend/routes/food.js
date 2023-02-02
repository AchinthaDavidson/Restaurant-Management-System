const router = require("express").Router();
const food=require("../models/food");
const order = require("../models/order");

router.route("/add").post((req,res)=>{

const Food_id='113'
const name='roti'
const Cat_id='222'
const ingridients='bla bla'
const Price='80'
const Picture='rrr'


const newfood=new food({
    Food_id,
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

router.route("/count").get((req,res)=>{
    food.count().then((food)=>{
        res.json(food)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports=router;