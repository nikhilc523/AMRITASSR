

const express = require("express");
var app = express();
var bodyparser = require('body-parser');
var mysql = require('mysql');
const port = process.env.PORT || 5000;
const db = mysql.createPool({
  host:'thecommute.mysql.database.azure.com',
  user:'amritassr',
  password:'Kaushal@2003',
  database:'mysql'
})
db.getConnection(function(error){
  if(error){
  throw error;
  }
})




app.listen(port);
