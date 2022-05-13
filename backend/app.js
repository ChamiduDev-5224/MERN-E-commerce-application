const express = require("express");
//mongo package imported
const mongoose = require ("mongoose");

const app = express();

//Mongo db connection url
mongoose.connect("mongodb+srv://chamidu5224:Chamidu%405224@cluster0.jj0ze.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
)
.then(()=>app.listen(5000))
.then(()=>console.log ("Database connected")
)
//exception handling js
.catch((err)=>console.log("database connection error : "+ err));

