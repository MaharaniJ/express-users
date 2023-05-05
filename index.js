const express = require("express");
const app = express();

const users =[
    {
        "name": "person1",
        "age":21
    },
    {
        "name":"person2",
        "age":22
    }
]
//middleware
app.use(express.json())

app.get('/home',function(req,res){
    res.json({message:"Success...."});
});

app.get('/about',function(req,res){
    res.json({message:"About...."})
})

app.post("/user",function(req,res){
    console.log(req.body)
    req.body.id = users.length+1;
    users.push(req.body)
    res.json({message:"User Created Successfully..."})
})

app.get('/users',function(req,res){
    res.json(users)
})


app.listen(3033)