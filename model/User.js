// require mongoose 
const mongoose = require ("mongoose");



// schema
const {Schema, model} = mongoose;


// Creation schema
const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role : {type: String, default: "user"},
    phone: Number
})

//  export to the database model
module.exports = User = model('user', UserSchema)








