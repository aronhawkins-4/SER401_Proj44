var express = require('express');
var router = express.Router();
var XMLWriter = require('xml-writer');
fs = require('fs');


var fs = require('fs');
const { off } = require('process');
const { Console } = require('console');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
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
    var severity = req.body.severity;
    var certainty = req.body.certainty;
    var category = req.body.category;
    var eventCode = req.body.eventCode;
    var expires = req.body.expires;
    var desc = req.body.desc;
    var areaDesc = req.body.areaDesc;
    var geo = req.body.geo;
    var spanCheck = req.body.spanishExists;
    var spanAreaDesc = req.body.spanishAreaDesc;
    var spanDesc = req.body.spanishDesc;
    var numGeocodes = req.body.numGeocodes;
    var layers = req.body.layers;
    if (layers.length != 0) {
        var layersJson = JSON.parse(layers);
    }

    //Array to hold individual geocode values and used with saveXml functions 
    var geoArray = [];
    geoArray = geo.split(",");

    if (layersJson != null) {
        //Call function to generate xml 
        var xmlString = saveXml(identifier, sender, sent, status, msgType, scope, event, category, urgency, severity, certainty, eventCode, expires, desc, areaDesc, geoArray, spanCheck, spanAreaDesc, spanDesc, numGeocodes, layersJson);
        //Call function to save msg as json 
        saveJson(identifier, sender, sent, status, msgType, scope, event, category, urgency, severity, certainty, eventCode, expires, desc, areaDesc, geo, spanCheck, spanAreaDesc, spanDesc, numGeocodes, layersJson);

    } else {
        //Call function to generate xml 
        var xmlString = saveXml(identifier, sender, sent, status, msgType, scope, event, category, urgency, severity, certainty, eventCode, expires, desc, areaDesc, geoArray, spanCheck, spanAreaDesc, spanDesc, numGeocodes);
        //Call function to save msg as json 
        saveJson(identifier, sender, sent, status, msgType, scope, event, category, urgency, severity, certainty, eventCode, expires, desc, areaDesc, geo, spanCheck, spanAreaDesc, spanDesc, numGeocodes);

    }

    //Call function to save test page that displays xml string 
    saveTestPage(xmlString);

    res.redirect('/test', 301);
});

/* Generate and save xml alert messag data */
function saveXml(identifier, sender, sent, status, msgType, scope, event, category, urgency, severity, certainty, eventCode, expires, desc, areaDesc, geo, spanCheck, spanAreaDesc, spanDesc, numGeocodes, layersJson) {

    //geocodes are a 5 digit FIPS code plus a leading digit indicating no subdivision or 1/9th area sub-division 
    for (var i = 0; i < geo.length; i++) {
        geo[i] = "0" + geo[i];
    }
    // Using the username part of the email by removing the domain  
    let nameSender = sender.substring(0, sender.lastIndexOf("@")); 

    xw = new XMLWriter(true);
    xw.startDocument('1.0', 'UTF-8');
    xw.startElement('alert').writeAttribute('xmlns', 'urn:oasis:names:tc:emergency:cap:1.2');
    xw.writeElement('identifier', identifier);
    xw.writeElement('sender', sender);
    xw.writeElement('sent', sent);
    xw.writeElement('status', status);
    xw.writeElement('msgType', msgType);
    xw.writeElement('scope', scope);
    xw.writeElement('code', 'IPAWSv1.0');
    xw.startElement('info');
    xw.writeElement('language', 'en-US');
    xw.writeElement('category', category);
    xw.writeElement('event', event);
    xw.writeElement('urgency', urgency);
    xw.writeElement('severity', severity);
    xw.writeElement('certainty', certainty);
    xw.startElement('eventCode');
    xw.writeElement('valueName', 'SAME');
    xw.writeElement('value', eventCode);
    xw.endElement('eventCode');
    xw.writeElement('expires', expires);
    xw.writeElement('senderName', nameSender);
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
    if (layersJson != null) {
        for (var i = 0; i < layersJson.length; i++) {
            var coordinates = layersJson[i].coordinates.toString();            
            coordinates = coordinates.split("[").join(""); 
            coordinates = coordinates.split("],").join(" ");
            coordinates = coordinates.split("]]").join(""); 
            
            var shape = layersJson[i].type.toString().toLowerCase();

            if (shape == "circle") {
                var separateCircle = coordinates.lastIndexOf(",");
                //The radius needs to be convereted from meters to kilometers 
                var radiusMeters = parseFloat(coordinates.substring(separateCircle + 1, coordinates.length - 1));
                var radiusKm = radiusMeters * 0.001; 
                radiusKm = radiusKm.toFixed(1);
                coordinates = coordinates.substring(0,separateCircle) + " " + radiusKm;
            }

            xw.writeElement(shape, coordinates);
        }
    }
    
    for (var i = 0; i < geo.length; i++) {
        xw.startElement('geocode');
        xw.writeElement('valueName', 'SAME');
        xw.writeElement('value', geo[i]);
        xw.endElement('geocode');
    }
    
    xw.endElement('area');
    xw.endElement('info');

    if (spanCheck==="true") {

        xw.startElement('info');
        xw.writeElement('language', 'es-US');
        xw.writeElement('category', category);
        //from here down the fields still need to be posted to index JK
        xw.writeElement('event', event);
        xw.writeElement('urgency', urgency);
        xw.writeElement('severity', severity);
        xw.writeElement('certainty', certainty);
        xw.startElement('eventCode');
        xw.writeElement('valueName', 'SAME');
        xw.writeElement('value', eventCode);
        xw.endElement('eventCode');
        xw.writeElement('expires', "2007-04-22T23:55:00-08:00");
        xw.writeElement('senderName', nameSender);
        xw.writeElement('headline', 'headline goes here');
        xw.writeElement('description', spanDesc);
        xw.writeElement('instruction', 'instruction goes here');
        xw.writeElement('web', 'http://www.google.com');
        xw.startElement('parameter', 'parameter goes here');
        xw.writeElement('valueName', 'valuename goes here');
        xw.writeElement('value', 'value goes here');
        xw.endElement('parameter');
        xw.startElement('area');
        xw.writeElement('areaDesc', spanAreaDesc);
		if (layersJson != null) {
			for (var i = 0; i < layersJson.length; i++) {
                var coordinates = layersJson[i].coordinates.toString();            
                coordinates = coordinates.split("[").join(""); 
                coordinates = coordinates.split("],").join(" ");
                coordinates = coordinates.split("]]").join(""); 
                
                var shape = layersJson[i].type.toString().toLowerCase();
    
                if (shape == "circle") {
                    var separateCircle = coordinates.lastIndexOf(",");
                    //The radius needs to be convereted from meters to kilometers 
                    var radiusMeters = parseFloat(coordinates.substring(separateCircle + 1, coordinates.length - 1));
                    var radiusKm = radiusMeters * 0.001; 
                    radiusKm = radiusKm.toFixed(1);
                    coordinates = coordinates.substring(0,separateCircle) + " " + radiusKm;
                }
    
                xw.writeElement(shape, coordinates);
            }
		}
        
        for (var i = 0; i < geo.length; i++) {
            xw.startElement('geocode');
            xw.writeElement('valueName', 'SAME');
            xw.writeElement('value', geo[i]);
            xw.endElement('geocode');
        }

        xw.endElement('area');
        xw.endElement('info');

    }

    xw.endDocument();
    let xmlString = xw.toString();

    fs.writeFile('public/dbs/temp.xml', xmlString, function(err) {

        if (err) throw err;
        console.log("XML Saved");
    });

    return xmlString;
}

