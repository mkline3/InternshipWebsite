const express = require('express');
var Pool = require('pg').Pool;
var bodyParser = require('body-parser');

const app = express();



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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/review', async (req, res) =>{
    var name = req.query.name;
    var state = req.query.state;
    var city = req.query.city;
    var paid = req.query.paid;
    var rate = req.query.rate;
    if( rate  === "Low to High"){
        rate = "low";
    }
    if(rate === "High to Low"){
        rate = "high";
    }
    if(name === 'All'){
        name = '%';
    } 
    if(state === 'All'){
        state = '%';
    }  
    if(city === 'All'){
        city = '%';
    }  
    if(paid === 'Any'){
        paid = '%';
    } 
    //console.log(rate);
    try{ 
        if(rate === "high"){
            var response = await pool.query('select * from reviews where company_name LIKE $1 and state LIKE $2 and city LIKE $3 and salary LIKE $4 ORDER BY rating DESC',[name,state,city,paid]);
            //var response = await pool.query('select * from reviews where company_name = $1', [name]);
        } else if(rate === "low"){
            var response = await pool.query('select * from reviews where company_name LIKE $1 and state LIKE $2 and city LIKE $3 and salary LIKE $4 ORDER BY rating ASC',[name,state,city,paid]);
        }
        else{
            var response = await pool.query('select * from reviews where company_name LIKE $1 and state LIKE $2 and city LIKE $3 and salary LIKE $4',[name,state,city,paid]);
        }

        res.json(response.rows);

    } catch(e) {
        console.log('Error running get', e);
    }


})

app.get('/login', async (req, res) =>{
    //var test_email = req.query.email;
    //var test_password = req.query.password;

    try{
       login = await pool.query('select * from users ');

          res.json(login.rows);
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
    var job_title = req.body.types; 
    var salary = req.body.pay;
    //console.log(duration);
    
    var rating = req.body.review;
    var Other_data = req.body.textbox;
    //console.log(rating);
    //var id_num = 5
    try {
        var response = await pool.query('insert into reviews(company_name, address, city, state, season, duration, job_title, salary, rating, Other_data) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)', 
            [company, address, city, state, season, duration, job_title, salary, rating, Other_data]);
        res.json("it worked");

    } catch(e) {
        console.log('Error running post', e);
    }

})

app.post("/newLog", async(req,res)=>{
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.pass;
    try {
        var response = await pool.query('insert into users(user_name, user_email, password) values($1,$2,$3)', 
            [username, email, password]);
        res.json("it worked");

    } catch(e) {
        console.log('Error running post', e);
    }
})

app.get('/comp', async (req, res) =>{

    try{
       comp = await pool.query("select DISTINCT company_name from reviews");
       res.json(comp.rows);
    }
    catch(e){
        console.log('Error running login', e);
    }
})
app.get('/title', async (req, res) =>{

    try{
       comp = await pool.query("select DISTINCT job_title from reviews");
       res.json(comp.rows);
    }
    catch(e){
        console.log('Error running login', e);
    }
})
app.get('/state', async (req, res) =>{
    var name = req.query.name;
    //console.log(name);
    try{
        if(name !=="All"){
            comp = await pool.query("select DISTINCt state from reviews where company_name like $1",[name]);
        }
        else{
            comp = await pool.query("select DISTINCt state from reviews");
        }
      res.json(comp.rows);
    }
    catch(e){
        console.log('Error running login', e);
    }
})
app.get('/city', async (req, res) =>{
    var name = req.query.name;
    var state = req.query.state
    //console.log(name);
    if(state === 'All'){
        state = '%';
    } 
    if(name === "All"){
        name = "%";
    }
    try{
        
        comp = await pool.query("select DISTINCt city from reviews where company_name like $1 and state like $2",[name,state]);
        
      res.json(comp.rows);
    }
    catch(e){
        console.log('Error running login', e);
    }
})

app.delete('/delete-user', async (req, res) => {
    var user_name = req.body.user;

    var x = await pool.query('Select user_name from users where user_name = $1', [user_name]);

    if(x.rows == 0){
        res.json("User does not exist");
    } else {
        var y = await pool.query('delete from users where user_name = $1', [user_name]);
        try {
            res.json("deleted user");
        } catch(e) {
            console.log('Error running delete' + e);
        }
    }
})

app.get('/map', async (req, res) => {
    try {
        var results = await pool.query('select longitude, lattitude, company_name, city, address, state from reviews');
        res.json(results.rows);
    }  catch(e) {
        console.log("error collecting map data", e);
    }
})

app.delete('/delete-review', async (req, res) => {


})

app.post('/approve-review', async (req, res) => {


})


app.listen(app.get('port'), () => {
    console.log('Running');
})
