-- farah




















-- isra
BEGIN;

DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS reservations CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  auther TEXT NOT NULL
);
CREATE TABLE reservations(
  book_id INTEGER,
  user_id INTEGER,
  start_date DATE,
  end_date DATE
);
CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  name TEXT,
  user_name TEXT,
  password VARCHAR,
  phone_number INTEGER,
  email VARCHAR
);

COMMIT;

















-- ahmed



















-- eman
