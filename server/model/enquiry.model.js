const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
    user: String, 
    phone: Number,
    message: String,
    attachment: String,
},
{ timestamps: true }
);

const enquiryModel = mongoose.model('Enquiry', enquirySchema);

module.exports =  enquiryModel;
