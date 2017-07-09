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
router.get('/getapprove', function(req, res) {
    // Get the inventory collection
    //
    //     // Find the items

    db.collection('toapprove').find({}).toArray(function(err, data) {
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
    db.collection('toapprove').insertOne({

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

router.post('/setapproved', function(req, res) {
    console.log(req.body.title);
    //db.collection('toapprove').remove({ item: String(req.body.item) }, true);
    db.collection('toapprove', {}, function(err, contacts) {
        contacts.remove({ 'item': req.body.title }, 1);
    });
    db.collection('inventory').insertOne({

        name: req.body.name,
        item: req.body.title,
        amount: req.body.amount,

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

router.post('/buy', function(req, res) {
    console.log(req.body);
    db.collection('buying').insertOne({
        name: req.body.name,
        item: req.body.item,
    }, function(err, dat) {
        if (!err && dat) {
            db.collection('inventory').remove({ name: req.body.name }, 1);
            res.send({
                "status": "success"
            });
        } else {
            res.send({
                "status": "Failed"
            });
        }
    })
});


router.post('/bought', function(req, res) {
    console.log(req.body);
    if (err) {
        res.send({
            "status": "Failed"
        });
    } else {
        db.collection('buying').remove({ name: req.body.name }, 1);
    }
});

router.get('/education', function(req, res) {
    db.collection('academics').find({}).toArray({}, function(err, dat) {
        if (!err && dat) {
            res.send(dat);
        } else {
            res.send({
                "status": "Failed"
            })
        }
    })
});

router.post('/addedu', function(req, res) {
    console.log(req.body);
    db.collection('academics').insertOne({
        attendance: req.body.attendance,
        dance: req.body.dance,
        sing: req.body.sing,
        sports: req.body.sports,
    }, function(err, dat) {
        if (!err && dat) {
            res.send({
                "status": "success"
            });
        } else {
            res.send({
                "status": "Failed"
            });
        }
    })
});

module.exports = router;