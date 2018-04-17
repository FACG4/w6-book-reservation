-- farah




















-- isra
BEGIN;

DROP TABLE IF EXISTS books, reservations, users CASCADE;

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE,
  auther TEXT NOT NULL
);
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  user_name TEXT UNIQUE,
  password VARCHAR UNIQUE,
  phone_number INTEGER,
  email VARCHAR
);
CREATE TABLE reservations(
  book_id INTEGER REFERENCES books(id),
  user_id INTEGER REFERENCES users(id),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL
);
COMMIT;

















-- ahmed



















-- eman
