# SoapUI Instructions on how to access IPAWS


## Setting up the key

Go into the keystore directory provided by FEMA in the email sent to Jesus
<br>
Open up a powershell or cmd line window and type the following:
```
keytool -importkeystore -srckeystore IPAWSOPEN120075.jks -destkeystore newKey.p12 -srcstoretype JKS -deststoretype PKCS12 -deststorepass ipawsopen
```
You will be prompted first for the password for the .jks file. Copy/paste the password for the .txt file that's in the same folder. Next you have to copy/paste the private key and then you will see a .p12 file created.
<br>
```
newKey.p12 is the name that I chose for my file but you can choose any name you want
```
```
ipawsopen is the password that I chose for my newKey.p12 file but once again choose any password you like just make sure that your remember it since you'll need it for the SoapUI keystore
```

---
## Setting up SoapUI with a new project for IPAWS

Install soapUI and open it up. Create a new SOAP project by clicking on the soap button in the menu bar. Type in the name of your project and where it says inital WSDL paste this address into the box. SoapUI is weird with right-click pastes(at least on the windows version) so you will have to do ctrl-v or whatever keys paste on your system. After that click ok.
https://tdl.integration.aws.fema.gov/IPAWS_CAPService/IPAWS?wsdl

<br>
You should see a new project in the sidebar that has 3 options if you expand: getMessage, getRequest, and postCap. Open up any of the 3 and each will have a soap template on how they should be formatted. This is important since breaking the format will result in an invalid message

---
## Adding the security key and header authorization





