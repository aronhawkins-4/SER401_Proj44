
var msgStatusOptSelected = "Actual";
var msgTypeOptSelected = "Alert";
var scopeCodeOptSelected = "Public";
var catagory = "Geo";
var urgency = "Unknown";
var severity = "Extreme";
var certainty = "Likely";
var event = "Some cool event";
var senderName = "Pat Sajak";
var headline = "Alphabet loses letter x";
var description = "Wheel of fortune game loses the letter x";
var instruction = "Go watch Jeopardy instead";
var web = "http://www.google.com";
var valueName = "HSAS";
var value = "Orange";

const xmlWriter = require('xml-writer');
//var ws = fs.createWriteStream('foo.xml');
var XMLWriter = require('xml-writer');
fs = require('fs');
xw = new XMLWriter(true);
xw.startDocument('1.0', 'UTF-8');
xw.startElement('alert').writeAttribute('xmlns', 'urn:oasis:names:tc:emergency:cap:1.2');
xw.writeElement('identifier','43b080713727'); // replace with identifier variable when we get test status
xw.writeElement('sender',"jkalafus@asu.edu") // replace with email variable after adding to html doc and app.js
xw.writeElement('sent', "2007-04-22T22:35:00-08:00") // Must be formatted like "2002-05-24T16:49:00-07:00".
xw.writeElement('status', msgStatusOptSelected);
xw.writeElement('msgType', msgTypeOptSelected);
xw.writeElement('scope', scopeCodeOptSelected);
xw.writeElement('code', 'IPAWSv1.0');
xw.startElement('info')
xw.writeElement('category',catagory);
xw.writeElement('event',event);
xw.writeElement('urgency',urgency);
xw.writeElement('severity',severity);
xw.writeElement('certainty',certainty);
xw.startElement('eventCode');
xw.writeElement('valueName', 'SAME');
xw.writeElement('value','CAE');
xw.endElement('eventCode');
xw.writeElement('expires',"2007-04-22T23:55:00-08:00");
xw.writeElement('senderName',senderName);
xw.writeElement('headline',headline);
xw.writeElement('description',description);
xw.writeElement('instruction',instruction);
xw.writeElement('web',web);
xw.startElement('parameter','');
xw.writeElement('valueName',valueName);
xw.writeElement('value',value);
xw.endElement('parameter');
xw.startElement('area')
xw.writeElement('areaDesc','gameshow of doom');
xw.endDocument();
let wx = "";
for (let i =0; i<xw.length;i++){
    wx += xw[i];
}
console.log(xw.toString());
console.log(xw.length);
let b = xw.toString();
fs.writeFile('cap.xml', b, function(err){
    if (err){
        return console.error(error);
    }
});
