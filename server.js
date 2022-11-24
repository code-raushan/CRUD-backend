const app = require('./app')

//PORT
const PORT = process.env.PORT||4000

app.listen(PORT, ()=>{
    console.log(`App is running at http://localhost:${PORT}`);
})