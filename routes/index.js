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
  var category = req.body.category;
  var eventCode = req.body.eventCode;
  var desc = req.body.desc;
  var areaDesc = req.body.areaDesc;
  var geo = req.body.geo;
  
  //Call function to generate xml 
  saveXml(identifier,sender,sent,status,msgType,scope,event,category,urgency,certainty,eventCode,desc,areaDesc,geo);

  //Call function to save msg as json 
  saveJson(msgNumber,email,msgTime,status,alertType,category,scope,event,urgency,certainty,eventCode,desc,areaDesc,geo);


});

/* Generate and save xml alert messag data */
function saveXml(identifier,sender,sent,status,msgType,scope,event,category,urgency,certainty,eventCode,desc,areaDesc,geo) {

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
  xw.writeElement('category', category);
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
  xw.writeElement('description', desc);
  xw.writeElement('instruction', 'instruction goes here');
  xw.writeElement('web', 'http://www.google.com');
  xw.startElement('parameter', 'parameter goes here');
  xw.writeElement('valueName', 'valuename goes here');
  xw.writeElement('value', 'value goes here');
  xw.endElement('parameter');
  xw.startElement('area');
  xw.writeElement('areaDesc', areaDesc);
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

  //Call function to save the xml outpout to test page 
  saveTestPage(xmlString);

  return xmlString;
}


/* Generate and save json alert message data */
function saveJson(msgNumber,email,msgTime,status,alertType,category,scope,event,urgency,certainty,eventCode,desc,areaDesc,geo) {
  var newObject = {
    identifier: msgNumber,
    sender: email,
    sent: msgTime,
    status: status,
    msgType: alertType,
    category: category,
    scope: scope,
    event: event,
    urgency: urgency,
    certainty: certainty,
    eventCode: eventCode,
    desc: desc,
    areaDesc: areaDesc,
    geo: geo
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
