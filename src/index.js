// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env',
})

console.log(process.env.MONGODB_URI);

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8800,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO DB connection FAILD !!! : ",err);
})











// this is a first approch to make a DB connetion and second approac is used in a DB\index.js file
/*

;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("error: ", error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listning on port ${process.env.PORT}`)
        })
    }catch(error){
        console.log("ERROR:",error)
        throw err
    }
})()
*/
