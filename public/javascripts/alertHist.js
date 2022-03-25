    var alertLog;
    var msg;
    var geocodes = [];
    var shapes;  

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

    //Retreive alert log from file and store it 
    var promise = $.get("dbs/alertlog.json", function (data) {
        alertLog = data;
    }).done(function (data) {
        //Retreive alert number from the url 
        var msgNumber = window.location.href;
        msgNumber = msgNumber.substring(msgNumber.indexOf("?") + 1,msgNumber.length); 
        
        //Parse alert log to json format 
        alertLog = JSON.stringify(alertLog);
        alertLog = JSON.parse(alertLog);
        
        //Find the index for the alert number           
        for (i = 0; i < alertLog.length; i++){
            if (alertLog[i].identifier === msgNumber) {
                msg = i;
                break; 
            }
        }

            //Populate element values and disable them so they can be read only 
            $('#identifier').prop('disabled', true);
            document.getElementById("identifier").value = alertLog[msg].identifier;
            
            $('#sender').prop('disabled', true);
            document.getElementById("sender").value = alertLog[msg].sender;
            
            $('#msgTypeDropdown').prop('disabled', true);
            document.getElementById("msgTypeDropdown").value = alertLog[msg].msgType;

            $('#status').prop('disabled', true);
            document.getElementById("status").value = alertLog[msg].status;
             
            $('#categoryDropdown').prop('disabled', true);
            document.getElementById("categoryDropdown").value = alertLog[msg].category;

            $('#alertDropdown').prop('disabled', true);
            document.getElementById("alertDropdown").value = alertLog[msg].severity;
            
            $('#certaintyDropdown').prop('disabled', true);
            document.getElementById("certaintyDropdown").value = alertLog[msg].certainty;

            $('#urgencyDropdown').prop('disabled', true);
            document.getElementById("urgencyDropdown").value = alertLog[msg].urgency;
            
            $('#eventDropdown').prop('disabled', true);
            document.getElementById("eventDropdown").value = alertLog[msg].eventCode;

            shapes = alertLog[msg].layersJson; 
            
            // CREATE MAP //
            // Var to store LeafletJS map initial settings
            var map = L.map('mapid', {
                drawControl: true
            }).setView([33.4181255, -111.9323892], 13);
            
            // LeafletJS Mapbox tile box settings (generic public access token: pk.eyJ1IjoicndhczEiLCJhIjoiY2t1aG56ejF5MmZvZTJvcWx6YjAzbHdnZiJ9.LOhy2JUgZ7VqbcoegFdr1Q)
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicndhczEiLCJhIjoiY2t1aG56ejF5MmZvZTJvcWx6YjAzbHdnZiJ9.LOhy2JUgZ7VqbcoegFdr1Q', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright ">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/ ">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'pk.eyJ1IjoicndhczEiLCJhIjoiY2t1aG56ejF5MmZvZTJvcWx6YjAzbHdnZiJ9.LOhy2JUgZ7VqbcoegFdr1Q'
            }).addTo(map);

            if (shapes != "0") {
                var shapesArray = JSON.parse(shapes);
                //alert(shapesArray[0].type);
                //alert(shapesArray[0].coordinates);
               /* 
               var testShapes = {
                    
                        "type": "FeatureCollection",
                        "features": [
                          {
                            "type": "Feature",
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [[-104.05, 48.99], [-97.22,  48.98], 
                                    [-96.58,  45.94], [-104.03, 45.94], 
                                    [-104.05, 48.99]]
                                ]
                            }
                          }, 
                          {
                            "type": "Feature",
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [[-109.05, 41.00], [-102.06, 40.99], 
                                    [-102.03, 36.99], [-109.04, 36.99], 
                                    [-109.05, 41.00]]
                                ]
                            }
                          }
                        ]
                      }
                */
                      /*
                      var testShapes = {
                            "type": "Feature",
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                    [[-104.05, 48.99], [-97.22,  48.98], 
                                    [-96.58,  45.94], [-104.03, 45.94], 
                                    [-104.05, 48.99]]
                                ]
                            }
                          }*/
                        
                          /*
                          var myobject = [];
                    
                          var testShapes = {
                            "type": "Feature",
                            "geometry": {
                                "type": shapesArray[0].type,
                                "coordinates": shapesArray[0].coordinates
                            }
                          }
               L.geoJSON(testShapes).addTo(map);
               */
            }

            //Retrieve the number of geocodes form from the comma separated values 
            if (alertLog[msg].geo.length == 5 ) {
                geocodes.push(alertLog[msg].geo)
            } else {
                let geos = alertLog[msg].geo;
                geocodes = geos.split(',');
            }
           
            $('#numCodesDropdown').prop('disabled', true);
            document.getElementById("numCodesDropdown").value = geocodes.length;
            
            $('#eventSubjFi180').prop('disabled', true);
            document.getElementById("eventSubjFi180").value = alertLog[msg].event;

            $('#eventFi180').prop('disabled', true);
            document.getElementById("eventFi180").value = alertLog[msg].areaDesc;

            $('#alertEn360').prop('disabled', true);
            document.getElementById("alertEn360").value = alertLog[msg].desc;
            
            //Check if alert contains spanish section
            if (alertLog[msg].spanCheck === "true") {
                $('#eventFi180sp').prop('disabled', true);
                document.getElementById("eventFi180sp").value = alertLog[msg].spanAreaDesc;

                $('#alertSp360').prop('disabled', true);
                document.getElementById("alertSp360").value = alertLog[msg].spanDesc;                    
            } else {  
                $('#hideSpan').hide();
            }
            
            //Populate the FIPS fields
            var promise = $.get("dbs/geocodes.json", function (data) {
                geoList = data;
            });
            promise.done(function (data) {
            geoList = JSON.stringify(geoList);
            geoList = JSON.parse(geoList);

            $(document).ready(function () {
     
                if (geocodes.length > 1) {
                    var index;
                 
                for (i = 0; i < geoList.length; i++) {
                    if (geocodes[0] === geoList[i].id) {
                        index = i;
                        break;
                    } 
                }
                //Load first FIPS element on the list 
                $('#selectid').prop('disabled', true);
                document.getElementById("selectid").value = "" + geoList[index].id + " " + geoList[index].name + 
                    " " + geoList[index].state;
             
                for (myGeos = 1; myGeos < geocodes.length; myGeos++) {
                    var jqfipsField = "#selectid" + myGeos; 
                    var fipsField = "selectid" + myGeos; 
                    var geoArea = "#geoArea" + myGeos;
                    var index; 
                     
                    for (i = 0; i < geoList.length; i++) {                                   
                        if (geocodes[myGeos] === geoList[i].id) {
                            index = i;
                            break;
                        }
                    }
                    
                    $(geoArea).show();
                    $(jqfipsField).prop('disabled', true);;
                    document.getElementById(fipsField).value = "" + geoList[index].id + " " + geoList[index].name + 
                        " " + geoList[index].state;        
                }
        } else {
            var index; 

            for (i = 0; i < geoList.length; i++) {
                if (geocodes[0] === geoList[i].id) {
                    index = i;
                    break;
                }
            }
             
                $('#selectid').prop('disabled', true);
                document.getElementById("selectid").value = "" + geoList[index].id + " " + geoList[index].name + 
                    " " + geoList[index].state;
            }
        });
    });
});



    
 

