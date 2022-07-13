-- Database: `srs_login`
CREATE TABLE `users` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `username` VARCHAR(50) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `fname` varchar(30) NOT NULL,
    `lname` varchar(30) NOT NULL,
    `user_email` varchar(100) NOT NULL,
    `gender` varchar(10) NOT NULL,
    `birthday` date NOT NULL,
    `contact` bigint(11) NOT NULL
);
INSERT INTO `users` (`id`,`username`,`password`,`created_at`,`fname`,`lname`,`user_email`,`gender`,`birthday`,`contact`) VALUES
(1,'admin','admin','2021-05-05','Rishab','Nagar','rishab.nagar2019@vitstudent.ac.in','Male','2001-11-05',9998887776);