-- DROP USER 'hyf'@'localhost';
-- DROP DATABASE hyf_thread;

-- create a new databse for this project
CREATE DATABASE hyf_thread DEFAULT CHARACTER SET utf8mb4;

-- create a new mysql user
-- username: hyf
-- password: password
CREATE USER 'hyf' @'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

-- grant this new user all privilages on newly created database
GRANT ALL PRIVILEGES ON hyf_thread.* TO 'hyf' @'localhost';

-- flush all privilages
FLUSH PRIVILEGES;

USE hyf_thread;

-- create a new table
CREATE TABLE IF NOT EXISTS `internships` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
    `internship_title` VARCHAR(255) NOT NULL,
    `internship_category` VARCHAR(255) NOT NULL,
    `organisation_name` VARCHAR(255) NOT NULL,
    `department` VARCHAR(255) NOT NULL,
    `internship_description` TEXT NOT NULL,
    `organisation_description` TEXT NOT NULL,
    `internship_agreement` BOOLEAN NOT NULL,
    `internship_requirements` BOOLEAN NOT NULL,
    `application_requirements` VARCHAR(255) NOT NULL,
    `internship_availability_schedule` VARCHAR(255) NOT NULL,
    `travel_expenses` VARCHAR(255) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `internship_add_date` VARCHAR(255) NOT NULL,
    `closing_date` BOOLEAN NOT NULL,
    `internship_deadline` VARCHAR(255) NOT NULL,
    `contact_person` VARCHAR(255) NOT NULL,
    `phone_contact` VARCHAR(255) NOT NULL,
    `email_contact` VARCHAR(255) NOT NULL,
    `organisation_address` VARCHAR(255) NOT NULL,
    `organisation_website` VARCHAR(255) NOT NULL,
    `internship_theme_image` VARCHAR(255) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT 1,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARACTER SET = utf8 COLLATE = utf8_unicode_ci;

-- create a new row in internships table
INSERT INTO internships SET
    `internship_title` = 'Sales Assistant',
    `internship_category` = '3 months gold',
    `internship_description` = 'In 3 weeks you will learn about: Retail/Brands/Clothing&Accessories and Danish work culture',
    `internship_agreement` = 1,
    `internship_requirements` = 0,
    `internship_availability_schedule` = 'Monday-Friday: 11-18 and Saturday: 11-17',
    `department` = 'Sales',
    `organisation_name` = 'EDIE',
    `organisation_description` = 'EDIE is a new clothing store based in the heart of Copenhagen with a concept that connects sustainability and high end fashion',
    `application_requirements` = 'Muhabet',
    `travel_expenses` = '0',
    `location` = 'Copenhagen K',
    `internship_deadline` = '2018-11-01 11:59:00',
    `phone_contact` = '+45 31 32 56 30',
    `email_contact` = 'info@edie.dk',
    `organisation_address` = 'Kompagnistræde 10',
    `organisation_website` = 'https://edie.dk',
    `internship_theme_image` = 'https://s3.us-east-2.amazonaws.com/hyf-thread-class05/edie-logo.png',
    `is_active` = 1;
