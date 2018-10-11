const express = require('express')
const app = express()
var restRouter = require("./routes/rest");
var mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var path = require("path");

mongoose.connect("mongodb://lyuan11:86zhentan@ds129393.mlab.com:29393/lei")  //username and password for mlab.com

app.use(express.static(path.join(__dirname,'../public')));

app.use('/',indexRouter);
app.use("/api/v1", restRouter);



app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
})

