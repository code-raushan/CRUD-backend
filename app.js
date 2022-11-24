require("dotenv").config();//Loads .env file contents into process.env.
const express = require('express');
const connect = require('./config/db');
const userRoutes = require('./routes/userRoutes')
const app = express();

//Middleware

app.use(express.json());
//above method returns a middleware that only parses json and looks at request where content type is json

app.use(express.urlencoded({extended: true}));
//above methods returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches urlencoded

//connecting the database
connect();

// routing middlelware
app.use("/", userRoutes)



module.exports = app;



