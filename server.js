require('dotenv').config();
const cors = require('cors');

const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;
const db = process.env.MONGO_DB;
const weatherRoute = require("./router/weather");


const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1", weatherRoute);

mongoose.connect(db).then(()=>{
    console.log(`Connected to the database successfully`);
    app.listen(PORT, ()=>{
    console.log(`Weather is running on the PORT: ${PORT}`);  
})
}).catch((error)=> {
    console.log("Error connecting to the database:", error.message);
    
})