const router = require('express').Router();
let Menu = require('../models/menu');

/*add*/
router.route("/add").post((req,res)=>{

    // const category_Id = req.body.id;
    // const Name  = req.body.name;
    // const Image =req.body.Image;

    const category_Id = 'req.body.id';
    const Name  = 'req.body.name';
    const Image  = 'req.body.unit'; 

    const newMenu = new Menu({
        category_Id,       
        Name,             
        Image,         
    })

    newMenu.save().then(()=>{
        res.json("Product added");
    }).catch((err)=>{
        console.log(err);
    })
})

/*delete*/
// router.route("/delete/:id").delete(async(req,res)=>{
    
//     let Id = req.params.id;

//     await Restaurant.remove({Item_Id:Id}).then(()=>{
//         res.status(200).send({status:"Menu details deleted", user : Id})
//     }).catch((err)=>{
//         console.log(err);
//         res.status(500).send({status:"Menu details delete failed", error:err});
//     })
// })

module.exports=router;