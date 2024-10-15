const app = require("./app")
const dotenv =require("dotenv");
const connectDatabse= require("./config/database")


//config
dotenv.config({path:"backend/config/config.env"})

////Connect Database
connectDatabse();

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port http://localhost:${process.env.PORT}`)
})