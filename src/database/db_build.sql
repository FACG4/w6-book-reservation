BEGIN;

DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS reservation;

CREATE TABLE books(
id SERIAL PRIMARY KEY,
name VARCHAR(50),
author VARCHAR(50),
);

CREATE TABLE users(
id INTEGER,
name VARCHAR(50),
phone INTEGER,
email VARCHAR(50),
user_name VARCHAR(50),
password VARCHAR(50)
);

CREATE TABLE reservation(
book_id INTEGER FOREIGN KEY(books),
user_id INTEGER FOREIGN KEY(users),
start_date DATE,
end_date DATE,
);

COMMIT;
