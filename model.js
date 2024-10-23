const mongoose=require('mongoose');

const cSchema= new mongoose.Schema({
       Code:{
        type:String
       }
})
const Code=mongoose.model('Code',cSchema);
module.exports=Code;