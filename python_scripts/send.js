var spawn = require("child_process").spawn;
var person = "Vishal"
var item = "Hockey"
var process =  spawn('python2',["send_noti.py",person, item])
process.stdout.pipe(process.stdout);