const express = require("express")
const app = express()
const connectDB = require("./config/db")
const Item = require("./models/ItemModel")
const Restaurant = require("./models/restaurantModel")

app.get("/",(req,res)=>{
    res.send("Root is working")
})

app.listen(8080,()=>{
    connectDB()
    console.log(`Server is running at http://localhost:8080`)
})