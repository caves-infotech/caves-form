const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
    },
    password: {
        type: String,
        minVal: [6, "Password must be at least 6 characters"],
        maxVal: [16, "Password must be less than 16 characters"],
        select: false,
        required: true,
    },
    avatar: {
        url: String
    }
},
{ timestamps: true }
);

const userModel = mongoose.model('User', userSchema);

module.exports =  userModel;
