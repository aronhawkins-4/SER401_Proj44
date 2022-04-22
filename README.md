# AO APP (ASU Team 44 - WEA and EAS Alert Origination Application)

## Overview 
AO APP is a web/mobile application that can send alerts to the FEMA IPAWS server 
for disseamination. The current setup has cached credentials and can only access 
the IPAWS test server. The mobile version of the app was ported over using React.js 
and both mobile and web versions of the application communicate with a node.js express
server. The express server uses a Java apache server to carry out the SOAP communication 
with the IPAWS system. At this point the shared files between the two servers have been 
hardcoded for Windows OS since they are written to C:\ProgramData\aoapp but code adjustments
can easily be made to run on Linux or Mac OS. Project repo can be found at: 
https://github.com/aronhawkins-4/SER401_Proj44

## Dependencies 
The follwoing dependencies must be installed in order to run the application. The versions listed
are the versions used for the project build. It is very likely that newer libraries can also work 
but they have not been tested. The exception is Java 8 since the SOAP libraries have changed in the 
recent released so this specific version of Java must be used: 
    * Node.js version 12.16.2
    * npm version 7.24.1
    * Java version 1.8.0_161 (Other versions of Java 8 will also work) 
    * expo-cli version 5.2.0 
    * Apache Maven version 3.8.5

## Setup 
1. Download project source code and place the folder in directory of your choice in your Windows 10 PC 
2. Install Node.js and npm 
3. Install Java 8 (Ensure your JAVA_HOME environment variable is configure)
4. Install Apache Maven (Ensure your Maven environement variable is configured)
5. Use terminal to navigate to the root of the project source code folder and run "npm install" to install dependencies
6. Perform a global install of Expo CLI. Information can be found at https://docs.expo.dev/get-started/installation/
7. From root of the project code, change directory to "mobile" and run "npm install" to install mobile dependencies
8. In the mobile directory edit the App.js to point to the IP of your webapp server (Line #24)
9. Navigate to /aoipawsclient directory and run the command "mvn clean install" 

## Running the Application 

### Running the AO APP Web Server and Java IPAWS Server  
    * From the project root folder run the command "npm run start". (Your webapp can now be accessed)
    * From the project root folder run the command "npm run ipawsclient" (Your Java server is now running and can communicate with IPAWS)
    * Once server has started you can access the webapp via browser at http://localhost:3000/

### Running the Mobile Version of the Application
The mobile version of the application can be ran using expo and a virtual device. You need to make sure you follow step #8
on the Setup section so that the mobile app points to the webserver that should already be running prior to executingh of expo. 
    
    * Open the virtual device of your choice. It can be and Android device from AVD Manager on Android Studio or an IOS device running from Xcode. 
    * Once the Virtual device is running, from the root of the source code application folder navigate to the /mobile directory and exceute the command "expo start --android" or "expo start --ios"
    * The application will continue to run on your device until you terminate it on the virtual device or expo session

### Running IPAWS transactions 
Currently the functionality between the Java server and the Node server has not been fully integrated to require no other interaction from the 
user other than the webapp UI. The current functionality can be achieved using npm scripts in the following manner 
    
#### Retrieving the IPAWS profile for the account (npm run getprofile)
executing the "npm run getprofile" creates a socket connection from the Node server to the Java server that sends the request to it, when the 
Java server gets this request, it sends a GET request to the IPAWS server which responds with the profile for the account. The Java server 
returns it to the webserver in a json format which then stores the response in /public/dbs/cogProfile.json. The webapp will access this file 
when the "Get IPAWS Profile" button is selected from the home screen. 

#### Sending an Alert to IPAWS (npm run postalert)
When the user submits an alert via the application, the alert message is stored in the local file system in a xml format. Once this file has  
been generated, the Java server needs to be triggered to pickup the xml file and POST the alert to IPAWS via signed SOAP communication. 
This functionality can be achieved by running the command "npm run postalert" which will create a socket connection from the Node server to 
the Java server requesting that the Java server sends the alert which will then access the xml file, digitally sings the message, and sends it
to IPAWS in the form of a SOAP POST request. The Java server get the response from IPAWS and send it back to the Node server via the open socket 
connection where the response is wrriten to /public/dbs/ipawsResponse.txt

