const router = require("express").Router();
const food=require("../models/food");
const order = require("../models/order");

router.route("/create").post((req,res)=>{


const Name=req.body.dishTitle
const Cat_id= Math.floor(Math.random() * (9999- 0) + 0);
const Description = req.body.dishDescription;
//const Ingridients = [['basmtthi',5 ,'kg']  , ['cokking oil',2 ,'l'] ];
const Ingridients = req.body. dishIngridients ;
const Price= req.body.dishPrice ;
const Picture="Still pending";


// ingridients:[{ name: String,  quantity : Number ,unittype : String }]
const newfood=new food({
    
    Name,
    Cat_id,
    Ingridients,
    Price,
    Picture,
    Description
    
    })

    newfood.save().then(()=>{

      //  console.log(req.body);
       // console.log("new Food Added");

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

    //console.log("delete dishes requested");

    food.findByIdAndDelete({_id:req.params.id})
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

router.route("/update/:id").put(async(req,res)=>{

    // console.log("update dishes requested");
    // console.log(req.body);

    food.findByIdAndUpdate(
        {_id: req.params.id} ,{
            Name : req.body.title,
            Description : req.body.description,
            Price : req.body.price       
    
    }
       ).then((doc) => console.log(doc))
        .catch((err) => console.log(err));
    
    });

module.exports=router;