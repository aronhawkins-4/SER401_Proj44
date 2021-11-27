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