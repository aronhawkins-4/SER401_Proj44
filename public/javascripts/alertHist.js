
        
    var alertLog;
    var msg;
    var geocodes = [];
    var shapes = [];  

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


