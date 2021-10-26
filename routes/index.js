var express = require('express');
var router = express.Router();
var XMLWriter = require('xml-writer');
fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Process POST from home page*/
router.post('/', function(req, res, next) {
  //Retrive all form element vlaues 
  var identifier = req.body.identifier;
  var sender = req.body.sender;
  
  //Call function to generate xml 
  saveXml(identifier,sender);

  //Call function to generate json
  saveJson(identifier,sender);

  //Call function to save test page view
  saveTestPage(identifier,sender);
   
  res.redirect('/test',301);
});

/* Generate and save xml alert messag data */
function saveXml(identifier,sender) {
  var output = "<alert xmlns = \"urn:oasis:names:tc:emergency:cap:1.2\">" + "\n";
  output += "  <identifier>"+identifier+"</identifier>\n";
  output += "  <sender>"+sender+"</sender>\n";
  output += "</alert>"; 
  
  fs.writeFile('public/dbs/temp.xml', output , function (err) {
    if (err) throw err;
    console.log("XML Saved");
  });
}

/* Generate and save json alert message data */
function saveJson(msgNumber,email) {
  
  var newObject = {
    identifier:msgNumber,
    sender:email
  }; 

  var output = JSON.stringify(newObject);

  fs.writeFile('public/dbs/temp.json', output , function (err) {
    if (err) throw err;
    console.log("JSON Saved");
  });
}

/* Generate and save xml alert messag data */
function saveTestPage(identifier,sender) {
  var output = "<alert xmlns = \"urn:oasis:names:tc:emergency:cap:1.2\">\n";
  output += "  <identifier>"+identifier+"</identifier>\n";
  output += "  <sender>"+sender+"</sender>\n";
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
