
CREATE DATABASE Internships;
\c Internships


CREATE TABLE Reviews (
    Review_ID serial PRIMARY KEY,
    company_name text NOT NULL,
    job_title text NOT NULL,
    salary int, 
    start_date date,
    end_date date,
    rating int NOT NULL,
    season text NOT NULL,
    duration int NOT NULL,
    address text NOT NULL,
    street text default NOT NULL,
    city text default NOT NULL,
    state text default NOT NULL,
    country text default NOT NULL,
    Other_data text
);

CREATE TABLE Users (
	user_name text PRIMARY KEY,
	password text NOT NULL,
);

