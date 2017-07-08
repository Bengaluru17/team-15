var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/welcome', function(req, res, next) {
    res.send("fasdljfo ;asjflsdj");
});

router.get('/getitems', function (req, res){
	    // Get the inventory collection
			//
			//     // Find the items
			  db.collection('inventory').findOne({}, function (err, res) {
			     if (!error && res) {
			        console.log(res);
			     }
			     else {
			        console.log(err);
			     }
			  })
		});
router.post('/additems', function (req, res) {
	  db.collection('inventory').addOne({'title':''+req.body.item}, function (err, res){
			 if(!error){
					 console.log(res);
				}
			 else if(!req){
				 res.send('no data recieved');
			 }
			 else{
				res.send(err);
			}
		})
});

	                                                                                                 
module.exports = router;
