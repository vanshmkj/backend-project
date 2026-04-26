import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true,
}))

app.use(express.json({
    limit:"16kb",
}))       // this setting for when we receving data from json file 

app.use(express.urlencoded({
    extended: true,
    limit:"16kb",
}))         //this for when data receiving form the urls 

app.use(express.static("public"))  //this use in the time when we eant to store files , images etc.

app.use(cookieParser())



export { app }