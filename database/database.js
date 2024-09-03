const mongoose = require('mongoose');


// connecting MongoDB
const connectDB = async () => {
    try {
        // await mongoose.connect(process.env.mongo_connection)
        await mongoose.connect("mongodb://localhost:27017/userDB")
        console.log('MongoDb is connected')
    } catch (err) {
        console.log("Error connecting to Mongoose", err)
    }
}

module.exports = connectDB;