

const express = require("express");
var app = express();
var bodyparser = require('body-parser');
var mysql = require('mysql');
const port = process.env.PORT || 3306;
var conn=mysql.createConnection({host:"thecommute.mysql.database.azure.com", user:"amritassr", password:"Kaushal@2003", database:"ssramrita", port:3306, ssl:{ca:fs.readFileSync("{ca-cert filename}")}});
app.listen(port);
