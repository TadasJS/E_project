
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

CREATE TABLE procedure(
id SERIAL PRIMARY KEY NOT NULL, 
name varchar(50) NOT NULL, 
category varchar(50) NOT NULL,
time TIME NOT NULL,
foto varchar(50) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

CREATE TABLE registration(
id SERIAL PRIMARY KEY NOT NULL,
reg_date DATE NOT NULL, 
reg_time TIME NOT NULL,
verified BOOL NOT NULL,
new_registration BOOL NOT NULL,
user_id INT NOT NULL,
procedure_id INT NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (user_id) REFERENCES users (id),
FOREIGN KEY (procedure_id) REFERENCES procedure (id));




CREATE TABLE rating (
  id SERIAL PRIMARY KEY NOT NULL,
  proc_rating INT NOT NULL,
  procedure_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (procedure_id) REFERENCES procedure (id));


INSERT INTO procedure (name, category, time, foto)
VALUES ('mot plauku kirpimas', 'Plauku kirpimas', '01:00', 'no foto'),
('vyr plauku kirpimas', 'Plaukuf kirpimas', '00:30', 'foto url');

INSERT INTO registration (reg_date, reg_time, verified, new_registration, user_id, procedure_id)
VALUES ('2020.12.12', '12:00', '0', '0', 1, 1);
