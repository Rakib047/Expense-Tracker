const express =require("express")
const dotenv =require("dotenv")
const colors =require("colors")
const morgan =require("morgan")
const connectDB=require("./config/db")
const path=require("path")
dotenv.config({path: './config/config.env'})

//connecting database
connectDB()

const transactions = require("./routes/transactionRoute")

const app=express()

app.use(express.json())

if(process.env.NODE_ENV==="development"){
    app.use(morgan("dev"))
}

app.use("/api/v1/transactions",transactions)

if(process.env.NODE_ENV==="production"){
    app.use(express.static("../FrontEnd/build"))

    app.get("*",(req,res)=> res.sendFile(path.resolve(__dirname,"FrontEnd","build","index.html")))
}

const PORT=process.env.PORT||5001

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))

