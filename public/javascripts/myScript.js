//var for option selected from category dropdown list
var categoryOptSelected;

//Stores selected number of Geocodes
var numCodesSelected;

function numCodesOpt() {
    numCodesSelected = document.getElementById('numCodesDropdown').value;

    if (numCodesSelected == 1) {

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

    } else if (numCodesSelected == 2) {

        document.getElementById('geoArea1').style.display = "block";
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

    } else if (numCodesSelected == 3) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
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

    } else if (numCodesSelected == 4) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
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

    } else if (numCodesSelected == 5) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
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

    } else if (numCodesSelected == 6) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
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

    } else if (numCodesSelected == 7) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
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

    } else if (numCodesSelected == 8) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
        document.getElementById('geoArea7').style.display = "block";
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

    } else if (numCodesSelected == 9) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
        document.getElementById('geoArea7').style.display = "block";
        document.getElementById('geoArea8').style.display = "block";
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

    } else if (numCodesSelected == 10) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
        document.getElementById('geoArea7').style.display = "block";
        document.getElementById('geoArea8').style.display = "block";
        document.getElementById('geoArea9').style.display = "block";
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

    } else if (numCodesSelected == 11) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
        document.getElementById('geoArea7').style.display = "block";
        document.getElementById('geoArea8').style.display = "block";
        document.getElementById('geoArea9').style.display = "block";
        document.getElementById('geoArea10').style.display = "block";
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

    } else if (numCodesSelected == 12) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
        document.getElementById('geoArea7').style.display = "block";
        document.getElementById('geoArea8').style.display = "block";
        document.getElementById('geoArea9').style.display = "block";
        document.getElementById('geoArea10').style.display = "block";
        document.getElementById('geoArea11').style.display = "block";
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

    } else if (numCodesSelected == 13) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
        document.getElementById('geoArea7').style.display = "block";
        document.getElementById('geoArea8').style.display = "block";
        document.getElementById('geoArea9').style.display = "block";
        document.getElementById('geoArea10').style.display = "block";
        document.getElementById('geoArea11').style.display = "block";
        document.getElementById('geoArea12').style.display = "block";
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

    } else if (numCodesSelected == 14) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
        document.getElementById('geoArea7').style.display = "block";
        document.getElementById('geoArea8').style.display = "block";
        document.getElementById('geoArea9').style.display = "block";
        document.getElementById('geoArea10').style.display = "block";
        document.getElementById('geoArea11').style.display = "block";
        document.getElementById('geoArea12').style.display = "block";
        document.getElementById('geoArea13').style.display = "block";
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

    } else if (numCodesSelected == 15) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
        document.getElementById('geoArea7').style.display = "block";
        document.getElementById('geoArea8').style.display = "block";
        document.getElementById('geoArea9').style.display = "block";
        document.getElementById('geoArea10').style.display = "block";
        document.getElementById('geoArea11').style.display = "block";
        document.getElementById('geoArea12').style.display = "block";
        document.getElementById('geoArea13').style.display = "block";
        document.getElementById('geoArea14').style.display = "block";
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

    } else if (numCodesSelected == 16) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
        document.getElementById('geoArea7').style.display = "block";
        document.getElementById('geoArea8').style.display = "block";
        document.getElementById('geoArea9').style.display = "block";
        document.getElementById('geoArea10').style.display = "block";
        document.getElementById('geoArea11').style.display = "block";
        document.getElementById('geoArea12').style.display = "block";
        document.getElementById('geoArea13').style.display = "block";
        document.getElementById('geoArea14').style.display = "block";
        document.getElementById('geoArea15').style.display = "block";
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

    } else if (numCodesSelected == 17) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
        document.getElementById('geoArea7').style.display = "block";
        document.getElementById('geoArea8').style.display = "block";
        document.getElementById('geoArea9').style.display = "block";
        document.getElementById('geoArea10').style.display = "block";
        document.getElementById('geoArea11').style.display = "block";
        document.getElementById('geoArea12').style.display = "block";
        document.getElementById('geoArea13').style.display = "block";
        document.getElementById('geoArea14').style.display = "block";
        document.getElementById('geoArea15').style.display = "block";
        document.getElementById('geoArea16').style.display = "block";
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

    } else if (numCodesSelected == 18) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
        document.getElementById('geoArea7').style.display = "block";
        document.getElementById('geoArea8').style.display = "block";
        document.getElementById('geoArea9').style.display = "block";
        document.getElementById('geoArea10').style.display = "block";
        document.getElementById('geoArea11').style.display = "block";
        document.getElementById('geoArea12').style.display = "block";
        document.getElementById('geoArea13').style.display = "block";
        document.getElementById('geoArea14').style.display = "block";
        document.getElementById('geoArea15').style.display = "block";
        document.getElementById('geoArea16').style.display = "block";
        document.getElementById('geoArea17').style.display = "block";
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

    } else if (numCodesSelected == 19) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
        document.getElementById('geoArea7').style.display = "block";
        document.getElementById('geoArea8').style.display = "block";
        document.getElementById('geoArea9').style.display = "block";
        document.getElementById('geoArea10').style.display = "block";
        document.getElementById('geoArea11').style.display = "block";
        document.getElementById('geoArea12').style.display = "block";
        document.getElementById('geoArea13').style.display = "block";
        document.getElementById('geoArea14').style.display = "block";
        document.getElementById('geoArea15').style.display = "block";
        document.getElementById('geoArea16').style.display = "block";
        document.getElementById('geoArea17').style.display = "block";
        document.getElementById('geoArea18').style.display = "block";
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

    } else if (numCodesSelected == 20) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
        document.getElementById('geoArea7').style.display = "block";
        document.getElementById('geoArea8').style.display = "block";
        document.getElementById('geoArea9').style.display = "block";
        document.getElementById('geoArea10').style.display = "block";
        document.getElementById('geoArea11').style.display = "block";
        document.getElementById('geoArea12').style.display = "block";
        document.getElementById('geoArea13').style.display = "block";
        document.getElementById('geoArea14').style.display = "block";
        document.getElementById('geoArea15').style.display = "block";
        document.getElementById('geoArea16').style.display = "block";
        document.getElementById('geoArea17').style.display = "block";
        document.getElementById('geoArea18').style.display = "block";
        document.getElementById('geoArea19').style.display = "block";
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

    } else if (numCodesSelected == 21) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
        document.getElementById('geoArea7').style.display = "block";
        document.getElementById('geoArea8').style.display = "block";
        document.getElementById('geoArea9').style.display = "block";
        document.getElementById('geoArea10').style.display = "block";
        document.getElementById('geoArea11').style.display = "block";
        document.getElementById('geoArea12').style.display = "block";
        document.getElementById('geoArea13').style.display = "block";
        document.getElementById('geoArea14').style.display = "block";
        document.getElementById('geoArea15').style.display = "block";
        document.getElementById('geoArea16').style.display = "block";
        document.getElementById('geoArea17').style.display = "block";
        document.getElementById('geoArea18').style.display = "block";
        document.getElementById('geoArea19').style.display = "block";
        document.getElementById('geoArea20').style.display = "block";
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

    } else if (numCodesSelected == 22) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
        document.getElementById('geoArea7').style.display = "block";
        document.getElementById('geoArea8').style.display = "block";
        document.getElementById('geoArea9').style.display = "block";
        document.getElementById('geoArea10').style.display = "block";
        document.getElementById('geoArea11').style.display = "block";
        document.getElementById('geoArea12').style.display = "block";
        document.getElementById('geoArea13').style.display = "block";
        document.getElementById('geoArea14').style.display = "block";
        document.getElementById('geoArea15').style.display = "block";
        document.getElementById('geoArea16').style.display = "block";
        document.getElementById('geoArea17').style.display = "block";
        document.getElementById('geoArea18').style.display = "block";
        document.getElementById('geoArea19').style.display = "block";
        document.getElementById('geoArea20').style.display = "block";
        document.getElementById('geoArea21').style.display = "block";
        document.getElementById('geoArea22').style.display = "none";
        document.getElementById('geoArea23').style.display = "none";
        document.getElementById('geoArea24').style.display = "none";
        document.getElementById('geoArea25').style.display = "none";
        document.getElementById('geoArea26').style.display = "none";
        document.getElementById('geoArea27').style.display = "none";
        document.getElementById('geoArea28').style.display = "none";
        document.getElementById('geoArea29').style.display = "none";
        document.getElementById('geoArea30').style.display = "none";

    } else if (numCodesSelected == 23) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
        document.getElementById('geoArea7').style.display = "block";
        document.getElementById('geoArea8').style.display = "block";
        document.getElementById('geoArea9').style.display = "block";
        document.getElementById('geoArea10').style.display = "block";
        document.getElementById('geoArea11').style.display = "block";
        document.getElementById('geoArea12').style.display = "block";
        document.getElementById('geoArea13').style.display = "block";
        document.getElementById('geoArea14').style.display = "block";
        document.getElementById('geoArea15').style.display = "block";
        document.getElementById('geoArea16').style.display = "block";
        document.getElementById('geoArea17').style.display = "block";
        document.getElementById('geoArea18').style.display = "block";
        document.getElementById('geoArea19').style.display = "block";
        document.getElementById('geoArea20').style.display = "block";
        document.getElementById('geoArea21').style.display = "block";
        document.getElementById('geoArea22').style.display = "block";
        document.getElementById('geoArea23').style.display = "none";
        document.getElementById('geoArea24').style.display = "none";
        document.getElementById('geoArea25').style.display = "none";
        document.getElementById('geoArea26').style.display = "none";
        document.getElementById('geoArea27').style.display = "none";
        document.getElementById('geoArea28').style.display = "none";
        document.getElementById('geoArea29').style.display = "none";
        document.getElementById('geoArea30').style.display = "none";

    } else if (numCodesSelected == 24) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
        document.getElementById('geoArea7').style.display = "block";
        document.getElementById('geoArea8').style.display = "block";
        document.getElementById('geoArea9').style.display = "block";
        document.getElementById('geoArea10').style.display = "block";
        document.getElementById('geoArea11').style.display = "block";
        document.getElementById('geoArea12').style.display = "block";
        document.getElementById('geoArea13').style.display = "block";
        document.getElementById('geoArea14').style.display = "block";
        document.getElementById('geoArea15').style.display = "block";
        document.getElementById('geoArea16').style.display = "block";
        document.getElementById('geoArea17').style.display = "block";
        document.getElementById('geoArea18').style.display = "block";
        document.getElementById('geoArea19').style.display = "block";
        document.getElementById('geoArea20').style.display = "block";
        document.getElementById('geoArea21').style.display = "block";
        document.getElementById('geoArea22').style.display = "block";
        document.getElementById('geoArea23').style.display = "block";
        document.getElementById('geoArea24').style.display = "none";
        document.getElementById('geoArea25').style.display = "none";
        document.getElementById('geoArea26').style.display = "none";
        document.getElementById('geoArea27').style.display = "none";
        document.getElementById('geoArea28').style.display = "none";
        document.getElementById('geoArea29').style.display = "none";
        document.getElementById('geoArea30').style.display = "none";

    } else if (numCodesSelected == 25) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
        document.getElementById('geoArea7').style.display = "block";
        document.getElementById('geoArea8').style.display = "block";
        document.getElementById('geoArea9').style.display = "block";
        document.getElementById('geoArea10').style.display = "block";
        document.getElementById('geoArea11').style.display = "block";
        document.getElementById('geoArea12').style.display = "block";
        document.getElementById('geoArea13').style.display = "block";
        document.getElementById('geoArea14').style.display = "block";
        document.getElementById('geoArea15').style.display = "block";
        document.getElementById('geoArea16').style.display = "block";
        document.getElementById('geoArea17').style.display = "block";
        document.getElementById('geoArea18').style.display = "block";
        document.getElementById('geoArea19').style.display = "block";
        document.getElementById('geoArea20').style.display = "block";
        document.getElementById('geoArea21').style.display = "block";
        document.getElementById('geoArea22').style.display = "block";
        document.getElementById('geoArea23').style.display = "block";
        document.getElementById('geoArea24').style.display = "block";
        document.getElementById('geoArea25').style.display = "none";
        document.getElementById('geoArea26').style.display = "none";
        document.getElementById('geoArea27').style.display = "none";
        document.getElementById('geoArea28').style.display = "none";
        document.getElementById('geoArea29').style.display = "none";
        document.getElementById('geoArea30').style.display = "none";

    } else if (numCodesSelected == 26) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
        document.getElementById('geoArea7').style.display = "block";
        document.getElementById('geoArea8').style.display = "block";
        document.getElementById('geoArea9').style.display = "block";
        document.getElementById('geoArea10').style.display = "block";
        document.getElementById('geoArea11').style.display = "block";
        document.getElementById('geoArea12').style.display = "block";
        document.getElementById('geoArea13').style.display = "block";
        document.getElementById('geoArea14').style.display = "block";
        document.getElementById('geoArea15').style.display = "block";
        document.getElementById('geoArea16').style.display = "block";
        document.getElementById('geoArea17').style.display = "block";
        document.getElementById('geoArea18').style.display = "block";
        document.getElementById('geoArea19').style.display = "block";
        document.getElementById('geoArea20').style.display = "block";
        document.getElementById('geoArea21').style.display = "block";
        document.getElementById('geoArea22').style.display = "block";
        document.getElementById('geoArea23').style.display = "block";
        document.getElementById('geoArea24').style.display = "block";
        document.getElementById('geoArea25').style.display = "block";
        document.getElementById('geoArea26').style.display = "none";
        document.getElementById('geoArea27').style.display = "none";
        document.getElementById('geoArea28').style.display = "none";
        document.getElementById('geoArea29').style.display = "none";
        document.getElementById('geoArea30').style.display = "none";

    } else if (numCodesSelected == 27) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
        document.getElementById('geoArea7').style.display = "block";
        document.getElementById('geoArea8').style.display = "block";
        document.getElementById('geoArea9').style.display = "block";
        document.getElementById('geoArea10').style.display = "block";
        document.getElementById('geoArea11').style.display = "block";
        document.getElementById('geoArea12').style.display = "block";
        document.getElementById('geoArea13').style.display = "block";
        document.getElementById('geoArea14').style.display = "block";
        document.getElementById('geoArea15').style.display = "block";
        document.getElementById('geoArea16').style.display = "block";
        document.getElementById('geoArea17').style.display = "block";
        document.getElementById('geoArea18').style.display = "block";
        document.getElementById('geoArea19').style.display = "block";
        document.getElementById('geoArea20').style.display = "block";
        document.getElementById('geoArea21').style.display = "block";
        document.getElementById('geoArea22').style.display = "block";
        document.getElementById('geoArea23').style.display = "block";
        document.getElementById('geoArea24').style.display = "block";
        document.getElementById('geoArea25').style.display = "block";
        document.getElementById('geoArea26').style.display = "block";
        document.getElementById('geoArea27').style.display = "none";
        document.getElementById('geoArea28').style.display = "none";
        document.getElementById('geoArea29').style.display = "none";
        document.getElementById('geoArea30').style.display = "none";

    } else if (numCodesSelected == 28) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
        document.getElementById('geoArea7').style.display = "block";
        document.getElementById('geoArea8').style.display = "block";
        document.getElementById('geoArea9').style.display = "block";
        document.getElementById('geoArea10').style.display = "block";
        document.getElementById('geoArea11').style.display = "block";
        document.getElementById('geoArea12').style.display = "block";
        document.getElementById('geoArea13').style.display = "block";
        document.getElementById('geoArea14').style.display = "block";
        document.getElementById('geoArea15').style.display = "block";
        document.getElementById('geoArea16').style.display = "block";
        document.getElementById('geoArea17').style.display = "block";
        document.getElementById('geoArea18').style.display = "block";
        document.getElementById('geoArea19').style.display = "block";
        document.getElementById('geoArea20').style.display = "block";
        document.getElementById('geoArea21').style.display = "block";
        document.getElementById('geoArea22').style.display = "block";
        document.getElementById('geoArea23').style.display = "block";
        document.getElementById('geoArea24').style.display = "block";
        document.getElementById('geoArea25').style.display = "block";
        document.getElementById('geoArea26').style.display = "block";
        document.getElementById('geoArea27').style.display = "block";
        document.getElementById('geoArea28').style.display = "none";
        document.getElementById('geoArea29').style.display = "none";
        document.getElementById('geoArea30').style.display = "none";

    } else if (numCodesSelected == 29) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
        document.getElementById('geoArea7').style.display = "block";
        document.getElementById('geoArea8').style.display = "block";
        document.getElementById('geoArea9').style.display = "block";
        document.getElementById('geoArea10').style.display = "block";
        document.getElementById('geoArea11').style.display = "block";
        document.getElementById('geoArea12').style.display = "block";
        document.getElementById('geoArea13').style.display = "block";
        document.getElementById('geoArea14').style.display = "block";
        document.getElementById('geoArea15').style.display = "block";
        document.getElementById('geoArea16').style.display = "block";
        document.getElementById('geoArea17').style.display = "block";
        document.getElementById('geoArea18').style.display = "block";
        document.getElementById('geoArea19').style.display = "block";
        document.getElementById('geoArea20').style.display = "block";
        document.getElementById('geoArea21').style.display = "block";
        document.getElementById('geoArea22').style.display = "block";
        document.getElementById('geoArea23').style.display = "block";
        document.getElementById('geoArea24').style.display = "block";
        document.getElementById('geoArea25').style.display = "block";
        document.getElementById('geoArea26').style.display = "block";
        document.getElementById('geoArea27').style.display = "block";
        document.getElementById('geoArea28').style.display = "block";
        document.getElementById('geoArea29').style.display = "none";
        document.getElementById('geoArea30').style.display = "none";

    } else if (numCodesSelected == 30) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
        document.getElementById('geoArea7').style.display = "block";
        document.getElementById('geoArea8').style.display = "block";
        document.getElementById('geoArea9').style.display = "block";
        document.getElementById('geoArea10').style.display = "block";
        document.getElementById('geoArea11').style.display = "block";
        document.getElementById('geoArea12').style.display = "block";
        document.getElementById('geoArea13').style.display = "block";
        document.getElementById('geoArea14').style.display = "block";
        document.getElementById('geoArea15').style.display = "block";
        document.getElementById('geoArea16').style.display = "block";
        document.getElementById('geoArea17').style.display = "block";
        document.getElementById('geoArea18').style.display = "block";
        document.getElementById('geoArea19').style.display = "block";
        document.getElementById('geoArea20').style.display = "block";
        document.getElementById('geoArea21').style.display = "block";
        document.getElementById('geoArea22').style.display = "block";
        document.getElementById('geoArea23').style.display = "block";
        document.getElementById('geoArea24').style.display = "block";
        document.getElementById('geoArea25').style.display = "block";
        document.getElementById('geoArea26').style.display = "block";
        document.getElementById('geoArea27').style.display = "block";
        document.getElementById('geoArea28').style.display = "block";
        document.getElementById('geoArea29').style.display = "block";
        document.getElementById('geoArea30').style.display = "none";

    } else if (numCodesSelected == 31) {

        document.getElementById('geoArea1').style.display = "block";
        document.getElementById('geoArea2').style.display = "block";
        document.getElementById('geoArea3').style.display = "block";
        document.getElementById('geoArea4').style.display = "block";
        document.getElementById('geoArea5').style.display = "block";
        document.getElementById('geoArea6').style.display = "block";
        document.getElementById('geoArea7').style.display = "block";
        document.getElementById('geoArea8').style.display = "block";
        document.getElementById('geoArea9').style.display = "block";
        document.getElementById('geoArea10').style.display = "block";
        document.getElementById('geoArea11').style.display = "block";
        document.getElementById('geoArea12').style.display = "block";
        document.getElementById('geoArea13').style.display = "block";
        document.getElementById('geoArea14').style.display = "block";
        document.getElementById('geoArea15').style.display = "block";
        document.getElementById('geoArea16').style.display = "block";
        document.getElementById('geoArea17').style.display = "block";
        document.getElementById('geoArea18').style.display = "block";
        document.getElementById('geoArea19').style.display = "block";
        document.getElementById('geoArea20').style.display = "block";
        document.getElementById('geoArea21').style.display = "block";
        document.getElementById('geoArea22').style.display = "block";
        document.getElementById('geoArea23').style.display = "block";
        document.getElementById('geoArea24').style.display = "block";
        document.getElementById('geoArea25').style.display = "block";
        document.getElementById('geoArea26').style.display = "block";
        document.getElementById('geoArea27').style.display = "block";
        document.getElementById('geoArea28').style.display = "block";
        document.getElementById('geoArea29').style.display = "block";
        document.getElementById('geoArea30').style.display = "block";

    }
}

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
function certaintyOpt() {

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

//var for scope slected from alert scop dropdown list 
var scopeCodeOptSelected = "Public";

////Saves scope code selectted on option change 
//function scoptOpt() {
//    scopeCodeOptSelected = "Public";
//
//    if (scopeCodeOptSelected == "Private") {
//        document.getElementById('addressField').disabled = false;
//    } else {
//        document.getElementById('addressField').disabled = true;
//    }
//
//    if (scopeCodeOptSelected == "Restricted") {
//        document.getElementById('restrictionField').disabled = false;
//    } else {
//        document.getElementById('restrictionField').disabled = true;
//    }
//
//}

//Calls functions on page body load
function pageLoad() {

    disableFields();
    hideFIPS();

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

//Disable fields when page loads 
function disableFields() {
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
    document.querySelector('#modal-submit-button').addEventListener('click', handleClick);

});

//Perform data validation and alert submission 
function handleClick() {

    var testString = "hello";
    var tempGeocode = "";
    var tempSelectID = "";
    var tempIndex = "";
    var geocodesValid = true;
    var fipsValid = true;

    //Get Geocode from Form
    var geoCode = document.getElementById('selectid').value;

    geoCode = geoCode.substr(0, 5);

    //Parse geoCode to be used for number range validation 
    var geoNumber = parseInt(geoCode);

    if (geoCode === undefined || geoCode.length != 5 || /^\d+$/.test(geoCode) == false) {

        geocodesValid = false;

    }

    if ((geoNumber < 0000 || geoNumber > 56045) || (geoNumber >= 1 && geoNumber <= 999)) {

        fipsValid = false;

    }

    for (var i = 1; i < 31; i++) {

        if (numCodesSelected > i) {

            tempIndex = i.toString();

            tempSelectID = "selectid" + tempIndex;

            tempGeocode = document.getElementById(tempSelectID).value;

            tempGeocode = tempGeocode.substr(0, 5);

            geoNumber = parseInt(tempGeocode);

            if (tempGeocode === undefined || tempGeocode.length != 5 || /^\d+$/.test(tempGeocode) == false) {

                geocodesValid = false;

            }

            if ((geoNumber < 0000 || geoNumber > 56045) || (geoNumber >= 1 && geoNumber <= 999)) {

                fipsValid = false;

            }

            geoCode = geoCode + "," + tempGeocode;

        }

    }

    //Retrieves Values from Form
    var categoryOptSelected = document.getElementById('categoryDropdown').value;
    var alertTypeOptSelected = document.getElementById('alertDropdown').value;
    var certaintyOptSelected = document.getElementById('certaintyDropdown').value;
    var eventCodeOptSelected = document.getElementById('eventDropdown').value;
    var msgStatusOptSelected = document.getElementById('status').value;
    var urgencyOptSelected = document.getElementById('urgencyDropdown').value;

    //Get Sender Email from Form
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

        } else if (msgStatusOptSelected === undefined || msgStatusOptSelected == "Default") {

            alert("You Must Select a Status!");

        } else if (geocodesValid == false) {

            alert("You Must Select a Valid Geocode for all Geocode Fields!");

        } else if (fipsValid == false) {

            alert("FIPS Value Not In The List. You Must Select a Valid Geocode for All Fields!");

        } else if (fipsValid == false) {

            alert("FIPS Value Not In The List. You Must Select a Valid Geocode for All Fields!");

        } else if (event === undefined || event == '') {

            alert("You Must Enter a Subject for Event!");

        } else if (desc === undefined || desc == '') {

            alert("You Must Enter a Message!");

        } else if (areaDesc === undefined || areaDesc == '') {

            alert("You Must Enter a Description for Event Area!");

        } else if (certaintyOptSelected === undefined || certaintyOptSelected == "Default") {

            alert("You Must Select a Certainty!");

        } else if (alertTypeOptSelected === undefined || alertTypeOptSelected == "Default") {

            alert("You Must Select a Severity");

        } else if (urgencyOptSelected === undefined || urgencyOptSelected == "Default") {

            alert("You Must Select an Urgency!");

        } else if (eventCodeOptSelected === undefined || eventCodeOptSelected == "Default") {

            alert("You Must Select an Event Code!");

        } else if (spanCheck && (spanArDesc === undefined || spanArDesc == '')) {

            alert("You must Enter a Spanish Area Description!");

        } else if (spanCheck && (spanDesc === undefined || spanDesc == '')) {

            alert("You must Enter a Spanish Alert Message!");

        } else {
            //Begin processing form

            //Retrieve current date to be used with message number and expiration 
            var today = new Date();

            // Change date format so that single digit dates and time gets zero in from of them - JK
            var year = today.getFullYear()
            var msgTime = year + "-";
            var month = (today.getMonth() + 1);
            var date = today.getDate();
            var hours = today.getHours();
            var minutues = today.getMinutes();
            var seconds = today.getSeconds();
            // We can't "plug in" the UTC offeset because it is based on location
            var offset = today.getTimezoneOffset() / 60;
            //correct for single digit month
            if (month < 10) {
                msgTime += "0" + month + "-";
            } else msgTime += month + "-";
            //correct for single digit day
            if (date < 10) {
                msgTime += "0" + date + "T";
            } else msgTime += date + "T";
            //Correct for single digit hour
            if (hours < 10) {
                msgTime += "0" + hours + ":";
            } else msgTime += hours + ":";
            //Correct for single digit minute
            if (minutues < 10) {
                msgTime += "0" + minutues + ":";
            } else msgTime += minutues + ":";
            //Correct for single digit seconds
            if (seconds < 10) {
                msgTime += "0" + seconds + "-";
            } else msgTime += seconds + "-";
            //Correct for single digit offset
            if (offset < 10) {
                msgTime += "0" + offset + ":00";
            } else msgTime += offset + ":00";

            //set expiresTime to 24 hours after msgTime
            //first account for december 31st
            var expiresTime = "";
            if (date == 31 & month == 12) {
                year++;
                expiresTime += year + "-01-01T";
                if (hours < 10) {
                    expiresTime += "0" + hours + ":";
                } else expiresTime += hours + ":";
                //Correct for single digit minute
                if (minutues < 10) {
                    expiresTime += "0" + minutues + ":";
                } else expiresTime += minutues + ":";
                //Correct for single digit seconds
                if (seconds < 10) {
                    expiresTime += "0" + seconds + "-";
                } else expiresTime += seconds + "-";
                //Correct for single digit offset
                if (offset < 10) {
                    expiresTime += "0" + offset + ":00";
                } else expiresTime += offset + ":00";
            }
            //next account for february 29th leap year
            else if (date == 29 && month == 2) {
                expiresTime += year + "-03" + "-01T";
                //Correct for single digit hours
                if (hours < 10) {
                    expiresTime += "0" + hours + ":";
                } else expiresTime += hours + ":";
                //Correct for single digit minute
                if (minutues < 10) {
                    expiresTime += "0" + minutues + ":";
                } else expiresTime += minutues + ":";
                //Correct for single digit seconds
                if (seconds < 10) {
                    expiresTime += "0" + seconds + "-";
                } else expiresTime += seconds + "-";
                //Correct for single digit offset
                if (offset < 10) {
                    expiresTime += "0" + offset + ":00";
                } else expiresTime += offset + ":00";
            }
            //next account for febuary 28th
            else if (date == 28 && month == 2) {
                var isLeapYear = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
                if (isLeapYear) {
                    expiresTime += year + "-02-29T";
                    //Correct for single digit hours
                    if (hours < 10) {
                        expiresTime += "0" + hours + ":";
                    } else expiresTime += hours + ":";
                    //Correct for single digit minute
                    if (minutues < 10) {
                        expiresTime += "0" + minutues + ":";
                    } else expiresTime += minutues + ":";
                    //Correct for single digit seconds
                    if (seconds < 10) {
                        expiresTime += "0" + seconds + "-";
                    } else expiresTime += seconds + "-";
                    //Correct for single digit offset
                    if (offset < 10) {
                        expiresTime += "0" + offset + ":00";
                    } else expiresTime += offset + ":00";
                } else {
                    expiresTime += year + "-03-01T";
                    if (hours < 10) {
                        expiresTime += "0" + hours + ":";
                    } else expiresTime += hours + ":";
                    //Correct for single digit minute
                    if (minutues < 10) {
                        expiresTime += "0" + minutues + ":";
                    } else expiresTime += minutues + ":";
                    //Correct for single digit seconds
                    if (seconds < 10) {
                        expiresTime += "0" + seconds + "-";
                    } else expiresTime += seconds + "-";
                    //Correct for single digit offset
                    if (offset < 10) {
                        expiresTime += "0" + offset + ":00";
                    } else expiresTime += offset + ":00";
                }
            }
            //acount for months with 30 days
            else if (date == 30 && (month == 04 || month == 06 || month == 09 || month == 11)) {
                month++;
                expiresTime += year + "-";
                if (month < 10) {
                    expiresTime += "0" + month + "-";
                } else expiresTime += month + "-";
                expiresTime += "01T";
                if (hours < 10) {
                    expiresTime += "0" + hours + ":";
                } else expiresTime += hours + ":";
                //Correct for single digit minute
                if (minutues < 10) {
                    expiresTime += "0" + minutues + ":";
                } else expiresTime += minutues + ":";
                //Correct for single digit seconds
                if (seconds < 10) {
                    expiresTime += "0" + seconds + "-";
                } else expiresTime += seconds + "-";
                //Correct for single digit offset
                if (offset < 10) {
                    expiresTime += "0" + offset + ":00";
                } else expiresTime += offset + ":00";
            }
            //acount for other months with 31 days
            else if (date == 31) {
                month++;
                expiresTime += year + "-";
                //Correct for single digit month
                if (month < 10) {
                    expiresTime += "0" + month + "-";
                } else expiresTime += month + "-";
                expiresTime += "01T";
                //Correct for single digit hours
                if (hours < 10) {
                    expiresTime += "0" + hours + ":";
                } else expiresTime += hours + ":";
                //Correct for single digit minute
                if (minutues < 10) {
                    expiresTime += "0" + minutues + ":";
                } else expiresTime += minutues + ":";
                //Correct for single digit seconds
                if (seconds < 10) {
                    expiresTime += "0" + seconds + "-";
                } else expiresTime += seconds + "-";
                //Correct for single digit offset
                if (offset < 10) {
                    expiresTime += "0" + offset + ":00";
                } else expiresTime += offset + ":00";
            }
            //finally if none of the above incriment date by 1
            else {
                date++;
                expiresTime += year + "-";
                //Corect for single digit month
                if (month < 10) {
                    expiresTime += "0" + month + "-";
                } else expiresTime += month + "-";
                //correct for single digit day
                if (date < 10) {
                    expiresTime += "0" + date + "T";
                } else expiresTime += date + "T";
                //Correct for single digit hours
                if (hours < 10) {
                    expiresTime += "0" + hours + ":";
                } else expiresTime += hours + ":";
                //Correct for single digit minute
                if (minutues < 10) {
                    expiresTime += "0" + minutues + ":";
                } else expiresTime += minutues + ":";
                //Correct for single digit seconds
                if (seconds < 10) {
                    expiresTime += "0" + seconds + "-";
                } else expiresTime += seconds + "-";
                //Correct for single digit offset
                if (offset < 10) {
                    expiresTime += "0" + offset + ":00";
                } else expiresTime += offset + ":00";

            }
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
                        expires: expiresTime,
                        desc: desc,
                        areaDesc: areaDesc,
                        geo: geoCode,
                        spanishExists: spanCheck,
                        spanishAreaDesc: spanArDesc,
                        spanishDesc: spanDesc,
                        layers: shapes,
                        numGeocodes: numCodesSelected

                    };

                    //Send a POST request containing the form elements object  
                    $.post("/", newObject, function(data, status, xhr) {
                        alert("Alert Submitted");
                        $(location).attr('href', '/test2');
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
                        expires: expiresTime,
                        desc: desc,
                        areaDesc: areaDesc,
                        geo: geoCode,
                        spanishExists: spanCheck,
                        spanishAreaDesc: spanArDesc,
                        spanishDesc: spanDesc,
                        layers: shapes,
                        numGeocodes: numCodesSelected

                    };

                    //Send a POST request containing the form elements object  
                    $.post("/", newObject, function(data, status, xhr) {
                        alert("Alert Submitted");
                        $(location).attr('href', '/test2');
                    });
                }
            } else {
                //Process a new alert 
                
                //Retrieve time/day elements 
                var msgYear = today.getFullYear();
                var msgMonth = today.getMonth() + 1;
                var msgDay = today.getDate();
                var msgHour = today.getHours();
                var msgMinute = today.getMinutes();
                var msgSecond = today.getSeconds();
                var msgMilliSeconds = today.getUTCMilliseconds(); 

                //Format month string in ## format 
                var monthStr = ""; 
                if (msgMonth < 10) {
                    monthStr = "0" + msgMonth; 
                } else {
                    monthStr += msgMonth;  
                }
                //Format day string in ## format 
                var dayStr = "";
                if (msgDay < 10) {
                    dayStr = "0" + msgDay;
                } else {
                    dayStr += msgDay; 
                }
                //Format hour string in ## format 
                var hourStr = "";
                if (msgHour < 10) {
                    hourStr = "0" + msgHour;
                } else {
                    hourStr += msgHour;
                }
                //Format minutes string in ## format 
                var minuteStr = "";
                if (msgMinute < 10) {
                    minuteStr = "0" + msgMinute; 
                } else {
                    minuteStr += msgMinute; 
                }
                //Format seconds string in ## format 
                var secondStr = "";
                if (msgSecond < 10) {
                    secondStr = "0" + msgSecond;
                } else {
                    secondStr += msgSecond; 
                }
                //Format milliseconds in ### format 
                var milliStr = "";
                if (msgMilliSeconds  > 10 && msgMilliSeconds < 100) {
                    milliStr = "0" + msgMilliSeconds; 
                } else if (msgMilliSeconds < 10) {
                    milliStr = "00" + msgMilliSeconds;
                } else {
                    milliStr += msgMilliSeconds; 
                }

                //Alert number composed of time and first 3 letters of sender's email 
                var msgNumber = msgYear + monthStr + dayStr + hourStr + minuteStr + secondStr 
                    + milliStr + String(email).substring(0, 3).toUpperCase();

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
                    expires: expiresTime,
                    desc: desc,
                    areaDesc: areaDesc,
                    geo: geoCode,
                    spanishExists: spanCheck,
                    spanishAreaDesc: spanArDesc,
                    spanishDesc: spanDesc,
                    layers: shapes,
                    numGeocodes: numCodesSelected

                };

                //Send a POST request containing the form elements object  
                $.post("/", newObject, function(data, status, xhr) {
                    alert("Alert Submitted");
                    $(location).attr('href', '/test');
                });
            }
        }
    }
}

