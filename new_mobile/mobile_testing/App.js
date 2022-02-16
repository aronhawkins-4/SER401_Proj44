import { View, StyleSheet, SafeAreaView, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import {WebView} from 'react-native-webview'
import React, { useState } from 'react';


export default function App() {
  onNavigationStateChange = (navState) => {
    console.log("navState", navState)
  }

  return (
    <SafeAreaView style = {{flex:1}}>
      <WebView
      // PUT YOUR OWN COMPUTER'S IP ADDRESS BELOW
      source = {{uri:"http://192.168.0.206:3000/"}}
      // ref = {"webView"}
      onNavigationStateChange = {this.onNavigationStateChange}
      ></WebView>
    </SafeAreaView>
  )
}


//   const [type, setType] = useState('Unknown');
//   const [status, setStatus] = useState('Unknown');
//   const [category, setCategory] = useState('Unknown');
//   const [severity, setSeverity] = useState('Unknown');
//   const [certainty, setCertainty] = useState('Unknown');
//   const [urgency, setUrgency] = useState('Unknown');
//   const [geoNum, setGeoNum] = useState('Unknown');
//   const [code, setCode] = useState('Unknown');
  
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//     <Picker 
//       selectedValue={type}
//       style={styles.picker}
//       onValueChange={(value, index) => setType(value)}
//       >
//       <Picker.Item label="Select Alert Type" value="Unkown" color="white"/>
//       <Picker.Item label="Alert" value="Alert" color="white"/>
//       <Picker.Item label="Update" value="Update" color="white"/>
//       <Picker.Item label="Cancel" value="Cancel" color="white"/>
//     </Picker>
//     <Picker 
//       selectedValue={status}
//       style={styles.picker}
//       onValueChange={(value, index) => setStatus(value)}
//       >
//       <Picker.Item label="Select Alert Status" value="Unkown" color="white"/>
//       <Picker.Item label="Actual" value="Actual" color="white"/>
//       <Picker.Item label="Exercise" value="Exercise" color="white"/>
//       <Picker.Item label="System Test" value="System Test" color="white"/>
//       <Picker.Item label="Draft" value="Draft" color="white"/>
//     </Picker>
//     <Picker 
//       selectedValue={category}
//       style={styles.picker}
//       onValueChange={(value, index) => setCategory(value)}
//       >
//       <Picker.Item label="Select Alert Category" value="Unkown" color="white"/>
//       <Picker.Item label="Chemical, Biological, Radiological, Nuclear or High-Yield Explosive Threat or
//                         Attack" value="Chemical, Biological, Radiological, Nuclear or High-Yield Explosive Threat or
//                         Attack" color="white"/>
//       <Picker.Item label="Fire Suppression and Rescue" value="Fire Suppression and Rescue" color="white"/>
//       <Picker.Item label="General Emergency and Public Safety" value="General Emergency and Public Safety" color="white"/>
//       <Picker.Item label="Geophysical (inc. Landslide)" value="Geophysical (inc. Landslide)" color="white"/>
//       <Picker.Item label="Law Enforcement, Military, Homeland and Local/Private Security" value="Law Enforcement, Military, Homeland and Local/Private Security" color="white"/>
//       <Picker.Item label="Medical and Public Health" value="Medical and Public Health" color="white"/>
//       <Picker.Item label="Meteorological (inc. Flood)" value="Meteorological (inc. Flood)" color="white"/>
//       <Picker.Item label="Other Events" value="Other Events" color="white"/>
//       <Picker.Item label="Pollution and Other Environmental" value="Pollution and Other Environmental" color="white"/>
//       <Picker.Item label="Public and Private Transportation" value="Public and Private Transportation" color="white"/>
//       <Picker.Item label="Rescue and Recovery" value="Rescue and Recovery" color="white"/>
//       <Picker.Item label="Utility, Telecommunication, Other Non-Transport Infrastructure" value="Utility, Telecommunication, Other Non-Transport Infrastructure" color="white"/>
//     </Picker>
//     <Picker 
//       selectedValue={severity}
//       style={styles.picker}
//       onValueChange={(value, index) => setSeverity(value)}
//       >
//       <Picker.Item label="Select Alert Severity" value="Unkown" color="white"/>
//       <Picker.Item label="Extreme - Extraordinary threat to life or property" value="Extreme - Extraordinary threat to life or property" color="white"/>
//       <Picker.Item label="Severe - Significant threat to life or property" value="Severe - Significant threat to life or property" color="white"/>
//       <Picker.Item label="Moderate - Possible threat to life or property" value="Moderate - Possible threat to life or property" color="white"/>
//       <Picker.Item label="Minor - Minimal to no known threat to life or property" value="Minor - Minimal to no known threat to life or property" color="white"/>
//       <Picker.Item label="Unknown - Severity unknown" value="Unknown - Severity unknown" color="white"/>
//     </Picker>
//     <Picker 
//       selectedValue={certainty}
//       style={styles.picker}
//       onValueChange={(value, index) => setCertainty(value)}
//       >
//       <Picker.Item label="Select Certainty" value="Unkown" color="white"/>
//       <Picker.Item label="Observed" value="Observed" color="white"/>
//       <Picker.Item label="Likely" value="Likely" color="white"/>
//       <Picker.Item label="Possible" value="Possible" color="white"/>
//       <Picker.Item label="Unlikely" value="Unlikely" color="white"/>
//       <Picker.Item label="Unknown" value="Unknown" color="white"/>
//     </Picker>
//     <Picker 
//       selectedValue={urgency}
//       style={styles.picker}
//       onValueChange={(value, index) => setUrgency(value)}
//       >
//       <Picker.Item label="Select Alert Urgency" value="Unkown" color="white"/>
//       <Picker.Item label="Immediate" value="Immediate" color="white"/>
//       <Picker.Item label="Expected" value="Expected" color="white"/>
//       <Picker.Item label="Future" value="Future" color="white"/>
//       <Picker.Item label="Past" value="Past" color="white"/>
//       <Picker.Item label="Unknown" value="Unknown" color="white"/>
//     </Picker>
//     <Picker 
//       selectedValue={geoNum}
//       style={styles.picker}
//       onValueChange={(value, index) => setGeoNum(value)}
//       >
//       <Picker.Item label="Select Number of Geocodes" value="Unkown" color="white"/>
//       <Picker.Item label="1" value="1" color="white"/>
//       <Picker.Item label="2" value="2" color="white"/>
//       <Picker.Item label="3" value="3" color="white"/>
//       <Picker.Item label="4" value="4" color="white"/>
//       <Picker.Item label="5" value="5" color="white"/>
//       <Picker.Item label="6" value="6" color="white"/>
//       <Picker.Item label="7" value="7" color="white"/>
//       <Picker.Item label="8" value="8" color="white"/>
//       <Picker.Item label="9" value="9" color="white"/>
//       <Picker.Item label="10" value="10" color="white"/>
//       <Picker.Item label="11" value="11" color="white"/>
//       <Picker.Item label="12" value="12" color="white"/>
//       <Picker.Item label="13" value="13" color="white"/>
//       <Picker.Item label="14" value="14" color="white"/>
//       <Picker.Item label="15" value="15" color="white"/>
//       <Picker.Item label="16" value="16" color="white"/>
//       <Picker.Item label="17" value="17" color="white"/>
//       <Picker.Item label="18" value="18" color="white"/>
//       <Picker.Item label="19" value="19" color="white"/>
//       <Picker.Item label="20" value="20" color="white"/>
//       <Picker.Item label="21" value="21" color="white"/>
//       <Picker.Item label="22" value="22" color="white"/>
//       <Picker.Item label="23" value="23" color="white"/>
//       <Picker.Item label="24" value="24" color="white"/>
//       <Picker.Item label="25" value="25" color="white"/>
//       <Picker.Item label="26" value="26" color="white"/>
//       <Picker.Item label="27" value="27" color="white"/>
//       <Picker.Item label="28" value="28" color="white"/>
//       <Picker.Item label="29" value="29" color="white"/>
//       <Picker.Item label="30" value="30" color="white"/>
//       <Picker.Item label="31" value="31" color="white"/>
//     </Picker>
//     <Picker 
//       selectedValue={code}
//       style={styles.picker}
//       onValueChange={(value, index) => setCode(value)}
//       >
//       <Picker.Item label="Select Event Code" value="Unkown" color="white"/>
//       <Picker.Item label="911 Telephone Outage Emergency" value="TOE" color="white"/>
//       <Picker.Item label="Administrative Message/Follow up Statement" value="ADR" color="white"/>
//       <Picker.Item label="Avalanche Warning" value="AVW" color="white"/>
//       <Picker.Item label="Avalanche Watch" value="AVA" color="white"/>
//       <Picker.Item label="Blizzard Warning" value="BZW" color="white"/>
//       <Picker.Item label="Child Abduction Emergency" value="CAE" color="white"/>
//       <Picker.Item label="Civil Danger Warning" value="CDW" color="white"/>
//       <Picker.Item label="Civil Emergency Message" value="CEM" color="white"/>
//       <Picker.Item label="Coastal Flood Warning" value="CFW" color="white"/>
//       <Picker.Item label="Dust Storm Warning" value="DSW" color="white"/>
//       <Picker.Item label="Earthquake Warning" value="EQW" color="white"/>
//       <Picker.Item label="Evacuation Immediate" value="EVI" color="white"/>
//       <Picker.Item label="Extreme Wind Warning" value="EWW" color="white"/>
//       <Picker.Item label="Fire Warning" value="FRW" color="white"/>
//       <Picker.Item label="Flash Flood Statement" value="FFS" color="white"/>
//       <Picker.Item label="Flash Flood Warning" value="FFW" color="white"/>
//       <Picker.Item label="Flash Flood Watch" value="FFA" color="white"/>
//       <Picker.Item label="Flood Warning" value="FLW" color="white"/>
//       <Picker.Item label="Flood Watch" value="FLA" color="white"/>
//       <Picker.Item label="Hazardous Materials Warning" value="HMV" color="white"/>
//       <Picker.Item label="High Wind Warning" value="HWW" color="white"/>
//       <Picker.Item label="Hurricane Warning" value="HUW" color="white"/>
//       <Picker.Item label="Hurricane Watch" value="HUA" color="white"/>
//       <Picker.Item label="Law Enforcement Blue Alert" value="BLU" color="white"/>
//       <Picker.Item label="Law Enforcement Warning" value="LEW" color="white"/>
//       <Picker.Item label="Local Area Emergency" value="LAE" color="white"/>
//       <Picker.Item label="National Information Center" value="NIC" color="white"/>
//       <Picker.Item label="National Periodic Test" value="NPT" color="white"/>
//       <Picker.Item label="National Weather Service" value="NWS" color="white"/>
//       <Picker.Item label="Network Message Notification" value="NMN" color="white"/>
//       <Picker.Item label="Nuclear Power Plant Warning" value="NUW" color="white"/>
//       <Picker.Item label="Practice/Demo Warning" value="DMO" color="white"/>
//       <Picker.Item label="Presidential Alert" value="EAN" color="white"/>
//       <Picker.Item label="Radiological Hazard Warning" value="RHW" color="white"/>
//       <Picker.Item label="Required Monthly Test" value="RMT" color="white"/>
//       <Picker.Item label="Required Weekly Test" value="RWT" color="white"/>
//       <Picker.Item label="Severe Thunderstorm Warning" value="SVR" color="white"/>
//       <Picker.Item label="Severe Weather Statement" value="SVS" color="white"/>
//       <Picker.Item label="Shelter in Place Warning" value="SPW" color="white"/>
//       <Picker.Item label="Special Marine Warning" value="SMW" color="white"/>
//       <Picker.Item label="Storm Surge Warning" value="SSW" color="white"/>
//       <Picker.Item label="Storm Surge Watch" value="SSA" color="white"/>
//       <Picker.Item label="Special Weather Statement" value="SPS" color="white"/>
//       <Picker.Item label="Tornado Warning" value="TOR" color="white"/>
//       <Picker.Item label="Tornado Watch" value="TOA" color="white"/>
//       <Picker.Item label="Tropical Storm Warning" value="TRW" color="white"/>
//       <Picker.Item label="Tropical Storm Watch" value="TRA" color="white"/>
//       <Picker.Item label="Tsunami Warning" value="TSW" color="white"/>
//       <Picker.Item label="Volcano Warning" value="VOW" color="white"/>
//       <Picker.Item label="Winter Storm Warning" value="WSW" color="white"/>
//     </Picker>
//     <TextInput
//     placeholder= "Subject Event:"
//     multiline={true}
//     numberOfLines={10}
//     style={styles.textArea}
//     placeholderTextColor= "rgb(150,150,150)"
//     />
//     </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'black'
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
//   text: {
//     fontSize: 24,
//   },
//   picker: {
//     marginVertical: 20,
//     width: 300,
//     height: 200,
//     overflow: "hidden",
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "#666",
//   },
//   textArea: {
//     borderWidth: 1,
//     borderColor: "#666",
//     padding: 10,
//     marginVertical: 20,
//     height: 100,
//   },
// });
