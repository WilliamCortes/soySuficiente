CREATE TABLE    `soysufiblog`.`categories` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    PRIMARY KEY (`id`));

CREATE TABLE    `soysufiblog`.`tags` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    PRIMARY KEY (`id`));

CREATE TABLE    `soysufiblog`.`users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `login` VARCHAR(30) NOT NULL,
    `password` VARCHAR(30) NOT NULL,
    `nickname` VARCHAR(40) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `email_UNIQUE` (`email` ASC));

CREATE TABLE    `soysufiblog`.`posts` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(130) NOT NULL,
    `publication_date` TIMESTAMP NULL,
    `content` TEXT NOT NULL,
    `status` CHAR(8) NULL DEFAULT "active",
    `user_id` INT NOT NULL,
    `category_id` INT NOT NULL,
    PRIMARY KEY (`id`));

ALTER TABLE  `soysufiblog`.`posts` 
ADD INDEX `post_users_idx` (`user_id` ASC);
;
ALTER TABLE  `soysufiblog`.`posts` 
ADD CONSTRAINT `posts_users`
    FOREIGN KEY (`user_id`)
    REFERENCES  `soysufiblog`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE; 


ALTER TABLE  `soysufiblog`.`posts` 
ADD INDEX `post_categories_idx` (`category_id` ASC);
;
ALTER TABLE  `soysufiblog`.`posts` 
ADD CONSTRAINT `posts_categories`
    FOREIGN KEY (`category_id`)
    REFERENCES  `soysufiblog`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION; 

CREATE TABLE    `soysufiblog`.`comments` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `content` TEXT NOT NULL,
    `user_id` INT NOT NULL,
    `post_id` INT NOT NULL,
    PRIMARY KEY (`id`));

ALTER TABLE  `soysufiblog`.`comments` 
ADD INDEX `comments_users_idx` (`user_id` ASC);
;
ALTER TABLE  `soysufiblog`.`comments` 
ADD CONSTRAINT `comments_users`
    FOREIGN KEY (`user_id`)
    REFERENCES  `soysufiblog`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE; 

ALTER TABLE  `soysufiblog`.`comments` 
ADD INDEX `comments_post_idx` (`post_id` ASC);
;
ALTER TABLE  `soysufiblog`.`comments` 
ADD CONSTRAINT `comments_post`
    FOREIGN KEY (`post_id`)
    REFERENCES  `soysufiblog`.`posts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE; 

-- Comunity

CREATE TABLE categories(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
)

CREATE TABLE tags(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
)
CREATE TABLE users(
id INT NOT NULL AUTO_INCREMENT,
login VARCHAR(30) NOT NULL,
password VARCHAR(32) NOT NULL,
nickname VARCHAR(40) NOT NULL,
email VARCHAR(40) NOT NULL,
PRIMARY KEY (id),
UNIQUE (email)
)

CREATE TABLE posts(
id INT,
title VARCHAR(130) NOT NULL,
publication_date TIMESTAMP,
content TEXT NOT NULL,
status CHAR(8) DEFAULT "active",
user_id INT NOT NULL,
category_id INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE NO ACTION,
FOREIGN KEY (category_id) REFERENCES categories(id)

CREATE TABLE posts_tags(
id_post_tag INT IDENTITY(1,1) PRIMARY KEY,
id_post INT NOT NULL,
id_tag INT NOT NULL,
FOREIGN KEY (id_post) REFERENCES posts(id_post)
ON UPDATE CASCADE
ON DELETE NO ACTION,
FOREIGN KEY (id_tag) REFERENCES tags(id_tag)
ON UPDATE CASCADE
ON DELETE NO ACTION
);