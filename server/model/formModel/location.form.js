const mongoose = require('mongoose');

//     village: "",
//     taluka: "",
//     district: "",
//     ulb: "",
//     zone: "",

const locationSchema = new mongoose.Schema({
    village: {
        type: String,
    },
    taluka: {
        type: String,
    },
    district: {
        type: String,
    },
    ulb: {
        type: String,
    },
    zone: {
        type: String,
    },
});

module.exports = locationSchema;