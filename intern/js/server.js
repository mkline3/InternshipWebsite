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

app.get('/login', async (req, res) =>{
    var test_email = req.query.email;
    var test_password = req.query.password;

    try{
       login = await pool.query('select user_email from users where user_email = $1 and password = $2',values[test_email, test_password]);

       if(login.rows = 0){
          res.json('Wrong credentials');
       } else {
            res.json('Log in successful');
        } 
    }
    catch(e){
        console.log('Error running login', e);
    }


})

app.post('/newReview', async (req, res) =>{
    var company = req.body.comp;
    var address = req.body.address;
    var city = req.body.city;
    var state = req.body.state;

    var season = req.body.semester;
    var duration = req.body.dur; 
    var job_title = req.body.type; 
    var salary = req.body.pay;

    var rating = req.body.review;
    var Other_data = req.body.textbox;
    //var id_num = 5
    try {
        var response = await pool.query('insert into reviews(company_name, address, city, state, season, duration, job_title, salary, rating, Other_data) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)', 
            [company, address, city, state, season, duration, job_title, salary, rating, Other_data]);
        res.json("it worked");

    } catch(e) {
        console.log('Error running post', e);
    }

})

app.listen(app.get('port'), () => {
    console.log('Running');
})
