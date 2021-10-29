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
  var scope = req.body.scope;
  var event = req.body.event;
  var urgency = req.body.urgency;
  var certainty = req.body.certainty;
  var eventCode = req.body.eventCode;
  var desc = req.body.desc;
  var areaDesc = req.body.areaDesc;
  var geo = req.body.geo;
  
  //Call function to generate xml 
  saveXml(identifier,sender,sent,status,msgType,scope,event,urgency,certainty,eventCode,desc,areaDesc,geo);

  //Call function to generate json
  saveJson(identifier,sender,sent,status,msgType,scope,event,urgency,certainty,eventCode,desc,areaDesc,geo);

  //Call function to save test page view
  saveTestPage(identifier,sender,sent,status,msgType,scope,event,urgency,certainty,eventCode,desc,areaDesc,geo);
   
  res.redirect('/test',301);
});

/* Generate and save xml alert messag data */
function saveXml(identifier,sender,sent,status,msgType,scope,event,urgency,certainty,eventCode,desc,areaDesc,geo) {
  var output = "<alert xmlns = \"urn:oasis:names:tc:emergency:cap:1.2\">" + "\n";
  output += "  <identifier>"+identifier+"</identifier>\n";
  output += "  <sender>"+sender+"</sender>\n";
  output += "  <sent>"+sent+"</sent>\n";
  output += "  <status>"+status+"</status>\n";
  output += "  <msgType>"+msgType+"</msgType>\n";
  output += "  <scope>"+scope+"</scope>\n";
  output += "    <info>\n";
  output += "      <event>"+event+"</event>\n";
  output += "      <urgency>"+urgency+"</urgency>\n";
  output += "      <certainty>"+certainty+"</certainty>\n";
  output += "      <eventCode>\n";
  output += "        <valueName>SAME</valueName>\n";
  output += "        <value>"+eventCode+"<value>\n";
  output += "      </eventCode>\n";
  output += "      <description>"+desc+"</description>\n";
  output += "      <area>\n";
  output += "        <areaDesc>"+areaDesc+"</areaDesc>\n";
  output += "        <geocode>\n";
  output += "          <valueName>SAME</valueName>\n";
  output += "          <value>"+geo+"</value>\n";
  output += "        </geocode>\n";
  output += "      </area>\n";
  output += "    </info>\n";
  output += "</alert>"; 
  
  fs.writeFile('public/dbs/temp.xml', output , function (err) {
    if (err) throw err;
    console.log("XML Saved");
  });
}

/* Generate and save json alert message data */
function saveJson(msgNumber,email,msgTime,status,alertType,scope,event,urgency,certainty,eventCode,desc,areaDesc,geo) {
  
  var newObject = {
    identifier:msgNumber,
    sender:email,
    sent: msgTime,
    status: status,
    msgType: alertType,
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

  fs.writeFile('public/dbs/temp.json', output , function (err) {
    if (err) throw err;
    console.log("JSON Saved");
  });
}

/* Generate and save xml alert messag data */
function saveTestPage(identifier,sender,sent,status,msgType,scope,event,urgency,certainty,eventCode,desc,areaDesc,geo) {
  var output = "<alert xmlns = \"urn:oasis:names:tc:emergency:cap:1.2\">\n";
  output += "  <identifier>"+identifier+"</identifier>\n";
  output += "  <sender>"+sender+"</sender>\n";
  output += "  <sent>"+sent+"</sent>\n";
  output += "  <status>"+status+"</status>\n";
  output += "  <msgType>"+msgType+"</msgType>\n";
  output += "  <scope>"+scope+"</scope>\n";
  output += "    <info>\n";
  output += "      <event>"+event+"</event>\n";
  output += "      <urgency>"+urgency+"</urgency>\n";
  output += "      <certainty>"+certainty+"</certainty>\n";
  output += "      <eventCode>\n";
  output += "        <valueName>SAME</valueName>\n";
  output += "        <value>"+eventCode+"<value>\n";
  output += "      </eventCode>\n";
  output += "      <description>"+desc+"</description>\n";
  output += "      <area>\n";
  output += "        <areaDesc>"+areaDesc+"</areaDesc>\n";
  output += "        <geocode>\n";
  output += "          <valueName>SAME</valueName>\n";
  output += "          <value>"+geo+"</value>\n";
  output += "        </geocode>\n";
  output += "      </area>\n";
  output += "    </info>\n";
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
