// require mongoose
const mongoose = require("mongoose");





// connect DB
const connectDB = async () => {
    try {
        // step 1
        await mongoose.connect(process.env.DB_URI)
        // step 2
        console.log("Database connected ...")
    } catch (error) {
        console.log("Database is not connected !!!", error)
        
    }
} 


// export
module.exports = connectDB













