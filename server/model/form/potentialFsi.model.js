const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    user: {
        type: String,
    },
    projectName: {
        type: String,
    },
    areaType: {
        type: String,
    },
    ulb: {
        type: String,
    },
    zone: {
        type: String,
    },
    plotType: {
        type: String,
    },
    proRata: {
        type: Number,
    },
    builtUp: {
        type: Number,
    },
    area: {
        type: Number,
    },
    roadWidth: {
        type: String,
    },
},
    { timestamps: true }
);

const potentialFsiFormModel = mongoose.model("potentialFsiForm", formSchema);

module.exports = potentialFsiFormModel;