/* Generate and save json alert message data */
function saveJson(identifier, sender, sent, status, msgType, scope, event, category, urgency, severity, certainty, eventCode, expires, desc, areaDesc, geo, spanCheck, spanAreaDesc, spanDesc, layersJson, numGeocodes) {

    var newObject = {
        identifier: identifier,
        sender: sender,
        sent: sent,
        status: status,
        msgType: msgType,
        category: category,
        scope: scope,
        event: event,
        urgency: urgency,
        severity: severity,
        certainty: certainty,
        eventCode: eventCode,
        expires: expires,
        desc: desc,
        areaDesc: areaDesc,
        geo: geo,
        spanCheck: spanCheck,
        spanAreaDesc: spanAreaDesc,
        spanDesc: spanDesc,
        layersJson: layersJson,
        numGeocodes: numGeocodes
    };

    var output = JSON.stringify(newObject);

    fs.writeFile('public/dbs/temp.json', output, function(err) {
        if (err) throw err;
        console.log("JSON Saved");
    });

    updateLog(output);
}

/* Generate and save json alert message data */
function saveJson(identifier, sender, sent, status, msgType, scope, event, category, urgency, severity, certainty, eventCode, expires, desc, areaDesc, geo, spanCheck, spanAreaDesc, spanDesc, numGeocodes) {

    var newObject = {
        identifier: identifier,
        sender: sender,
        sent: sent,
        status: status,
        msgType: msgType,
        category: category,
        scope: scope,
        event: event,
        urgency: urgency,
        severity: severity,
        certainty: certainty,
        eventCode: eventCode,
        expires: expires,
        desc: desc,
        areaDesc: areaDesc,
        geo: geo,
        spanCheck: spanCheck,
        spanAreaDesc: spanAreaDesc,
        spanDesc: spanDesc,
        numGeocodes: numGeocodes
    };

    var output = JSON.stringify(newObject);

    fs.writeFile('public/dbs/temp.json', output, function(err) {
        if (err) throw err;
        console.log("JSON Saved");
    });

    updateLog(output);
}

/* Save current alert to the message log */
function updateLog(add) {
    
    fs.readFile('public/dbs/alertlog.json', 'utf-8', (err, jsonString) => {
        if (err) {
            console.log(err);
        } else {
            //Check if nothing has been written to the log yet
            if (jsonString.length == 0) {
                var alertArray = [];
                alertArray.push(add);

                fs.writeFile('public/dbs/alertlog.json', alertArray, 'utf-8', function(err) {
                    if (err) throw err;
                    console.log("Alert Saved to Log - New Log Started");
                });

            } else {
                //Log contains messages, retrieve and add new alert to the log 
                var alertArray = []; 
                alertArray.push(add);
                alertArray.push(jsonString);
                
                fs.writeFile('public/dbs/alertlog.json', alertArray, 'utf-8', function(err) {
                    if (err) throw err;
                    console.log("Alert Saved to Log - Log Updated");
                });
            }
        }
    }); 
}

/* Generate and save xml alert messag data */
function saveTestPage(xml) {

    fs.writeFile('views/test.html', xml, function(err) {
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