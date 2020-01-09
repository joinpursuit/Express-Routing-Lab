const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 8000;


const decimal = (num) =>{
  
    return num
}
const binary = (num)=>{
    return num.toString(2)
}
const hex = (num)=>{

    return num.toString(16)
}


app.get("/dec/:num",(req, res)=>{
    res.json(add(Number(req.params.num)));
    console.log(req.params)
})
app.get("/bin/:num",(req, res)=>{
    res.json(sub(Number(req.params.num)));
    console.log(req.params);
})
app.get("/hex/:num",(req, res)=>{
    res.json(mul(Number(req.params.num)));
    console.log(req.params)
})
app.get("/:parameter", (req, res) =>{
    res.send("the operator is not supported");
})

app.get("/", (req, res) =>{
    res.send("you have requested a / at url")
})

app.listen(port,()=>{
    console.log("You are running on port " + port);
})