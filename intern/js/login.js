const express = require('express');
var dateFormat = require('dateformat');
var Pool = require('pg').Pool;
var bodyParser = require('body-parser');

const app = express();
var config = {
	host: 'localhost',
	user: 'person2',
	password: 'RqqZ(@\+Eb\GW?9P',
	database: 'internships',
};

var pool = new Pool(config);
app.set('port', (8080));
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));

