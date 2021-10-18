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

}

//var for option selected from msgStatusDropdownMenu 
var msgStatusOptSelected;

//Saves status type selected on option change
function msgStatusOpt() {
    msgStatusOptSelected = document.getElementById('msgStatusDropdown').value;
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

    eventCodeOptSelected = document.getElementById('eventCodeDropdown').value;

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

function handleClick() {
    alert("Alert Submitted");
}