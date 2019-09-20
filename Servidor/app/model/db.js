'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host: 'localhost',
    user     : 'root',
    password : 'JhosefCaceres',
    database : 'seminario1'
});

 

module.exports = connection;