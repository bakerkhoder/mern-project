import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"
import postRoutes from "./routes/post.js"


const app=express();

app.use("/posts",postRoutes)

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

const CONNECTION_URL="mongodb+srv://baker:bakokh14@cluster0.lj5o6f4.mongodb.net/postess?retryWrites=true&w=majority"
const PORT= 5000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`app is listening on port ${PORT}`)))
.catch((error)=>console.log(error.message))

// mongoose.set("useFindAndModify",false)