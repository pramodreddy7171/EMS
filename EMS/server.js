var express = require("express");
var path1 = require("path");
var bodyParser = require('body-parser'); 
var mysqlDb = require("./db.js");
var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'employeedb'
});
	
var ems = express();
var hostPort = process.env.port || 2017;
ems.use(express.static('public'));
ems.use(bodyParser.json({limit:'5mb'}));  
var sourcepath  =path1.join(__dirname,'/public') ;
ems.use(bodyParser.urlencoded({extended:true, limit:'10mb'}));

//using this api get employee data from mysql database
ems.get("/api/getEmployee",function(request,response){ 
   mysqlConnection.query('select * from employee', function (err, reslt, att) {
   if (err) throw err;
   response.send(JSON.stringify(reslt));
 });
})


//using this api delete employee data from mysql database
ems.post("/api/deleteEmployee",function(request,response){ 
 mysqlConnection.query('DELETE FROM `employee` WHERE `empid`=?', [request.body.empid], function (err, reslt, att) {
   if (err) throw err;
   response.json({
            data:'Employee has beed deleted'
        })
 });
})

//using this api update employee data from mysql database
ems.post("/api/updateEmployee",function(request,response){ 
var data2 = {
        empname:request.body.empname,
		empcontact:request.body.empcontact,
        empemail:request.body.empemail,
		empaddress:request.body.empaddress
     };
    mysqlConnection.query("UPDATE employee set ? WHERE empid = ? ",[data2,request.body.empid], function (err, reslt, att) {
      if (err) {
        response.json({
            status:false,
            data:'some error in query'+err
        })
      }else{
          response.json({
            status:true,
            data1:reslt,
            data:'Employee updated sucessfully'
        })
      }
    });
})  


//using this api insert employee data from mysql database
ems.post("/api/addEmployee",function(request,response){ 
    var data2 = {
        empname:request.body.empname,
		empcontact:request.body.empcontact,
		empemail:request.body.empemail,
        empaddress:request.body.empaddress
     };
    mysqlConnection.query('INSERT INTO employee SET ?',data2, function (err, reslt, att) {
      if (err) {
        response.json({
            status:false,
            data:'some error in query'
        })
      }else{
          response.json({
            status:true,
            data1:reslt,
            data:'Employee registered sucessfully'
        })
      }
    });
})
    
//using this api display home.html page
ems.get("*",function(request,response){ 
    response.sendFile(sourcepath +'/home.html');
})

//using this api start server
ems.listen(hostPort,function(){ 
    console.log("server start at port"+ hostPort);
})