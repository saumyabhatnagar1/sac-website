const express=require('express')
const app=express()
const bodyParser=require('body-parser')
app.use(express.json())
const Club=require('./models/club.js')
require('./db/mongoose.js')
app.get('',(req,res)=>{
    res.send('Hello World!')
})
app.post('/newclub',async (req,res)=>{
    const club=new Club(req.body)
   try{
       await club.save()
       res.status(201).send(club)
   }
   catch(e){
       res.status(400).send(e)
   }
})
app.get('/getallclub',async(req,res)=>{
    try{
        const clubs=await Club.find({})
        res.status(201).send(clubs)
    }
    catch(e){
        res.status(400).send(e)
    }
})
app.get('/getclub/:id',async(req,res)=>{
    const id=req.params.id;
    try{
        const club=await Club.findById(id)
        res.status(201).send(club)
    }
    catch(e){
        res.status(400).send(e)
    }
})
app.delete('/deleteclub/:id',async (req,res)=>{
    try{
        const club=await Club.findByIdAndDelete(req.params.id)
        res.status(201).send(club)
    }
    catch(e){
        res.status(400).send(e)
    }
})
app.patch('/updateclub',async (req,res)=>{
    
    try{
        const club=await Club.findByIdAndUpdate(req.body.id,req.body,{new:true,runValidators:true})
        res.status(201).send(club)
    }
    catch(e){
        res.status(401).send(e)
    }
})

app.listen(3000,()=>{console.log('running')})