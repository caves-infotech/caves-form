const mongoose = require('mongoose');

const ownerSchema = require('./formModel/owner.form');
const locationSchema = require('./formModel/location.form');
const plotSchema = require('./formModel/plot.form');

//   owner: {
//     name: "",
//     email: "",
//     phone: "",
//   },
//   location: {
//     village: "",
//     taluka: "",
//     district: "",
//     ulb: "",
//     zone: "",
//   },
//   plot: {
//     sizex: null,
//     sizey: null,
//     area: null,
//     roadWidth: null,
//   },

const formSchema = new mongoose.Schema({
    owner: ownerSchema,
    location: locationSchema,
    plot: plotSchema,
},
{timestamps: true}
);

const formModel = mongoose.model("Form", formSchema);

module.exports = formModel;