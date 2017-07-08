var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/users/test', function(req, res, next) {
    res.send('respond with a ohhhh');
});

router.get('/users/admin', function(req, res, next) {
    res.send('respond with a ohhhh');
});

router.get('/users/panel', function(req, res, next) {
    res.send('respond with a ohhhh');
});

router.get('/users/approve', function(req, res, next) {
    res.send('respond with a ohhhh');
});



module.exports = router;