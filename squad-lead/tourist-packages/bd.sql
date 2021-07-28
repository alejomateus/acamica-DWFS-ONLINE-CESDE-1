-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.17-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para tourist_packages
DROP DATABASE IF EXISTS `tourist_packages`;
CREATE DATABASE IF NOT EXISTS `tourist_packages` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `tourist_packages`;

-- Volcando estructura para tabla tourist_packages.packages
DROP TABLE IF EXISTS `packages`;
CREATE TABLE IF NOT EXISTS `packages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `origin` varchar(50) NOT NULL,
  `destination` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `days` int(11) NOT NULL,
  `nigths` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla tourist_packages.packages: ~1 rows (aproximadamente)
DELETE FROM `packages`;
/*!40000 ALTER TABLE `packages` DISABLE KEYS */;
INSERT INTO `packages` (`id`, `name`, `description`, `origin`, `destination`, `price`, `days`, `nigths`) VALUES
	(1, 'pckg1', 'Paquete Medellin-Bogota', 'Medellin', 'Bogota', 500000, 3, 2);
/*!40000 ALTER TABLE `packages` ENABLE KEYS */;

-- Volcando estructura para tabla tourist_packages.packages_users
DROP TABLE IF EXISTS `packages_users`;
CREATE TABLE IF NOT EXISTS `packages_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `packageId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `packageId` (`packageId`),
  CONSTRAINT `packages_users_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `packages_users_ibfk_2` FOREIGN KEY (`packageId`) REFERENCES `packages` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla tourist_packages.packages_users: ~0 rows (aproximadamente)
DELETE FROM `packages_users`;
/*!40000 ALTER TABLE `packages_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `packages_users` ENABLE KEYS */;

-- Volcando estructura para tabla tourist_packages.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phoneNumber` varchar(50) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL,
  `role` enum('admin','customer') DEFAULT 'customer',
  `logIn` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla tourist_packages.users: ~1 rows (aproximadamente)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `lastName`, `email`, `phoneNumber`, `password`, `role`, `logIn`) VALUES
	(1, 'Alejandro', 'Jimenez', 'alejo.mateus.ud@gmail.com', '3143720783', 'alejo123', 'admin', 0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
