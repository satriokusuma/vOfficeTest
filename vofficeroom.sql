-- -------------------------------------------------------------
-- TablePlus 4.5.2(402)
--
-- https://tableplus.com/
--
-- Database: vofficeroom
-- Generation Time: 2022-02-13 22:42:32.6700
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


CREATE TABLE `clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `credit` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `clients_email_unique` (`email`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `rooms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roomName` varchar(255) NOT NULL,
  `costPerHour` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `roomUsage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clientId` int(11) NOT NULL,
  `roomId` int(11) NOT NULL,
  `startTime` varchar(255) NOT NULL,
  `endTime` varchar(255) NOT NULL,
  `bookingDate` datetime NOT NULL,
  `quotaUsed` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `clientId` (`clientId`),
  KEY `roomId` (`roomId`),
  CONSTRAINT `roomusage_ibfk_1` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`),
  CONSTRAINT `roomusage_ibfk_2` FOREIGN KEY (`roomId`) REFERENCES `rooms` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

INSERT INTO `clients` (`id`, `name`, `email`, `phone`, `updatedAt`, `createdAt`, `credit`) VALUES
(1, 'james bond', 'james.bond@email.com', '+112345678', '2021-04-15 05:23:54', '2021-04-15 05:21:26', 15),
(2, 'wonder woman', 'wonder.woman@email.com', '+1123456789', '2021-04-15 05:24:25', '2021-04-15 05:21:26', 10),
(3, 'satrio kusuma', 'satrioamd@gmail.com', '081282804903', '2022-02-10 21:37:24', '2021-04-14 22:21:26', 20);

INSERT INTO `rooms` (`id`, `roomName`, `costPerHour`, `image`, `description`) VALUES
(1, 'conference room', 5, 'room-1-1644530173030-voffice.webp', 's simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an'),
(2, 'discussion room', 1, 'room-2-1644530186563-voffice.webp', 's simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an'),
(3, 'event space', 10, 'room-3-1644530194273-voffice.webp', 's simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an'),
(5, 'new room', 10, 'room-5-1644530201422-voffice.webp', 's simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an'),
(8, 'jakarta office', 1000, 'room-8-1644530208237-voffice.webp', 's simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an'),
(9, 'jakarta office', 1000, 'room-9-1644530215213-voffice.webp', 'A little about me. I have been teaching & surfing professionally for over 20 years and have achieved the ASA level 3 certified surf coach accreditation. After many years of working around the world I decided to change my life and moved to Bali to teach surfing. I really do love surfing and I\'m safe to say that I have the best job in the world.');

INSERT INTO `roomUsage` (`id`, `clientId`, `roomId`, `startTime`, `endTime`, `bookingDate`, `quotaUsed`, `createdAt`) VALUES
(1, 2, 2, '10:00', '11:00', '2021-04-13 00:00:00', 5, '2021-04-15 05:25:52');

INSERT INTO `users` (`id`, `createdAt`, `email`, `name`, `password`) VALUES
(1, '2021-04-15 05:26:31', 'jarakal@dota.com', 'troll warlord', '$2y$10$Wx1Gp6GEDEg54JZI1gZrxed7ETMTKZHFXN2RBa4JWI/5.AxoR2MmG');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;