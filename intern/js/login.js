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
	try{
		var response = await pool.query('select * from reviews');
		res.json(response.rows);
	}
	catch(e){
			console.log('Error running get',e);
	}

})


app.listen(app.get('port'), () => {
	console.log('Running');
})

