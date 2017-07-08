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
	      db.collection('inventory').findOne({}, function (err, res) {
			     if (!err && res) {
			        res.send(res);
			     }
			     else {
			        res.send(err);
			     }
			  })
		});
router.post('/additems', function (req, res) {
	  db.collection('inventory_to_approve').addOne({'title':''+req.body.item,'flag':false}, function (err, res){
			 if(!err){
					 res.send(res);
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
	db.collection('inventory_to_approve').findOne({'flag':false}, function(err, res){
		if (!err) {
			res.send(res);
		}
	})
});

router.post('/getitems',function (req, res){
	db.collection('inventory_to_approve').findOne({'flag':true}, function(err, res){
		if (!err && res){
			db.collection('inventory').update({}, function(err, res){
				if (!err) {
					res.send(res);
				}
			})
		}
	})
});

                 
module.exports = router;