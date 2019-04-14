CREATE DATABASE internships;
\c internships


CREATE TABLE reviews (
    Review_ID serial PRIMARY KEY,
    company_name text NOT NULL,
    job_title text NOT NULL,
    salary text, 
    start_date date,
    end_date date,
    rating int,
    season text,
    duration int,
    address text NOT NULL,
    city text,
    state text,
    longitude decimal,
    lattitude decimal,
    is_approved boolean DEFAULT FALSE,
    dollars text,
    Other_data text
);

CREATE TABLE users (
	user_name text PRIMARY KEY,
	user_email text NOT NULL,
	password text NOT NULL,
    is_admin boolean DEFAULT FALSE
);

insert into reviews(company_name, job_title, salary, start_date, end_date, rating, season, duration, address, city, state, longitude, lattitude,is_approved,dollars, Other_data) values 
    ('Geico', 'Software Engineer intern', 'paid', '2018-06-01', '2018-08-01', 5, 'summer', 12, '123 Real street', 'Fredericksburg', 'Virginia', 13.47530, 28.6869538, TRUE, '2', 'N/A'),
    ('Amazon', 'Data science intern', 'paid', '2017-06-01', '2018-08-05', 1, 'summer', 12, '456 street', 'Herndon', 'Virginia', 67.1877382, 30.73394957, TRUE, '3', 'N/A'),
    ('aylmao', 'intern', 'paid', '2019-06-01', '2019-08-05', 4, 'summer', 12, '456 street', 'Baltimore', 'Maryland', 1.123232, 23.1232453, TRUE, '4','N/A');

insert into users values 
    ('bzamojd2', 'bzamojd2@mail.umw.edu', 'password', FALSE),
    ('bob', 'bob123@mail.umw.edu', 'password2',FALSE),
    ('joe', 'joe1@mail.umw.edu', 'meme', TRUE);


