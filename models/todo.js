const mongoose=require('mongoose');

const todoschema=new mongoose.Schema({todo:{
    type:String,
    required:true,
}});


module.exports=new mongoose.model("todo",todoschema);