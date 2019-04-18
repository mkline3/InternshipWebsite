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
    ('MicroPact', 'Product Operations Intern', 'paid', '2016-05-15', '2016-06-15', 3, 'summer', 4, '12901 Worldgate Drive', 'Herndon', 'Virginia', -77.398055, 38.955738, TRUE, '$10-15', 'The work culture and management structure was excellent and coworkers were extremely helpful, but the workload itself was fairly intensive for the compensation received at the time. Would strongly recommend familiarity with both statistics and Python. '),
    ('IBM', 'Software Developer Intern', 'paid', '2017-06-03', '2017-08-15', 4, 'summer', 10, '1710 Murray Ave', 'Pittsburgh', 'Pennslyvania', -79.923080,40.437844,TRUE, '>$20', 'If you are going to work at Watson, you have to be extremely self-directed. Technologies change daily and the pace is fast. Management was fairly absent (hence the 4 rating), but the knowledge is there if you take the initiative to talk to everyone you work with. The intern hackathon is also a great time full of brilliant people. Network constantly and explore every single team every chance you get.'),
    ('SWIFT', 'Infrastructure Architect Intern', 'paid', '2018-06-04', '2018-08-10', 5, 'summer', 10, '9615 Center Point Lane', 'Manassas', 'Virginia', -77.488440, 38.753251, TRUE, '>$20', 'This particular internship position focuses on full-stack development, so be prepared to learn new technologies and/or languages. The working environment at SWIFT is "campus-style," meaning there are no cubicles and all the working spaces are open without assigned seats. SWIFT uses Agile; teams have daily stand-ups, weekly meetings, taskboards, etc. As an intern, you will participate in workshops to enhance your presentation and business communication skills. Other things to note include the 7.5-hour workdays, competitive pay, and on-site cafeteria. I would highly recommend applying to any internship at SWIFT.'),
    ('Lockheed Martin', 'College Tech Spec', 'paid', '2018-06-11', '2018-08-10', 5,'summer',9, '1 Curie Court', 'Rockville', 'Maryland', -77.179228, 39.108204, TRUE, '>$20', 'Its good pay and experience'),
    ('CACI', 'Systems Software Engineer', 'paid', '2019-01-22', '2019-12-30', 4, 'winter', 12, '16480 Commerce Drive', 'King George', 'Virginia', -77.053514, 38.346100, TRUE, '$22', 'Great work environment.');

insert into users values 
    ('bzamojd2', 'bzamojd2@mail.umw.edu', 'password', FALSE),
    ('bob', 'bob123@mail.umw.edu', 'password2',FALSE),
    ('admin', 'admin@mail.umw.edu', 'meme', TRUE);


