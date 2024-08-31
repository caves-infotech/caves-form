const mongoose = require('mongoose');

//     sizex: null,
//     sizey: null,
//     area: null,
//     roadWidth: null,

const plotSchema = new mongoose.Schema({
    sizex: {
        type: Number,
    },
    sizey: {
        type: Number,
    },
    area: {
        type: Number,
    },
    roadWidth: {
        type: Number,
    },
});

module.exports = plotSchema;