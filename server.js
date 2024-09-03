const express = require('express');
const dotenv = require('dotenv')
const connectDB = require('./database/database');
const route = require("./routes/route")

connectDB();

// Loading environmental variable
dotenv.config();

// initializing express app
const app = express();

// MiddleWare
app.use(express.json());
app.use('/api', route)


// Creating Routes

//GET: Return all users
// app.get('/users', )


//Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));