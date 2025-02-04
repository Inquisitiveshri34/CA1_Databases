const mongoose = require("mongoose")
MONGO_URL = "mongodb+srv://diyashrivastavas66:Db4diya@cluster0.dchfy.mongodb.net/"

const connectDB = async ()=>{
    try{
        await mongoose.connect(MONGO_URL)
        console.log("MongoDB connected")
    } catch(err){
        console.error("MongoDB connection failed!")
    }
}

module.exports = connectDB