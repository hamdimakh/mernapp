// 1 Require express
const express = require("express");

//2 Create instance
const app = express()


// 4 require dotenv & config
require("dotenv").config();


// 8 Middleware bodyparser
app.use(express.json())

// 6 connectDB 
const connectDB = require('./config/connectDB');
connectDB();


// 7 routes
app.use('/api/contact', require('./routes/contact'))
app.use('/api/user', require("./routes/user") )


// 3 Create port
const PORT = process.env.PORT 



// 5 create server
app.listen(PORT, error => {
    error ? console.error(` Failed to connect to server !! ${error}`)
    :
    console.log(`Server is running on PORT ${PORT}...`)
})















