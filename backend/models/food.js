const mongoose= require('mongoose');
const Schema=mongoose.Schema;
const foodSchema=new Schema({
 
  
    name:{
        type: String,
        required: true
    },
    Cat_id:{
        type: String,
        required: true
    },
    ingridients:{
        type: String,
        required: true
    },
    Price:{
        type: String,
        required: true
    },
    Picture:{
        type: String,
        // required: true
    }
})
const food = mongoose.model("food",foodSchema);

module.exports=food;