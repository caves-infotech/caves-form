const mongoose = require('mongoose');

//     name: "",
//     email: "",
//     phone: "",


const ownerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
    },
    phone: {
        type: Number,
        required: [true, "Please enter your number"],
    },
});

module.exports = ownerSchema;