Employee Management System
Installation Details
In this application using react is front end layer, node js and express js are middle layer and MySQL database layer is backend. 
Installation steps
1.	Install node js software like “node-v8.9.1-x86.msi”
2.	Install react js using command in command prompt 
npm install -g create-react-app
3.	After install react JS create react app using command in command prompt
create-react-app EMS
4.	After app creation configure all dependencies in package.json file. Manual dependicies added to package.json by using following command
npm init
5.	Install all following dependencies using commands 
For express module installation using : npm install express
For parsing module installation using : npm install body-parser 
For morgan module installation using : npm install morgan 
For mysql module installation using : npm install mysql
6.	Create database schema name and employee table in mysql
7.	Implement server.js file for creation of json api calls using node js and express 
8.	Implement home.html file for frondend home page display purpose
9.	Implement EMS.jsx file for frondend view using react js 
How to run application
1.	Open command prompt
2.	Using cd command change directory is created project called EMS.
3.	Using following command to run server file
4.	node server.js
5.	after that open web browser using following url
http://localhost:2017/
display home page 
 
6.	enter employee details click on add employee button it will add new employee details into database
 
7.	in table of employee records if want to update click on update button. Enter update details after display following screen
 
8.	in table of employee records if want to update click on delete button. After delete display following screen
 
9.	after add of new employee display screen 
 

10.	After add display records
 
11.	Only using api call test json result in postman in google chrome
 

