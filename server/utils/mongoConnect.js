const mongoose = require('mongoose');

function mongoConnect() {    
    try {
        mongoose.connect(process.env.MONGO_URI);        
        console.log("MongoDB connected successfully.");
    } catch (error) {
        console.log("MongoError: ", error);
    }
}

module.exports = mongoConnect;