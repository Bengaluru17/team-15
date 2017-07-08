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
	      db.collection('inventory').find({}).toArray(function(err, data) {
        if (!err && data) {
            console.log(data);
            res.send({
                "status": "Success",
                "data": data
            });
        } else {
            res.send({
                "status": "Failed"
            });
        }
    });
});
router.post('/additems', function (req, res) {
	  console.log(req.body);
    db.collection('inventory_to_approve').insertOne({

        name: req.body.name,
        item: req.body.item,
        quantity: req.body.amount,
        amount: req.body.quantity,
        shopped: false,

    }, function(err, data) {
        if (!err) {
            res.send({"status":"success"});
        } else if (!req.body) {
            res.send('no data recieved');
        } else {
            res.send({
                "status": "Failed"
            });
        }
    })
});

router.get('/admin/inventory', function (req, res) {
	db.collection('inventory_to_approve').findOne({
		name: req.body.name,
        item: req.body.item,
        quantity: req.body.amount,
        amount: req.body.quantity,
	}, function(err, dat){
		if (!err && dat) {
			db.collection('inventory').insertOne({}, function(err, dat1){
				if (!err && dat1) {

        	

        	//check if its correct	
        	db.collection('inventory_to_approve').remove({}, 1);

            
            res.send({"status": "success"});
        } else if (!req.body) {
            res.send('no data recieved');
        } else {
            res.send({
                "status": "Failed"
            });
        }
    })
			else{
				res.send({
					"status": "Failed"
				});
				}
			}
	
		}
	})
});

//router.post('/getitems',function (req, res){
//	db.collection('inventory_to_approve').findOne({'flag':true}, function(err, dat){
//		if (!err && dat){
//			db.collection('inventory').update({}, function(err, dat1){
//				if (!err) {
//					res.send(dat1);
//				}
//			})
//		}
//	})
//});

router.get('/education',function (req, res){
	db.collection('academics').find({}).toArray({}, function(err, dat){
		if(!err && dat){
			res.send(dat);
		}
		else{
			res.send({
				"status": "Failed"
			})
		}
	})
});

router.post('/addedu',function(req, res){
	db.collection('academics').insertOne({
		attendance: req.body.attendance,
        	dance: req.body.dance,
        	sing: req.body.sing,
        	sports: req.body.sports,
	}, function(err, dat){
		if(!err && dat){
			res.send({
				"status": "success"
			});
		}
		else if(!err && !dat){
			res.send('no data input');
		}
		else{
			res.send({
				"status": "Failed"
			});
		}
	})
});

//router.post('/buy', function(req, res){
//	db.collection()
//})

module.exports = router;