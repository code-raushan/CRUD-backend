//Business Logic
const User = require("../models/userModel");
//For all routes we are playing with mongoose APIs like find, findOne, findByIdAndUpdate and findByIdAndDelete for our CRUD functionality

//home route(get)
exports.home=(req, res)=>{
    res.send('I am the home')
}
//create user route(post)
exports.createUser=async(req, res)=>{
    try{
        const {name, email}=req.body;
        //checking all details
        if(!name||!email){
            throw new Error("Name and Email are required fields")
        }
        //checking if user already exists in the database
        const ifUserExists = await User.findOne({email});
        if(ifUserExists){
            throw new Error("EMail already Exists, try new Email")
        }
        //inserting new data into the db
        const user = await User.create({name, email});
        res.status(201).json({
            success: true,
            message: "user created successfully",
            user
        });
    }catch(err){
        console.log(err);
    }
}
//getting all user route(get)
exports.getUsers= async(req, res)=>{
    try{
        const users = await User.find();//loading all instances
        res.status(201).json({
            success: true,
            users
        })
    }catch(error){
        res.status(401).json({
            success: false,
            message: error.message
        });
    }
}
//editing user route(put)
exports.editUser=async(req, res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json({
            success: true,
            message: "User updated successfully"
        })
    }catch(err){
        console.log(err);
        res.status(401).json({
            success: false,
            message: err.message
        })
    }
};
//delete user route(delete)
exports.deleteUser=async(req, res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(201).json({
            success:true,
            message: `user ${user.name} deleted successfully`
        });  
    }catch(err){
        console.log(err);
        res.status(401).json({
            success: false,
            message: err.message
        })
    }
}