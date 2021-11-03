//var for option selected from category dropdown list
var categoryOptSelected;

//Saves category type selected on option onchange
function categoryOpt() {
    categoryOptSelected = document.getElementById('categoryDropdown').value;
}
//var for option selected from alert type dropdown list
var alertTypeOptSelected;

function alertTypeOpt() {
    alertTypeOptSelected = document.getElementById('alertDropdown').value;
}

//Stores Certainty Value Selected
var certaintyOptSelected;

//Gets Certainty Value Selected from Dropdown Menu on Change
function certaintyOpt(){
    
    certaintyOptSelected = document.getElementById('certaintyDropdown').value;
    
}

//var for option selected from msgType dropdown list
var msgTypeOptSelected;

//Saves message type selected on option onchange
function msgTypeOpt() {

    msgTypeOptSelected = document.getElementById('msgTypeDropdown').value;

    if (msgTypeOptSelected == "Update") {
        document.getElementById('identifier').disabled = false;
        document.getElementById('identifier').value = "";
    } else if (msgTypeOptSelected == "Cancel") {
        document.getElementById('identifier').disabled = false;
        document.getElementById('identifier').value = "";
    } else {
        document.getElementById('identifier').disabled = true;
        document.getElementById('identifier').value = "";
    } 

}

//var for option selected from msgStatusDropdownMenu 
var msgStatusOptSelected;

//Saves status type selected on option change
function msgStatusOpt() {
    msgStatusOptSelected = document.getElementById('status').value;
}

//var for option selected from urgency dropdown list
var urgencyOptSelected;

//Saves urgency selected on option onchange
function urgencyOpt() {

    urgencyOptSelected = document.getElementById('urgencyDropdown').value;

}

//var for option selected from event code dropdown list
var eventCodeOptSelected;

//Saves event code selected on option onchange
function eventCodeOpt() {

    eventCodeOptSelected = document.getElementById('eventDropdown').value;

}

//var for scope slected from alert scop dropdown list 
var scopeCodeOptSelected;

//Saves scope code selectted on option change 
function scoptOpt() {
    scopeCodeOptSelected = document.getElementById('scopeDropdown').value;

    if (scopeCodeOptSelected == "private") {
        document.getElementById('addressField').disabled = false;
    } else {
        document.getElementById('addressField').disabled = true;
    }

    if (scopeCodeOptSelected == "restricted") {
        document.getElementById('restrictionField').disabled = false;
    } else {
        document.getElementById('restrictionField').disabled = true;
    }

}

//var to capture value of include spanish alert checkbox 
var showSpanSelected;

//Displays or hides the Spanish alert fields 
function showSpan() {
    showSpanSelected = document.getElementById('spanchk').checked;

    if (showSpanSelected == true) {
        document.getElementById('hideSpan').style.display = "block";
    } else {
        document.getElementById('hideSpan').style.display = "none";
    }
}

//Disable fields when page loads 
function disableFields() {
    document.getElementById('restrictionField').disabled = true;
    document.getElementById('addressField').disabled = true;
    document.getElementById('hideSpan').style.display = "none";

}

function countWord() {

    var engCount90 = 90;
    var engCount360 = 360;
    var spanCount90 = 90;
    var spacCount360 = 360;
    var eventCount180 = 180;

    // Get the input text value
    var engChars90 = document.getElementById("alertEn90");
    var engChars360 = document.getElementById("alertEn360");
    var spanChars90 = document.getElementById("alertSp90");
    var spanChars360 = document.getElementById("alertSp360");
    var eventChars180 = document.getElementById("eventFi180");
    var eventSubjChars180 = document.getElementById("eventSubjFi180");
    var eventChars180sp = document.getElementById("eventFi180sp");
    var chars;
    var charsLeft;
    var counter;
    var alert;

    if (engChars90 === document.activeElement) {
        chars = engChars90.value.length;
        charsLeft = 90;
        counter = document.getElementById("wordsLeftEn90");
        alert = document.querySelector('#alertEn90');
    } else if (engChars360 === document.activeElement) {
        chars = engChars360.value.length;
        charsLeft = 360;
        counter = document.getElementById("wordsLeftEn360");
        alert = document.querySelector('#alertEn360');
    } else if (spanChars90 === document.activeElement) {
        chars = spanChars90.value.length;
        charsLeft = 90;
        counter = document.getElementById("wordsLeftSp90");
        alert = document.querySelector('#alertSp90');
    } else if (spanChars360 === document.activeElement) {
        chars = spanChars360.value.length;
        charsLeft = 360;
        counter = document.getElementById("wordsLeftSp360");
        alert = document.querySelector('#alertSp360');
    } else if (eventChars180 === document.activeElement) {
        chars = eventChars180.value.length;
        charsLeft = 180;
        counter = document.getElementById("wordsLeftEvent180");
        alert = document.querySelector('#eventFi180');
    } else if (eventChars180sp === document.activeElement) {
        chars = eventChars180sp.value.length;
        charsLeft = 180;
        counter = document.getElementById("wordsLeftEvent180sp");
        alert = document.querySelector('#eventFi180sp');
    } else if (eventSubjChars180 === document.activeElement) {
        chars = eventSubjChars180.value.length;
        charsLeft = 180;
        counter = document.getElementById("wordsLeftEventSubj180");
        alert = document.querySelector('#eventSubjFi180');
    }

    // Display it as output
    charsLeft = charsLeft - chars;
    counter.innerHTML = "Characters Left: " + charsLeft;
    if (charsLeft === 0) {
        counter.style.color = "red";
    } else if (charsLeft <= 20) {
        counter.style.color = "#EED202";
    } else {
        counter.style.color = "#005287";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button.button').addEventListener('click', handleClick);

});

