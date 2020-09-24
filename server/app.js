const express=require('express')
const app=express()
const cors = require('cors'); 
const bodyParser=require('body-parser')
app.use(express.json())
app.use(cors());
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

app.get('/getall',async(req,res)=>{
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
app.get('/club/:name/addevent',async(req,res)=>{
    try{
        const club=await Club.findOne({name:req.params.name})
        const events=club.events
        
        events.push({
            date:req.body.date,
            eventName:req.body.eventName
        })
        await club.save()
        res.status(201).send(events)
    }
    catch(e){
        res.send(e)
    }
})
app.get('/club/:name/getevent',async(req,res)=>{
    try{
        const club=await Club.findOne({name:req.params.name})
        res.send(club.events)
    }
    catch(e){
        res.send(e)
    }
})
app.delete('/club/:name/deleteevent/:id',async (req,res)=>{
    try{
        const club=await Club.findOne({name:req.params.name})
        const events=club.events;
        let index;
        console.log(events)
        for(let i=0;i<events.length;i++)
        {

            if(events[i].id===req.params.id)
            {
                console.log(index)
                index=i;
                break;
            }
        }
        console.log(index)
        if(index>-1){
            events.splice(index,1)
        }
        await club.save()
        res.send(events)
    }
    catch(e){
        res.send(e)
    }
})


app.listen(3000,()=>{console.log('running')})