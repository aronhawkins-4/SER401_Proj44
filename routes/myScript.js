function countWord() {

    var engCount90 = 90;
    var engCount360 = 360;
    var spanCount90 = 90;
    var spacCount360 = 360;

    // Get the input text value
    var engWords90 = document.getElementById("alertEn90");
    var engWords360 = document.getElementById("alertEn360");
    var spanWords90 = document.getElementById("alertSp90");
    var spanWords360 = document.getElementById("alertSp360");
    var chars;
    var charsLeft;
    var counter;
    var alert;

    if (engWords90 === document.activeElement) {
        chars = engWords90.value.length;
        charsLeft = 90;
        counter = document.getElementById("wordsLeftEn90");
        alert = document.querySelector('#alertEn90');
    } else if (engWords360 === document.activeElement) {
        chars = engWords360.value.length;
        charsLeft = 360;
        counter = document.getElementById("wordsLeftEn360");
        alert = document.querySelector('#alertEn360');
    } else if (spanWords90 === document.activeElement) {
        chars = spanWords90.value.length;
        charsLeft = 90;
        counter = document.getElementById("wordsLeftSp90");
        alert = document.querySelector('#alertSp90');
    } else if (spanWords360 === document.activeElement) {
        chars = spanWords360.value.length;
        charsLeft = 360;
        counter = document.getElementById("wordsLeftSp360");
        alert = document.querySelector('#alertSp360');
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