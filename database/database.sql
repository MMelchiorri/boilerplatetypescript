CREATE DATABASE typescriptdb;

CREATE TABLE users(
    id serial PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT into users (name,email) 
    VALUES('joe','email@email.com') 
          ('joe','email@email.com') 