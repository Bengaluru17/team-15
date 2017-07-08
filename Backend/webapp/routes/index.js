var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/welcome', function(req, res, next) {
    res.send("fasdljfo ;asjflsdj");
});

router.get('/getitems', function(req, res) {
    // Get the inventory collection
    //
    //     // Find the items

    db.collection('inventory').find({}).toArray(function(err, data) {
        if (!err && data) {
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
router.post('/additems', function(req, res) {
    console.log(req.body);
    db.collection('inventory').insertOne({

        name: req.body.name,
        item: req.body.item,
        quantity: req.body.amount,
        amount: req.body.quantity,

    }, function(err, data) {
        if (!err) {
            res.send("success");
        } else if (!req.body) {
            res.send('no data recieved');
        } else {
            res.send(err);
        }
    })
});


module.exports = router;