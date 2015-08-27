DROP TABLE if exists western;
DROP TABLE if exists eastern;


CREATE TABLE western (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE eastern (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)  
);

CREATE TABLE spirit_animals (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  url TEXT  
);

CREATE TABLE western_easterns (
  id SERIAL PRIMARY KEY,
  western_id INTEGER,
  eastern_id INTEGER,
  spirit_animal_id INTEGER
);



