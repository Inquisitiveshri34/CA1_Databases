const mongoose = require("mongoose")

const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
   price: {
        type: Number,
        required: true
   }
})

module.exports = mongoose.model("Item",itemSchema)