//middleware
//  app.use(cors())//reat application will trigger at last and then axios call API'S as pages for register login and search home  allhotel.js hotel.js booking. adminDashboard.js
//  app.use("/api/user",user_route);

//   app.use("/api/hotel",hotel_router);

var express = require('express');
var path = require('path');
var mongoose = require("mongoose");

var app = express();
var PORT = 5000;

app.get("/",function(req,res){
    res.send("user router");
 });
 app.get("/api",function(req,res){
    res.send("api");
 });

app.listen(PORT,() => {
    console.log("Server is running on port " + PORT)
});