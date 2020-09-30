const mongoose=require('mongoose');
const myschema=new mongoose.Schema({
    name:{
        type:String,
    },
    about:{type:String},
    events:[{
        date:{type:String},
        eventName:{type:String},
        day:{type:String}
    }],

})
const Club=mongoose.model('Club',myschema)
module.exports=Club;