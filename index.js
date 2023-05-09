const express = require("express");
const app = express();

const users = [
    {
        "id": 1,
        "name": "person1",
        "age": 21
    },
    {
        "id": 2,
        "name": "person2",
        "age": 22
    }
]
//middleware
app.use(express.json())

app.get('/home', function (req, res) {
    
    res.json({ message: "Success...." });
});

app.get('/about', function (req, res) {
    res.json({ message: "About...." })
})

app.post("/user", function (req, res) {
    console.log(req.body)
    req.body.id = users.length + 1;
    users.push(req.body)
    res.json({ message: "User Created Successfully..." })
})

app.get('/users', function (req, res) {
    let qParms = req.query
    console.log(qParms)
    let resUser=[]
    for(let index = parseInt(req.query.offset);index<parseInt(req.query.limit)+parseInt(req.body.offset);index++){
        resUser.push(users[index])
    }

    
    res.json(users)

})

app.get("/user:/id", function (req, res) {
    let userId = (req.params.id)
    let user = users.find((item) => item.id == insertId)
    if (user) {
        res.json(user)
    }
    else {
        res.json({ message: "User not found" })
    }
})

app.put("/user/:id", function (req, res) {
    let userId = req.params.id;
    let userIndex = users.findIndex((item) => item.id == userId)
    if (userIndex != -1) {
        Object.keys(req.body).forEach((item) => {
            users[userIndex][item] = req.body[item]
        });
        res.json({ message: "Updated Done" })
    }

    else {
        res.json({
            message: "User not found"
        })
    }

})

app.delete('/user/:id', function (req, res) {
    let userId = req.params.id;
    let userIndex = users.findIndex((item) => item.id == userId)
    if (userIndex != -1) {
        users.splice(userIndex, 1)
        res.json({ message: "User Deleted successfully" })
    }
    else {
        res.json({
            message: "User not found"
        })
    }
})

app.listen(3030)