const express= require ("express");
const path = require ("path");
const bodyParser= require ("body-parser");
const cors =require("cors");

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors());

const port= 3000;
app.listen(port,() => console.log('Server started on port ${port}'));
