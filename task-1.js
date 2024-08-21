const express  = require("express");
const mongoose = require("mongoose");

const app  = express();
const port = 9053;

mongoose.connect("mongodb+srv://ArunDB:arun1234@nodetasks.bk8qr.mongodb.net/NodeJS?retryWrites=true&w=majority&appName=Nodetasks");

const UserSchema = new mongoose.Schema({
    name:String,
    age:Number
});

const UserModel = mongoose.model("users", UserSchema)

app.get("/getUsers", (req, res) => {
    UserModel.find({})
    .then(function(users){
        res.json(users)
    }).catch(function(err){
        console.log(err)
    })
});

app.listen(port, () => {
    console.log(`We are watching on the port ${port}`);
});