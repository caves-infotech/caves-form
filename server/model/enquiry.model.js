const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
    user: {
        type: String,
    },
    title: {
        type: String,
    },
    message: {
        type: String,
    },
    attachment: {
        type: String,
    },
},
{ timestamps: true }
);

const enquiryModel = mongoose.model('Enquiry', enquirySchema);

module.exports =  enquiryModel;
