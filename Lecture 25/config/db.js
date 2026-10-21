const {mongoose} = require('mongoose');

async function MONGODB_Connection(){
    try{
        await mongoose.connect("mongodb://localhost:27017/AI_&_ML")
        console.log("Connected to MongoDB")
    } catch (err) {
        console.error("Error connecting to MongoDB:", err)
    }
}

module.exports = MONGODB_Connection;