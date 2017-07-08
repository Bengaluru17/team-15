var express = require('express');
var router = express.Router();
var spawn = require("child_process").spawn;

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/sendNoti', function(req, res, next) {
    var person = "Vishal"; //person buying stuff
    var item = "Chocolate"; //item being bought
    var send = spawn("python2", ["../../python_scripts/send_noti.py", person, item]);
    send.stdout.pipe(process.stdout);
});





module.exports = router;