// require('dotenv').config({path : './env'})
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import { app } from './app.js';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

dotenv.config({
    path :'./.env'
})


connectDB().then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is runing ar port: ${process.env.PORT}`);
    })
}).catch((error)=>{
    console.log("Mongo DB connection failed !!",error);
});


/* import express from "express";
const app = express()

( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        app.on("error",(error)=>{
            console.log("Error:",error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
        
    } catch (error) {
        console.error('Error::',error);
        throw error;
    }
})() */