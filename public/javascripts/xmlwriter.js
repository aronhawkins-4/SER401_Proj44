var msgStatusOptSelected = "Actual";
var msgTypeOptSelected = "Alert";
var scopeCodeOptSelected = "Public";

//var ws = fs.createWriteStream('foo.xml');
var XMLWriter = require('xml-writer');
fs = require('fs');
xw = new XMLWriter(true);
xw.startDocument('1.0', 'UTF-8');
xw.startElement('alert').writeAttribute('xmlns', 'urn:oasis:names:tc:emergency:cap:1.');
xw.writeElement('identifier','43b080713727'); // replace with identifier variable when we get test status
xw.writeElement('sender',"jkalafus@asu.edu") // replace with email variable after adding to html doc and app.js
xw.writeElement('sent', +new Date) //just here for test replace with approved date
xw.writeElement('status', msgStatusOptSelected);
xw.writeElement('msgType', msgTypeOptSelected);
xw.writeElement('scope', scopeCodeOptSelected);
xw.startElement('info'); 
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
//ws.end();