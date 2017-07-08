var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(express.static('.'));
app.use(cors());
app.use(bodyParser());
var port = 5000;

loopCounter = 0;

var MongoClient = require('mongodb').MongoClient;

dbURL = "mongodb://localhost:27017/reachinghand";
//connecting to the database
MongoClient.connect(dbURL, function (err, database) {
	    if (!err) {
				 console.log("connected to inventorydb ");
				 db = database;
			}
			if(err){
				console.log("DB connection Error");
			}
});

app.get("/", function (req, res) {
	    res.sendFile(__dirname + '/home.html');
})

app.get('/getitems', function (req, res){
	  // Get the inventory collection
		 
		// Find the items
	   db.collection('inventory').findOne({}, function (error, res) {
			      if (!error && res) {
							console.log(res);
						}
			      else {
							console.log(error);
						}
				})
	 });

app.post('/additems', function (req, res) {
	


