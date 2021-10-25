-- -----------------------------------------------------
-- Schema calendario
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `calendario` DEFAULT CHARACTER SET utf8 ;
USE `calendario` ;

-- -----------------------------------------------------
-- Table `calendario`.`event`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `calendario`.`event` ;

CREATE TABLE IF NOT EXISTS `calendario`.`event` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(250) NOT NULL,
  `start` VARCHAR(250),
  `end` VARCHAR(250),
  `allDay` TINYINT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

LOCK TABLES `event` WRITE;
INSERT INTO `event` VALUES (1,'Create Repo API & APP','2021-10-24T22:00:00.000Z',NULL,1);
UNLOCK TABLES;
