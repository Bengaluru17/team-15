var spawn = require("child_process").spawn;


/**********************************************/
/**********************************************/
/*******Remember to change path to files*******/
/**********************************************/
/**********************************************/


//place this where you wanna show ocr to mongo
//data stored in database = students collection = data
//data converted from test1.png

var ocr =  spawn('python2', ["ocr.py"]);
ocr.stdout.pipe(process.stdout);

//for sending sms and whatsapp web
var person = "Vishal";        //person buying stuff
var item = "Chocolate";        //item being bought
var send = spawn("python2", ["send_noti.py", person, item]);
send.stdout.pipe(process.stdout);

//place this where you want to convert excel sheet and dump to mongo
//database = students collection = data
//data converted from exampleSheet.xlsx
var xls =  spawn('python2',["xlsToPy.py"])
xls.stdout.pipe(process.stdout);
