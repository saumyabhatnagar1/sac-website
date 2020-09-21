const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/sac-webiste',{useNewUrlParser:true,
useUnifiedTopology:true,useFindAndModify:false})
mongoose.connection.on('connected',()=>{
    console.log('connected')
})
mongoose.connection.on('err',()=>{
    console.log(err)
})