//Perform data validation and alert submission 
function handleClick() {
    //Get Geocode from Form
    var geoCode = document.getElementById('selectid').value;
    geoCode = geoCode.substr(0,5);
    
    var email = document.getElementById('sender').value;
    
    //Get Subject Event from Form
    var event = document.getElementById('eventSubjFi180').value;
    
    //Get Spanish Area Description
    var spanArDesc = document.getElementById('eventFi180sp').value;
    
    //Get Spanish Message
    var spanDesc = document.getElementById('alertSp360').value;
    
    //Check if Spanish Message is Present
    var spanCheck = document.getElementById('spanchk').checked;

    //Get Area Description from Form
    var areaDesc = document.getElementById('eventFi180').value;
    
    //Get Message/Event Description from Form
    var desc = document.getElementById('alertEn360').value;

    //Validate the sender's email 
    if (email.length == 0) {
        alert("You must enter your email!");
    } else {
        var emailCheck = false; 
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        //Check for valid email format 
        if (email.match(validRegex)) {
            emailCheck = true;
        }

        if (emailCheck == false) {
            alert("Please enter a valid email!")
            } else if (categoryOptSelected === undefined || categoryOptSelected == "Default") {
                
                alert("You Must Enter an Alert Category!");

            } else if(msgStatusOptSelected === undefined || msgStatusOptSelected == "Default"){
                     
                alert("You Must Select a Status!");
                     
            }else if(geoCode === undefined || geoCode.length != 5 || /^\d+$/.test(geoCode) == false){
            
                alert("You Must Select a Valid Geocode!");
                      
            }else if(event === undefined || event == ''){
            
                alert("You Must Enter a Subject for Event!");
                      
            }else if(desc === undefined || desc == ''){
            
                alert("You Must Enter a Message!");
                      
            }else if(areaDesc === undefined || areaDesc == ''){
            
                alert("You Must Enter a Description for Event Area!");
                      
            }else if(certaintyOptSelected === undefined || certaintyOptSelected == "Default"){
             
                alert("You Must Select a Certainty!");
                
            } else if (alertTypeOptSelected === undefined || alertTypeOptSelected == "Default") {

                alert("You Must Select a Severity");

            } else if(urgencyOptSelected === undefined || urgencyOptSelected == "Default"){
                     
                alert("You Must Select an Urgency!");
                     
            }else if(eventCodeOptSelected === undefined || eventCodeOptSelected == "Default"){
                     
                alert("You Must Select an Event Code!");
                     
            }else if(scopeCodeOptSelected === undefined || scopeCodeOptSelected == "Default"){
                
                alert("You must Select a Scope!");
                
            }else if(spanCheck && (spanArDesc === undefined || spanArDesc == '')){
                
                alert("You must Enter a Spanish Area Description!");
                
            }else if(spanCheck && (spanDesc === undefined || spanDesc == '')){
                
                alert("You must Enter a Spanish Alert Message!");
                
            } else {

            //Begin processing form 
            var today = new Date();
            var dateTime = today.getFullYear() + "" + (today.getMonth()+1) + "" + today.getDate();
            dateTime += today.getHours() + "" + today.getMinutes() + "" + today.getSeconds() + today.getUTCMilliseconds();

            //Format current date time for message sent field 
            var msgTime = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate() + "T"; 
            msgTime +=  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "-05:00";

            // Process the Alert Type field 
            if (msgTypeOptSelected === undefined || msgTypeOptSelected == "Default") {
                alert("You must select an Alert Type");
            } else if (msgTypeOptSelected == "Update") {
                //Process an Alert Update
                var msgNumber = document.getElementById('identifier').value;
                
                //Validate the Alert Number field 
                if (msgNumber.length == 0) {
                    alert("You must include the Alert Number to send an Update!");
                } else if (msgNumber.length != 20) {
                    alert("Invalid Message Number - Check your message number and try again");
                } else {
                    //Create object from form elements values 
                    var newObject = {
                        identifier: msgNumber,
                        sender: email,
                        sent: msgTime, 
                        status: msgStatusOptSelected,
                        msgType: msgTypeOptSelected,
						scope: scopeCodeOptSelected,
                        category: categoryOptSelected,
                        event: event,
                        urgency: urgencyOptSelected,
                        severity: alertTypeOptSelected,
                        certainty: certaintyOptSelected,
                        eventCode: eventCodeOptSelected,
                        desc: desc,
                        areaDesc: areaDesc,
                        geo: geoCode,
                        spanishExists: spanCheck,
                        spanishAreaDesc: spanArDesc,
                        spanishDesc: spanDesc,
                       // coords: coordinates       
                    }; 
                    
                    //Send a POST request containing the form elements object  
                    $.post("/", newObject, function(data,status,xhr){
                        alert("Alert Submitted");
                        $(location).attr('href','/test2');
                    });
                } 
            } else if (msgTypeOptSelected == "Cancel") {
                //Process an Alert Cancellation
                var msgNumber = document.getElementById('identifier').value;
                
                //Validate the Alert Number field 
                if (msgNumber.length == 0) {
                    alert("You must include the Alert Number to send a Cancellation!");
                } else if (msgNumber.length != 20) {
                    alert("Invalid Message Number - Check your message number and try again");
                } else {
                    //Create object from form elements values 
                    var newObject = {
                        identifier: msgNumber,
                        sender: email,
                        sent: msgTime,
                        status: msgStatusOptSelected,
                        msgType: msgTypeOptSelected,
						scope: scopeCodeOptSelected,
                        category: categoryOptSelected,
                        event: event,
                        urgency: urgencyOptSelected,
                        severity: alertTypeOptSelected,
                        certainty: certaintyOptSelected,
                        eventCode: eventCodeOptSelected,
                        desc: desc,
                        areaDesc: areaDesc,
                        geo: geoCode,
                        spanishExists: spanCheck,
                        spanishAreaDesc: spanArDesc,
                        spanishDesc: spanDesc,
                       // coords: coordinates     
                    }; 
                    
                    //Send a POST request containing the form elements object  
                    $.post("/", newObject, function(data,status,xhr){
                        alert("Alert Submitted");
                        $(location).attr('href','/test2');
                    });
                } 
            } else {
                //Process a new alert 


                //****This is where we add the rest of the fields after processing (Except for cancel and update msgType**********/
            
                //Alert number composed of time and first 3 letters of sender's email 
                var msgNumber = dateTime + String(email).substring(0,3).toUpperCase();
                
                //Set the Alert Number on form 
                document.getElementById('identifier').value = msgNumber;
                                
                //Create object from form elements values 
                var newObject = {
                    identifier: msgNumber,
                    sender: email,
                    sent: msgTime, 
                    status: msgStatusOptSelected,
                    msgType: msgTypeOptSelected,
					scope: scopeCodeOptSelected,
                    category: categoryOptSelected,
                    event: event,
                    urgency: urgencyOptSelected,
                    severity: alertTypeOptSelected,
                    certainty: certaintyOptSelected,
                    eventCode: eventCodeOptSelected,
                    desc: desc,
                    areaDesc: areaDesc,
                    geo: geoCode,
                    spanishExists: spanCheck,
                    spanishAreaDesc: spanArDesc,
                    spanishDesc: spanDesc,
                    //coords: coordinates             
                }; 

                //Send a POST request containing the form elements object  
                $.post("/", newObject, function(data,status,xhr){
                    alert("Alert Submitted");
                    $(location).attr('href','/test');
                });
            }
        }
    }
}

// Variable and function to store all map vertice coordinates
var coordinates = [];

function addCoordinates(coords) {
    coordinates.push(coords);
    //console.log(coordinates);
}

function arrayEqual () {
    var A = [[10],[20]];
    var B = [[10],[20]];
    if (A === B) {
        console.log("EQUAL");
    }
    else {
       // console.log("NOPE");
    }
    for (var i = 0; i < A.length; i++) {
        for (var j = 0; j < A[i].length; j++) {
            if (A[i][j] === B[i][j]) {
                console.log("THIS ONE IS TRUE");
            }
        }
    }
}
function removeCoordinates(coords) {
    var index = -1;
    //console.log(coords);
    for (var i = 0; i < coordinates.length; i++) {
        for (var j = 0; j < coordinates[i].length; j++) {
            for (var k = 0; k < coords[j].length; k++) {
                var bool = true;
                if (coords[j][k] != coordinates[i][j][k]) {
                    bool = false;
                }
                if (bool === true) {
                    index = j;
                    console.log("true");
                    console.log(index);
                    break;
                }
            }
        }
    }
    //console.log(index);
   // coordinates.splice(index,1);
    //console.log(coordinates);
}