// Variable and function to store all map shape information
var shapes = "";
var shapesNum = 0

function addShape(shape) {
    var json;
    if (shape.geometry.type === "Point") {
        if (shapesNum > 0) {
            shapes = shapes.slice(0, -1);
            json = ',{"type": "circle", "coordinates": "[' + shape.geometry.coordinates + ',' + shape.properties.radius + ']"}]';
        } else {
            json = '[{"type": "circle", "coordinates": "[' + shape.geometry.coordinates + ',' + shape.properties.radius + ']"}]';
        }
    } else if (shape.geometry.type === "Polygon") {
        if (shapesNum > 0) {
            shapes = shapes.slice(0, -1);
            json = ',{"type": "polygon", "coordinates": "[';
        } else {
            json = '[{"type": "polygon", "coordinates": "[';
        }
        for (var i = 0; i < shape.geometry.coordinates[0].length; i++) {
            if (i === shape.geometry.coordinates[0].length - 1) {
                json += '[' + shape.geometry.coordinates[0][i] + ']]"}]';
            } else {
                json += '[' + shape.geometry.coordinates[0][i] + '],';
            }
        }
    }
    shapesNum++;
    shapes += json;
}

function deleteShape(shape) {
    var temp;
    console.log(shape.geometry.type);
    if (shape.geometry.type === "Point") {
        if (shapesNum > 1) {
            temp = '[{"type": "circle", "coordinates": "[' + shape.geometry.coordinates + ',' + shape.properties.radius + ']"}';
        } else {
            temp = '[{"type": "circle", "coordinates": "[' + shape.geometry.coordinates + ',' + shape.properties.radius + ']"}]';
        }
        if (shapes.substr(0, 75) != temp.substr(0, 75)) {
            temp = ',{"type": "circle", "coordinates": "[' + shape.geometry.coordinates + ',' + shape.properties.radius + ']"}';
        }
    } else if (shape.geometry.type === "Polygon") {
        temp = '[{"type": "polygon", "coordinates": "[';
        for (var i = 0; i < shape.geometry.coordinates[0].length; i++) {
            if (i === shape.geometry.coordinates[0].length - 1) {
                if (shapesNum > 1) {
                    temp += '[' + shape.geometry.coordinates[0][i] + ']]"}';
                } else {
                    temp += '[' + shape.geometry.coordinates[0][i] + ']]"}]';
                }
            } else {
                temp += '[' + shape.geometry.coordinates[0][i] + '],';
            }
        }
        if (shapes.substr(0, 75) != temp.substr(0, 75)) {
            temp = ',{"type": "polygon", "coordinates": "[';
            for (var i = 0; i < shape.geometry.coordinates[0].length; i++) {
                if (i === shape.geometry.coordinates[0].length - 1) {
                    temp += '[' + shape.geometry.coordinates[0][i] + ']]"}';
                } else {
                    temp += '[' + shape.geometry.coordinates[0][i] + '],';
                }
            }
        }
    }

    shapes = shapes.replace(temp, "");
    shapesNum--;
    if (shapesNum === 0) {
        shapesExist = false;
    }
    updateShapes(shapes);
}

function updateShapes() {
    if (shapes[0] === ",") {
        shapes = shapes.replace(",", "[");
    }
}