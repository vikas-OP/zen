-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`mentors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`mentors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`student_coordinators`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`student_coordinators` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`batches`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`batches` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `student_coordinator_id` INT NULL,
  `start_date` DATE NULL,
  `end_date` DATE NULL,
  PRIMARY KEY (`id`),
  INDEX `batches_fk_student_coordinators_idx` (`student_coordinator_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`students`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`students` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `second_name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `college` VARCHAR(45) NULL,
  `batch` INT NULL,
  `fees_paid` FLOAT NULL,
  `mentor_id` INT NULL,
  `overall_percentage` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `students_fk_mentors_idx` (`mentor_id` ASC) VISIBLE,
  INDEX `students_fk_batches_idx` (`batch` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`assignments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`assignments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `description` LONGTEXT NULL,
  `documentation` BLOB NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`assignments_students`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`assignments_students` (
  `assignment_id` INT NOT NULL,
  `student_id` INT NULL,
  `marks` INT NULL,
  PRIMARY KEY (`assignment_id`),
  INDEX `assignments_fk_students_idx` (`student_id` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
