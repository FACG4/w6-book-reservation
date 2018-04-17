<<<<<<< HEAD
BEGIN;

DROP TABLE IF EXISTS books, reservation, users CASCADE;

CREATE TABLE books(
id SERIAL PRIMARY KEY,
name VARCHAR(50) UNIQUE,
author VARCHAR(50)
);

CREATE TABLE users(
id INTEGER PRIMARY KEY,
name VARCHAR(50),
phone INTEGER,
email VARCHAR(50) UNIQUE,
user_name VARCHAR(50) UNIQUE,
password VARCHAR(50)
);

CREATE TABLE reservation(
book_id INTEGER REFERENCES books(id),
user_id INTEGER REFERENCES users(id),
start_date DATE NOT NULL,
end_date DATE NOT NULL
);

COMMIT;
=======
-- farah



















-- isra


















-- ahmed



















-- eman
>>>>>>> 66ab8fa95d9ade6fba9a5de5ed03774d81e533d3
