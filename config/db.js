const mongoose = require("mongoose");

const connect = ()=>{
    mongoose
            .connect(process.env.MONGODB_URI)
            .then((conn)=>{
                console.log(`connected to DB: ${conn.connection.host}`);
            })
            .catch((err)=>{
                console.log(err.message);
                process.exit(1)
            })
}
module.exports = connect;