BEGIN;

DROP TABLE IF EXISTS books, reservation, users CASCADE;

CREATE TABLE books(
id SERIAL PRIMARY KEY,
name VARCHAR(50) UNIQUE,
author VARCHAR(50) DEFAULT 'unknown'
);
CREATE TABLE users(
id SERIAL PRIMARY KEY,
email VARCHAR(50) UNIQUE,
user_name VARCHAR(50) UNIQUE,
password VARCHAR(50) NOT NULL
);
CREATE TABLE reservation(
book_id INTEGER REFERENCES books(id),
user_id INTEGER REFERENCES users(id),
start_date DATE NOT NULL,
end_date DATE NOT NULL
);
INSERT INTO users (email, user_name, password) VALUES
( 'isramm94@gmail.com', 'Israa94', '123456'),
( 'FarahZaqout@gmail.com', 'Farah123','123476'),
('AhmadShatat@hotmail.com', 'Ahmad80', '12987'),
('ImanHijjo@gmail.com','Iman23','767893' );

INSERT INTO books (name, author) VALUES
('The Great Gatsby', 'F. Scott Fitzgerald'),
('The Grapes of Wrath','John Steinbeck'),
('Nineteen Eighty-Four','George Orwell'),
('Ulysses' , 'James Joyce');



COMMIT;
