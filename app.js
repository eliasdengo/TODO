const express=require('express');
const mongoose=require('mongoose')

const app=express();

// connectin with mongodb database 
mongoose.connect("mongodb://localhost/tododb");

//middleware

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine","ejs");


// router

app.use(require("./routes/index"))
app.use(require("./routes/todo"))


app.listen(3000,()=>console.log("server started listening at port 3000"));