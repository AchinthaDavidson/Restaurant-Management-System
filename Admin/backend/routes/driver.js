const router = require("express").Router();
const driver = require("../models/driver");
router.route("/add").post((req,res)=>{

    const D_Id=req.body.id
    const  name =req.body.name
    const  Email    =req.body.email
    const  address  =req.body.address
    const  phone_no     = req.body.phone_no
    const  password     =req.body.password
    const  status    = "Idle"


    // const order_id ='1';
    // const  w_id     ="vsfgsg"
    // const  cus_id   ="dfxhfh"
    // const  type     ="takeaway"
   
    // const  date     =d.getUTCDate()+"/"+d.getUTCMonth()+1+"/"+d.getFullYear();
    // const  time     =d.getHours()+":"+d.getMinutes()

    const newdriver =new  driver({
        D_Id,
        name,
        Email,   
        address, 
        phone_no,
        password,
        status  
    })

    newdriver.save().then(()=>{
        res.json("save details")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    driver.find().then((driver)=>{
        res.json(driver)
    }).catch((err)=>{
        console.log(err)
    })
})

router.put("/update/:id" , async(req,res)=>{

    let userID = req.params.id

    const { name,
        Email,   
        address, 
        phone_no,
        password,
        status
        } = req.body

    const updatedriver = {
        name,Email,address, phone_no, password,status
    }

   // console.log(userID )

    const update = await driver.findByIdAndUpdate(userID , updatedriver)
    .then((response)=>{
        res.status(200).send(response)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).send({status : "error with update user" , error : err.message})
    })
})

router.put("/updateStatus/:id" , async(req,res)=>{

    let userID = req.params.id
    const status = req.body.status
    await driver.findByIdAndUpdate(userID , status)
    .then((response)=>{
        console.log(response)
        res.status(200).send(response)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).send({status : "error with update user" , error : err.message})
    })
})

router.route("/FindDriver/:id").get(async(req,res)=>{
    const ids =  req.params.id.toString()
    await driver.findById({_id:ids})
    .then(response => { 
        console.log(response)
        res.send(response)
    })
    .catch((err) => console.log(err));

})




router.delete('/delete/:id' , async (req,res)=> {
    let userID = req.params.id

    await driver.findByIdAndDelete(userID)
    .then(()=>{
        res.status(200).send( {Status : "deleted"})
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send({status : "error with delete user" , error : err.message})
    })

})



router.route("/getNewData/:id").get((req,res)=>{
    let id = req.params.id
   // console.log("thisi isthe id //////////////////////////////////////////////////////////////////////")
  //  console.log(id)
    driver.findById(id).then((driver)=>{
        res.send(driver)
    }).catch((err)=>{
        console.log(err)
    })
})



module.exports=router;


// router.route("/:id").get((req,res)=>{
//     let id = req.params.id
//     driver.findById(id).then((driver)=>{
//         res.json(driver)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })



// router.put("/updateStatusAfterDelete/:id" , async(req,res)=>{

//     const reqs = req.body
//     const Email = req.params
//     // await driver.findOneAndUpdate(Email, reqs)

//     await driver.updateOne(Email)
//     .then((response)=>{
//         console.log("this is the respo")
//         console.log(response)
//         res.status(200).send(response)
//     })
//     .catch((err) => {
//         console.log(err)
//         res.status(500).send({status : "error with update user" , error : err.message})
//     })
// })
