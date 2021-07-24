CREATE TABLE `insurance`.`users` (
  `UserId` varchar(10) DEFAULT NULL,
  `FirstName` varchar(100) DEFAULT NULL,
  `LastName` varchar(100) DEFAULT NULL,
  `Password` varchar(20) DEFAULT NULL,
  `MobileNumber` varchar(20) DEFAULT NULL,
  `EmailAddress` varchar(50) DEFAULT NULL,
  `Gender` varchar(10) DEFAULT NULL,
  `DOB` varchar(20) DEFAULT NULL,
  `RoleId` int DEFAULT NULL,
  UNIQUE KEY `idx_users_UserId` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
