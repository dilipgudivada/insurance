CREATE TABLE `insurance`.`roles` (
  `RoleId` int DEFAULT NULL,
  `RoleName` varchar(20) DEFAULT NULL,
  UNIQUE KEY `idx_roles_RoleId` (`RoleId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
