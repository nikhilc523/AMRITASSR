

const express = require("express");
var app = express();
var bodyparser = require('body-parser');
var mysql = require('mysql');
const db = mysql.createPool({
  host:'localhost',
  user:'root',
  password:'',
  database:'mysql'
})
db.getConnection(function(error){
  if(error){
  throw error;
  }
})
app.use(express.static('public'));
app.use(express.static('publice'));
app.use(express.static('publicee'));
app.get('/',function(req,res){
res.sendFile(__dirname+'/publicee/index.html')
})

app.get('/find.html',function(req,res){
res.sendFile(__dirname+'/public/find.html')
})

app.get('/Add.html',function(req,res){
res.sendFile(__dirname+'/public/Add.html')
})
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static('public'));
app.post('/find.html',function(req,res){
  var desti = req.body.destination;
  var sour = req.body.source;
  var date = req.body.birthday;
  db.getConnection(function(error){
    if(error){
    throw error;
    }
    var sql = "INSERT INTO ridesharing (Source,Destination,Date) VALUES('"+desti+"','"+sour+"','"+date+"')";
    db.query(sql,function(error,result){
      if(error) throw error;
      console.log("connected");
      res.send("Ride added Successfully");

    })

  })
});
app.get('/Add.html',function(req,res){
  db.getConnection(function(error){
    if(error){
    throw error;
    }
    var sql = "SELECT * FROM ridesharing";
    db.query(sql,function(error,result){
      if(error) throw error;
      console.log("result");
      res.send("Ride added Successfully");

    })

  })
});
app.listen(5000);
