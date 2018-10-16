const express = require('express')
const app = express()
var restRouter = require("./routes/rest");
var mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var path = require("path");
var http = require('http');


var socket_io= require('socket.io');
var io = socket_io();
var SocketService = require('./services/SocketService.js')(io);

mongoose.connect("mongodb://lyuan11:86zhentan@ds129393.mlab.com:29393/lei",{ useNewUrlParser: true })  //username and password for mlab.com

app.use(express.static(path.join(__dirname,'../public')));

app.use('/',indexRouter);
app.use("/api/v1", restRouter);


app.use(function(req,res){
    //send index.html to start client side
    res.sendFile("index.html",{root: path.join(__dirname,'../public')});
});



var server = http.createServer(app);
io.attach(server);
server.listen(3000);

server.on('error',onError);
server.on('listening',onListening);

function onError(error){
    throw error;
}

function onListening(){
    var addr = server.address();
    var bind = typeof add == 'string'
    ? 'pipe' + addr : 'port' + addr.port;
    console.log('Listening on' + bind);
}
