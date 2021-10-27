//var for option selected from category dropdown list
var categoryOptSelected;

//Saves category type selected on option onchange
function categoryOpt() {

    categoryOptSelected = document.getElementById('categoryDropdown').value;

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
    
    var email = document.getElementById('sender').value;

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
            }else if(msgStatusOptSelected == undefined || msgStatusOptSelected == "Default"){
                     
                alert("You must Select a Status!");
                     
            }else if(scopeCodeOptSelected == undefined || scopeCodeOptSelected == "Default"){
                
                alert("You must Select a Scope!");
                
            } else {
            //Begin processing form 
            var today = new Date();
            var msgTime

            //Format current date time to be used in message number 
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
                        scope: scopeCodeOptSelected
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
                        scope: scopeCodeOptSelected
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
                    scope: scopeCodeOptSelected
                }; 
                
                //Send a POST request containing the form elements object  
                $.post("/", newObject, function(data,status,xhr){
                    alert("Alert Submitted");
                    $(location).attr('href','/test2');
                });
            }            
        }
    }
}
