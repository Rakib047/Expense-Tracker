const mongoose=require("mongoose")

const connectDB =async ()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongoDB CONNECTED hoise!: ${conn.connection.host}`.cyan.underline.bold)
    } catch (error) {
        console.log(`error: ${error.message}`.red)
        process.exit(1)
    }
}

module.exports=connectDB