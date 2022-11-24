const mongoose = require("mongoose");//importing the orm

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is required"],
        trim: true,
        maxlength: [40, "Name can only be 40 characters long"]
    }, 
    email:{
        type: String,
        require: [true, "EMail is required"],
        unique: true,
        lowercase: true
    }
});
module.exports = mongoose.model("User", userSchema);