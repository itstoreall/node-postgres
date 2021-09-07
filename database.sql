create TABLE person(
  id SERIAL PRIMARY KEY,
  name VARCHAR(250),
  surname VARCHAR(250)
);

create TABLE post(
  id SERIAL PRIMARY KEY,
  title VARCHAR(250),
  content VARCHAR(250),
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES person (id)
);