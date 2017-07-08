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
	      db.collection('inventory').findOne({}, function (err, dat) {
			     if (!err && dat) {
			        res.send(dat);
			     }
			     else {
			        res.send(err);
			     }
			  })
		});
router.post('/additems', function (req, res) {
	  db.collection('inventory_to_approve').insertOne({'title':''+req.body.item,'flag':false}, function (err, dat){
			 if(!err){
					 res.send(dat);
				}
			 else if(!req){
				 res.send('no data recieved');
			 }
			 else{
				res.send(err);
			}
		})
});

router.get('/admin/inventory', function (req, res) {
	db.collection('inventory_to_approve').findOne({'flag':false}, function(err, dat){
		if (!err) {
			res.send(dat);
		}
	})
});

router.post('/getitems',function (req, res){
	db.collection('inventory_to_approve').findOne({'flag':true}, function(err, dat){
		if (!err && dat){
			db.collection('inventory').update({}, function(err, dat1){
				if (!err) {
					res.send(dat1);
				}
			})
		}
	})
});

router.get('/education',function (req, res){
	db.collection('academics').findOne({}, function(err, dat){
		if(!err && dat){
			res.send(dat);
		}
	})
});

router.post('/addedu',function(req, res){
	db.collection('academics').insertOne({}, function(err, dat){
		if(!err && dat){
			res.send(res);
		}
		else if(!err && !dat){
			res.send('no data input');
		}
		else{
			res.send(err);
		}
	})
});


module.exports = router;