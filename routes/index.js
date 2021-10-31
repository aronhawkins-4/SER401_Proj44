var express = require('express');
var router = express.Router();
var XMLWriter = require('xml-writer');
fs = require('fs');


var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Process POST from home page*/
router.post('/', function (req, res, next) {
  //Retrive all form element vlaues 
  var identifier = req.body.identifier;
  var sender = req.body.sender;
  var sent = req.body.sent;
  var status = req.body.status;
  var msgType = req.body.msgType;
  var scope = req.body.scope;
  var event = req.body.event;
  var urgency = req.body.urgency;
  var certainty = req.body.certainty;
  var eventCode = req.body.eventCode;
  //Call function to generate xml 
  var xml = saveXml(identifier, sender, sent, status, msgType, scope, event, urgency, certainty, eventCode);
  //Call function to generate json
  saveJson(identifier, sender, sent, status, msgType, scope, event, urgency, certainty, eventCode);
  //Call function to save test page view
  saveTestPage(xml);

  res.redirect('/test', 301);
});
/* Generate and save xml alert messag data */
function saveXml(identifier, sender, sent, status, msgType, scope, event, urgency, certainty, eventCode) {
  //var output = "<alert xmlns = \"urn:oasis:names:tc:emergency:cap:1.2\">" + "\n";
  //output += "  <identifier>"+identifier+"</identifier>\n";
  // output += "  <sender>"+sender+"</sender>\n";
  // output += "</alert>"; 

  xw = new XMLWriter(true);
  xw.startDocument('1.0', 'UTF-8');
  xw.startElement('alert').writeAttribute('xmlns', 'urn:oasis:names:tc:emergency:cap:1.2');
  xw.writeElement('identifier', identifier);
  xw.writeElement('sender', sender);
  xw.writeElement('sent', sent); //Eventually this Must be formatted like "2002-05-24T16:49:00-07:00".
  xw.writeElement('status', status);
  xw.writeElement('msgType', msgType);
  xw.writeElement('scope', scope);
  xw.writeElement('code', 'IPAWSv1.0');
  xw.startElement('info');
  xw.writeElement('language', 'en-US');
  xw.writeElement('category', 'category goes here');
  //from here down the fields still need to be posted to index JK
  xw.writeElement('event', event);
  xw.writeElement('urgency', urgency);
  xw.writeElement('severity', 'severity goes here');
  xw.writeElement('certainty', certainty);
  xw.startElement('eventCode');
  xw.writeElement('valueName', 'SAME');
  xw.writeElement('value', eventCode);
  xw.endElement('eventCode');
  xw.writeElement('expires', "2007-04-22T23:55:00-08:00");
  xw.writeElement('senderName', 'sender name goes here');
  xw.writeElement('headline', 'headline goes here');
  xw.writeElement('description', 'description goes here');
  xw.writeElement('instruction', 'instruction goes here');
  xw.writeElement('web', 'http://www.google.com');
  xw.startElement('parameter', 'parameter goes here');
  xw.writeElement('valueName', 'valuename goes here');
  xw.writeElement('value', 'value goes here');
  xw.endElement('parameter');
  xw.startElement('area');
  xw.writeElement('areaDesc', 'ared description goes here');
  xw.endElement('area');
  xw.endElement('info');

  if(true){
     
    xw.startElement('info');
    xw.writeElement('language', 'es-US');
    xw.writeElement('category', 'category goes here');
    //from here down the fields still need to be posted to index JK
    xw.writeElement('event', event);
    xw.writeElement('urgency', urgency);
    xw.writeElement('severity', 'severity goes here');
    xw.writeElement('certainty', certainty);
    xw.startElement('eventCode');
    xw.writeElement('valueName', 'SAME');
    xw.writeElement('value', eventCode);
    xw.endElement('eventCode');
    xw.writeElement('expires', "2007-04-22T23:55:00-08:00");
    xw.writeElement('senderName', 'sender name goes here');
    xw.writeElement('headline', 'headline goes here');
    xw.writeElement('description', 'description goes here');
    xw.writeElement('instruction', 'instruction goes here');
    xw.writeElement('web', 'http://www.google.com');
    xw.startElement('parameter', 'parameter goes here');
    xw.writeElement('valueName', 'valuename goes here');
    xw.writeElement('value', 'value goes here');
    xw.endElement('parameter');
    xw.startElement('area');
    xw.writeElement('areaDesc', 'ared description goes here');
    xw.endElement('area');
    xw.endElement('info');
  
  }
  xw.endDocument();
  let xmlString = xw.toString();
  fs.writeFile('public/dbs/temp.xml', xmlString, function (err) {
    if (err) throw err;
    console.log("XML Saved");
  });
  fs.writeFile('views/test.html', xmlString, function (err) {
    if (err) throw err;
    console.log("Test Page Saved");
    
  });
  return xmlString;
}


/* Generate and save json alert message data */
function saveJson(msgNumber, email, msgTime, status, alertType, scope, event, urgency, certainty, eventCode) {

  var newObject = {
    identifier: msgNumber,
    sender: email,
    sent: msgTime,
    status: status,
    msgType: alertType,
    scope: scope,
    event: event,
    urgency: urgency,
    certainty: certainty,
    eventCode: eventCode
  };

  var output = JSON.stringify(newObject);

  fs.writeFile('public/dbs/temp.json', output, function (err) {
    if (err) throw err;
    console.log("JSON Saved");
  });
}

/* Generate and save xml alert messag data */
function saveTestPage(xml) {
 
  fs.writeFile('views/test.html', xml, function (err) {
    if (err) throw err;
    console.log("Test Page Saved");
  });

}

/*DEBUG TEST ROUTE */
router.get('/test', function (req, res, next) {
  res.render('test', { title: 'Test Page' });
});

/*DEBUG TEST ROUTE 2*/
router.get('/test2', function (req, res, next) {
  res.render('test2', { title: 'Test Page2' });
});

module.exports = router;
