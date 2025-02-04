const mongoose = require("mongoose")
const Item = require("./ItemModel")

const restaurantSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    itemsArr : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Item
    }]
})

module.exports = mongoose.model("Restaurant",restaurantSchema)