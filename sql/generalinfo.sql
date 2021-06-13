CREATE TABLE `insurance`.`generalinfo` (
  `PatientID` int DEFAULT NULL,
  `GuestName` varchar(150) DEFAULT NULL,
  `GuestDOB` varchar(20) DEFAULT NULL,
  `InsuredName` varchar(150) DEFAULT NULL,
  `InsuredDOB` varchar(20) DEFAULT NULL,
  `InsuredSSN` varchar(20) DEFAULT NULL,
  `InsuredID` varchar(50) DEFAULT NULL,
  `GroupNumber` varchar(100) DEFAULT NULL,
  `InsuredEmployer` varchar(100) DEFAULT NULL,
  `InsCompany` varchar(50) DEFAULT NULL,
  `InsCompAddress` varchar(250) DEFAULT NULL,
  UNIQUE KEY `idx_generalinfo_PatientID` (`PatientID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
