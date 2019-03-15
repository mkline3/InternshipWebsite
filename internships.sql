CREATE DATABASE internships;
\c internships


CREATE TABLE Reviews (
    Review_ID serial PRIMARY KEY,
    company_name text NOT NULL,
    job_title text NOT NULL,
    salary int, 
    start_date date,
    end_date date,
    rating int,
    season text,
    duration int,
    address text NOT NULL,
    city text,
    state text,
    country text,
    Other_data text
);

CREATE TABLE Users (
	user_name text PRIMARY KEY,
	user_email text NOT NULL,
	password text NOT NULL
);

insert into Reviews values 
    (1, 'Geico', 'Software Engineer intern', '50000', '2018-06-01', '2018-08-01', 5, 'summer', 12, '123 Real street', 'Fredericksburg', 'Virginia','USA','N/A'),
    (2, 'Amazon', 'Data science intern', '55000', '2017-06-01', '2018-08-05', 1, 'summer', 12, '456 street', 'Herndon', 'Virginia', 'USA', 'N/A');