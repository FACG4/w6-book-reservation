BEGIN;

DROP TABLE IF EXISTS books, reservation, users CASCADE;

CREATE TABLE books(
id SERIAL PRIMARY KEY,
name VARCHAR(50) UNIQUE,
author VARCHAR(50) DEFAULT 'unknown'
);
CREATE TABLE users(
id SERIAL PRIMARY KEY,
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

INSERT INTO users (name, phone, email, user_name, password) VALUES
('Israa', 0597332457, 'isramm94@gmail.com', 'Israa94', '123456'),
('Farah', 0876564536, 'FarahZaqout@gmail.com', 'Farah123','123476');

INSERT INTO books (name, author) VALUES
('The Great Gatsby', 'F. Scott Fitzgerald'),
('The Grapes of Wrath','John Steinbeck'),
('Nineteen Eighty-Four','George Orwell'),
('Ulysses' , 'James Joyce');

INSERT INTO books (name) VALUES
('hbrfd');

select * from books;

COMMIT;
