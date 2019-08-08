const express = require ('express');
var app = express();

var mysql =require('mysql');
var connection = require ('express-myconnection');
var bodyparser = require ('body-parser');
const cors = require('cors');

app.use (connection(mysql,{
    host:'localhost',
    user:'root',
    password:'',
    database:'login',
    multipleStatements:true,
},'single'));

app.use(bodyparser.json({limit:'50mb'}));
app.use(bodyparser.urlencoded({limit:"50mb",extended:true}));

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

serverRoutes = require('./expressRoutes/severroutes');

app.use('/login',serverRoutes);
 

app.listen(4000,() =>
console.log('Express Server is running mysql at port no :4000')
);