console.log("entered into js file")
var express = require("express");
var app = express();
var bodyparser = require('body-parser');
var mysql = require('mysql');
const db = mysql.createPool({
  host:'localhost',
  user:'root',
  password:'',
  database:'mysql'
})


/*app.listen(3000);*/
