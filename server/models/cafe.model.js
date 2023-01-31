const mongoose = require('mongoose')

const CafeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a menu item name"],
        minlength : [3, "Minimum length of 3 characters"]
    },
    price: {
        type: Number,
        required: [true, "Please include a price"],
        min: [1, "Price must be atleast 1 peso"],
    },
    category: {
        type: String,
        required: [true, "Must include category"],
        minlength: [3, "minimum length of 3 characters"]
    }
}, {timestamps: true});

module.exports = mongoose.model('Cafe', CafeSchema);