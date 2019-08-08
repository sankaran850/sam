var express=require("express")
var serverRoutes=express.Router();
const moment = require ("moment");
// console.log('llll');

serverRoutes.route("/getloginInfo").post(function(req,res){
    console.log("get login info req.body",req.body);
     var serverRoutes=req.body.loginData;

     req.getConnection(function(err,connection){
       //  console.log("SELECT * FROM register where email='"+login.email+"' and password='"+login.password+"'");

         var  query=connection.query("SELECT * FROM register where email='"+login.email+"' and password='"+login.password+"'",function(err,data){
            if(err){
                console.log("err");
              }
               
              if(data){
                  console.log(data);
                res.send(data);
              }
            
            })
          })
     });
    


serverRoutes.route('/getregisterInfo').post(function(req,res){
    var registerinfo=req.body.registerinfo;
    console.log("www",registerinfo);
     req.getConnection(function(err,connection){
         var query=connection.query("Insert into register (firstName,lastName,address,email,password)values('"+registerinfo.firstName+"','"+registerinfo.lastName+"','"+registerinfo.address+"','"+registerinfo.email+"','"+registerinfo.password+"')",
function(err,data){
    if(data){
        res.send(data);
    }if(err){
        console.log("err",err);
    }

     })
    })
});
module.exports = serverRoutes;