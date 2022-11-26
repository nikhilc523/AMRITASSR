const express = require("express");
var app = express();
var bodyparser = require('body-parser');
var mysql = require('mysql');
const fs = require('fs');
const { response } = require("express");
const port = process.env.PORT || 3306;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static('public'));
app.use(express.static('publice'));
app.use(express.static('publicee'));
var conn=mysql.createConnection({
    host:"thecommute.mysql.database.azure.com", 
    user:"amritassr", 
    password:"Kaushal@2003", 
    database:"carstats", port:3306
});

conn.connect(function(err){
  if(err)throw err;
  console.log("connected succcessfulllyyyyy!!!!");
})


app.get('/',function(req,res){
    res.sendFile(__dirname+'/publicee/index.html')
})
app.post('/add.html',(req,res)=>{
  var destination = req.body.destination;
  var source = req.body.source;
  var date = req.body.birthday;
    var sql = "INSERT INTO rides (source,destination,journeydate) VALUES('"+source.toLowerCase()+"','"+destination.toLowerCase()+"','"+date+"')";
    conn.query(sql,function(error,result){
      if(error){
        res.sendFile(__dirname+'/public/failure.html')
        throw error;
      } 
      console.log("connected");
      res.sendFile(__dirname+'/public/success.html');
    })
})
app.post('/find.html',(req,res)=>{
    var source = req.body.source;
    var destination = req.body.destination;
    var date = req.body.birthday;
    console.log(source)
    console.log(destination)
    console.log(date)
    var sql = "SELECT * FROM rides WHERE source='"+source.toLowerCase()+"' AND destination='"+destination.toLowerCase()+"' AND journeydate='"+date+"'";
    conn.query(sql,(error,results)=>{
        if(error){
            res.sendFile(__dirname+'/public/failure.html')
            throw error;
        }
        var response = ""
        var i = 1;
        results.forEach(element => {
            response = response + "<h3>Trip - "+i+"</h3>source: "+element.source+"<br> destination: "+element.destination+"<br> journeydate: "+element.journeydate+"<br><br>"
            i= i+1
        })
        res.send(response)
    })
})

app.listen(port,()=>{
    console.log("server started at "+port);
});
