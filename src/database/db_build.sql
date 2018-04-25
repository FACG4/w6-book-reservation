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
email VARCHAR(50) UNIQUE,
password TEXT
);
CREATE TABLE reservation(
book_id INTEGER REFERENCES books(id),
user_id INTEGER REFERENCES users(id),
start_date DATE NOT NULL,
end_date DATE NOT NULL
);
INSERT INTO users (name, email, password) VALUES
('Israa', 'isramm94@gmail.com', '123456'),
('Farah', 'FarahZaqout@gmail.com','123476'),
('Ahmad', 'AhmadShatat@hotmail.com', '12987'),
('Iman', 'ImanHijjo@gmail.com','767893' );

INSERT INTO books (name, author) VALUES
('The Great Gatsby', 'F. Scott Fitzgerald'),
('The Grapes of Wrath','John Steinbeck'),
('Nineteen Eighty-Four','George Orwell'),
('Ulysses' , 'James Joyce');



COMMIT;
