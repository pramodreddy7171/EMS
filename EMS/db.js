var mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'employeedb'
});

mysqlConnection.connect(function(errData) {
  if (errData) {
    console.error('error connecting: ' + errData.stack);
    return;
  }
  console.log('Connection Established successfully');
});
module.exports =mysqlConnection;

