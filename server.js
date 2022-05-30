const {current,forecast}=require('./user');
const {currentMapping,forecastMapping}=require('./mapping');
const express=require("express");

const app=express();


//middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

app.get('/form',(req,res)=>{
    
    res.sendFile(__dirname+'/public/index.html');
})
app.post('/form',async (req,res)=>{
    const city=req.body.city;
    const weather=req.body.weather;
    console.log(weather);
    let friend='';
    if(weather=='forecast'){
        console.log("im working");
        let data =await forecast(city);
        friend= await forecastMapping( data);
    }
    else{
        let data=await current(city);
        //console.log(data.location)
        friend= await currentMapping(data);
    }
    console.log(friend);
    res.send(friend);
    res.sendStatus(200);
    
})





app.listen(4545,()=>{
    console.log("server is runing....");
})
