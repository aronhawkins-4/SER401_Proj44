var express = require('express');
var router = express.Router();


var fs = require('fs'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* Process POST from home page*/
router.post('/', function(req, res, next) {
  //Retrive all form element vlaues 
  var identifier = req.body.identifier;
  var sender = req.body.sender;
  var sent = req.body.sent;
  var status = req.body.status;
  var msgType = req.body.msgType;
  
  //Call function to generate xml 
  saveXml(identifier,sender,sent,status,msgType);

  //Call function to generate json
  saveJson(identifier,sender,sent,status,msgType);

  //Call function to save test page view
  saveTestPage(identifier,sender,sent,status,msgType);
   
  res.redirect('/test',301);
});

/* Generate and save xml alert messag data */
function saveXml(identifier,sender,sent,status,msgType) {
  var output = "<alert xmlns = \"urn:oasis:names:tc:emergency:cap:1.2\">" + "\n";
  output += "  <identifier>"+identifier+"</identifier>\n";
  output += "  <sender>"+sender+"</sender>\n";
  output += "  <sent>"+sent+"</sent>\n";
  output += "  <status>"+status+"</status>\n";
  output += "  <msgType>"+msgType+"</msgType>\n";
  output += "</alert>"; 
  
  fs.writeFile('public/dbs/temp.xml', output , function (err) {
    if (err) throw err;
    console.log("XML Saved");
  });
}

/* Generate and save json alert message data */
function saveJson(msgNumber,email,msgTime,status,alertType) {
  
  var newObject = {
    identifier:msgNumber,
    sender:email,
    sent: msgTime,
    status: status,
    msgType: alertType
  }; 

  var output = JSON.stringify(newObject);

  fs.writeFile('public/dbs/temp.json', output , function (err) {
    if (err) throw err;
    console.log("JSON Saved");
  });
}

/* Generate and save xml alert messag data */
function saveTestPage(identifier,sender,sent,status,msgType) {
  var output = "<alert xmlns = \"urn:oasis:names:tc:emergency:cap:1.2\">\n";
  output += "  <identifier>"+identifier+"</identifier>\n";
  output += "  <sender>"+sender+"</sender>\n";
  output += "  <sent>"+sent+"</sent>\n";
  output += "  <status>"+status+"</status>\n";
  output += "  <msgType>"+msgType+"</msgType>\n";
  output += "</alert>\n"; 
  
  var xmlOut = "<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n";
  xmlOut += output;

  fs.writeFile('views/test2.html', xmlOut , function (err) {
    if (err) throw err;
    console.log("Test Page Saved");
  });

}

/*DEBUG TEST ROUTE */ 
router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Test Page' });
});

/*DEBUG TEST ROUTE 2*/ 
router.get('/test2', function(req, res, next) {
  res.render('test2', { title: 'Test Page2' });
});

module.exports = router;
