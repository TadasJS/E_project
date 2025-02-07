CREATE TABLE users (
id SERIAL PRIMARY KEY,
user_name VARCHAR(20) NOT NULL,
email VARCHAR(50) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP); 

CREATE TABLE users_roles (
  id SERIAL PRIMARY KEY,
  role_name varchar(20) NOT NULL);

CREATE TABLE users_secrets (
  id SERIAL PRIMARY KEY,
  userId INT NOT NULL,
  roleId INT NOT NULL,
  password varchar(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users (id),
  FOREIGN KEY (roleId) REFERENCES users_roles (id));


INSERT INTO users_roles (role_name)
VALUES ('user'),('admin');

INSERT INTO users ( user_name, email)
VALUES ('user', 'user@user.com'), ('admin', 'admin@admin.com');

INSERT INTO users_secrets (userId, password, roleId)
VALUES ( 1, '$2b$13$54L2rigIHP5ea23svcITFe01eX5TsQIXy3.dM/61lm.dQx9T.XPRu', 1), (2,'$2b$13$6mk62x4oUSpQi37HGhOMmecre29Yzv4pH7WOCVkzwSS.Z1Dq2q.7y', 2);

CREATE TABLE category(
id SERIAL PRIMARY KEY NOT NULL, 
name varchar(30) NOT NULL, 
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

CREATE TABLE advert(
id SERIAL PRIMARY KEY NOT NULL,
title varchar(50) NOT NULL,
description varchar (100) NOT NULL,
price NUMERIC (9,2) NOT NULL,
photo varchar (100) NOT NULL,
user_id INT NOT NULL,
category_id INT NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (user_id) REFERENCES users (id),
FOREIGN KEY (category_id) REFERENCES category (id));

CREATE TABLE comments(
id SERIAL PRIMARY KEY,
comment VARCHAR(200) NOT NULL,
user_id INT NOT NULL,
advert_id INT NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (user_id) REFERENCES users (id),
FOREIGN KEY (advert_id) REFERENCES advert (id));

CREATE TABLE is_like (
  id SERIAL PRIMARY KEY,
  like_is BOOL NOT NULL,
  user_id INT NOT NULL,
  advert_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (advert_id) REFERENCES advert (id));


INSERT INTO category (name)
VALUES ('zaislai'), ('baldai'), ('automobiliai');

INSERT INTO advert (title, description, price, photo, user_id, category_id )
VALUES ('zaisliukas', 'geras zaisliukas', 3.5, 'image_url', 1, 1 ),
('baldai', 'geri baldai', 20.5, 'image_url', 1, 2 ),
('masina', 'geras masina', 3000, 'image_url', 1, 3 );