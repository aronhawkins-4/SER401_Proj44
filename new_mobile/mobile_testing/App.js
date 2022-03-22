import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { WebView } from "react-native-webview";
import React, { useState } from "react";

export default function App() {
  // onNavigationStateChange = (navState) => {
  //   console.log("navState", navState);
  // };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#005287" }}>
      <WebView
        // PUT YOUR OWN COMPUTER'S IP ADDRESS BELOW
        source={{ uri: "http://192.168.68.112:3000/" }}
        // ref = {"webView"}
        // onNavigationStateChange={this.onNavigationStateChange}
      ></WebView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#005287",
  },
});
