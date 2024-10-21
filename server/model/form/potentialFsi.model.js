const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    user: {
        type: String,
    },
    projectName: {
        type: String,
    },
    buildingType: {
        input: {
            type: String,
        },
        other: {
            type: String,
        },
        residential: {
            type: Number,
        },
        commercial: {
            type: Number,
        },
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
    maxPotential: {
        type: Number,
    },
},
    { timestamps: true }
);

const potentialFsiFormModel = mongoose.model("potentialFsiForm", formSchema);

module.exports = potentialFsiFormModel;