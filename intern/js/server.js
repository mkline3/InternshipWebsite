const express = require('express');
var Pool = require('pg').Pool;
var bodyParser = require('body-parser');

const app = express();

//create role on database
//has select privleges


var config = {
    host: 'localhost',
    user: 'postgres',
    password: 'password',
    database: 'internships',
};

var pool = new Pool(config);
app.set('port', (8080));
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/test', async (req, res) =>{
    //var password = req.query.password;
    //var email = req.query.email;
    try{
        var response = await pool.query('select * from reviews');
        res.json(response.rows);
    }
    catch(e){
            console.log('Error running get',e);
    }

})

app.get('/review', async (req, res) =>{
    var name = req.query.name;
    var state = req.query.state;
    var city = req.query.city;
    var pay = req.query.paid;
    var order = req.query.rate;
    if(!name){
        name = '%';
    } 
    if(!state){
        state = '%';
    }  
    if(!city){
        city = '%';
    }  
    if(!pay){
        pay = '%';
    } 
    try{ 
        if(order = "high"){
            var response = await pool.query('select * from reviews where company_name LIKE $1 and state LIKE $2 and city LIKE $3 and salary LIKE $4 ORDER BY rating DESC',[name,state,city,pay]);
            //var response = await pool.query('select * from reviews where company_name = $1', [name]);
        } else {
            var response = await pool.query('select * from reviews where company_name LIKE $1 and state LIKE $2 and city LIKE $3 and pay LIKE $4 ORDER BY rating ASC',[name,state,city,pay]);
        }

        res.json(response.rows);

    } catch(e) {
        console.log('Error running get', e);
    }


})

app.post('/newReview', async (req, res) =>{
    var company = req.body.company;
    var address = req.body.address;
    var city = req.body.city;
    var state = req.body.state;
    var country = req.body.country;

    var semester = req.body.semester;
    var weeks = req.body.dur; 
    var title = req.body.type; 
    var pay = req.body.pay;

    var rating = req.body.review;
    var comments = req.body.textbox;

    try {
        //var response = await pool.query('insert into review(company_name, job_title, salary, rating, season, duration, address, city, state, country, Other_data) values($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11)', [username, id_num]);

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
    country text,
    longitude decimal,
    lattitude decimal,
    is_approved boolean DEFAULT FALSE,
    Other_data text

    } catch(e) {
        console.log('Error running post', e);
    }

})
app.listen(app.get('port'), () => {
    console.log('Running');
})
