const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI'); //gets mongoURI from default.json

//Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
        });
        console.log("MongoDB Connected...");
    } catch (err) {
        console.error(err.mongoose);
        //Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;