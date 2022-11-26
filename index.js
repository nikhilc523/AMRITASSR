

const express = require("express");
var app = express();
var bodyparser = require('body-parser');
var mysql = require('mysql');
const fs = require('fs');
const port = process.env.PORT || 3306;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static('public'));
app.use(express.static('publice'));
app.use(express.static('publicee'));
var conn=mysql.createConnection({host:"thecommute.mysql.database.azure.com", user:"amritassr", password:"Kaushal@2003", database:"carstats", port:3306});
app.listen(port);
conn.connect(function(err){
  if(err)throw err;
  console.log("connected succcessfulllyyyyy!!!!");
})
app.get('/',function(req,res){
res.sendFile(__dirname+'/publicee/index.html')
})
app.post('/find.html',function(req,res){
  var desti = req.body.destination;
  var sour = req.body.source;
  var date = req.body.birthday;
    var sql = "INSERT INTO rides (source,destination,journeydate) VALUES('"+desti+"','"+sour+"','"+date+"')";
    conn.query(sql,function(error,result){
      if(error) throw error;
      console.log("connected");
      res.send("ride added succcessfulllyyyyy");

    })

  })
 app.get('publice\Add.html',function(req,res){
 var source = req.body.from;
 var desti = req.body.to;
 var date = req.body.birthday;
 console.log(source);
 console.log(desti)






 })
