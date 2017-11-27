-- MySQL Administrator dump 1.4
--
-- ------------------------------------------------------
-- Server version	5.1.68-community


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


--
-- Create schema employeedb
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ employeedb;
USE employeedb;

--
-- Table structure for table `employeedb`.`employee`
--

DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee` (
  `empid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `empname` varchar(45) NOT NULL DEFAULT '',
  `empcontact` varchar(45) NOT NULL DEFAULT '',
  `empemail` varchar(45) NOT NULL DEFAULT '',
  `empaddress` varchar(45) NOT NULL DEFAULT '',
  PRIMARY KEY (`empid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employeedb`.`employee`
--

/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` (`empid`,`empname`,`empcontact`,`empemail`,`empaddress`) VALUES 
 (1,'abcdgh','12345','abcd@gmail.com','ushjfggfh'),
 (3,'xvdsg','5678','sdgdg','dsgdg');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
