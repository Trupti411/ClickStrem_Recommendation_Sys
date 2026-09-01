const mongoose = require('mongoose');

const connectDB = async() =>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI, {
        serverSelectionTimeoutMS: 2000,
        });
        console.log(`[MongoDB] Connected: ${conn.connection.host}`);
    } catch (error){
        console.error(`[MongoDB Error] Database not connected (${error.message}). Running in offline mode.` );
        // process.exit(1);
    }

};

module.exports = connectDB;