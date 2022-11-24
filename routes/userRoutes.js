//Routing paths

const express = require("express");
const {home, createUser, getUsers, editUser, deleteUser}=require('../controllers/userControllers');

const router = express.Router();
//creates a router as a module, loads a middleware function in it, defines some routes, and mounts the router module on a path in the main app
//get,post,put, delete are express.Router() methods
router.get("/", home);
router.post("/createUser", createUser);
router.get("/getUser/:id", getUsers);
router.put("/editUser/:id", editUser);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router