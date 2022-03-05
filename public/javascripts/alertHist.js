fs = require('fs');

var msgNumber = window.location.href;
msgNumber = msgNumber.substring(msgNumber.indexOf("?") + 1,msgNumber.length); 


/*
function retrieveLog() {

   
    fs.readFileSync('dbs/alertlog.json', 'utf-8', (err, jsonString) => {
        if (err) {
            console.log(err);
        } else {
            let tempJson = JSON.parse(jsonString);
            
            alertLog = tempJson; 
            //for (var i = 0; i < tempJson.length; i++) {
            //    alert(tempJson[i].identifier); 
                //if (tempJson[i].identifier == msgNumber) {
                //    jsonAlert = tempJson[i].identifier;
                //    break;
                //}
            //}
        }
    });
}
 */   




function pageLoad() {
    
    hideFIPS()

}

//Hides additional FIPS code fields
function hideFIPS() {

    document.getElementById('geoArea1').style.display = "none";
    document.getElementById('geoArea2').style.display = "none";
    document.getElementById('geoArea3').style.display = "none";
    document.getElementById('geoArea4').style.display = "none";
    document.getElementById('geoArea5').style.display = "none";
    document.getElementById('geoArea6').style.display = "none";
    document.getElementById('geoArea7').style.display = "none";
    document.getElementById('geoArea8').style.display = "none";
    document.getElementById('geoArea9').style.display = "none";
    document.getElementById('geoArea10').style.display = "none";
    document.getElementById('geoArea11').style.display = "none";
    document.getElementById('geoArea12').style.display = "none";
    document.getElementById('geoArea13').style.display = "none";
    document.getElementById('geoArea14').style.display = "none";
    document.getElementById('geoArea15').style.display = "none";
    document.getElementById('geoArea16').style.display = "none";
    document.getElementById('geoArea17').style.display = "none";
    document.getElementById('geoArea18').style.display = "none";
    document.getElementById('geoArea19').style.display = "none";
    document.getElementById('geoArea20').style.display = "none";
    document.getElementById('geoArea21').style.display = "none";
    document.getElementById('geoArea22').style.display = "none";
    document.getElementById('geoArea23').style.display = "none";
    document.getElementById('geoArea24').style.display = "none";
    document.getElementById('geoArea25').style.display = "none";
    document.getElementById('geoArea26').style.display = "none";
    document.getElementById('geoArea27').style.display = "none";
    document.getElementById('geoArea28').style.display = "none";
    document.getElementById('geoArea29').style.display = "none";
    document.getElementById('geoArea30').style.display = "none";

}