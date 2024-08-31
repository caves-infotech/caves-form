const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
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

const adminModel = mongoose.model("Admin", adminSchema);

export default adminModel;