import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  BackHandler,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import RNExitApp from "react-native-exit-app";

const BUTTON_SIZE = 30;
const BORDER_WIDTH = 1;

function CloseButton(props) {
  return (
    <TouchableOpacity
      onPress={close}
      style={[
        styles.button,
        { backgroundColor: "white", borderColor: props.color },
      ]}
    >
      <Icon name={"close"} color={props.color} size={BUTTON_SIZE / 2} />
    </TouchableOpacity>
  );
}
function close() {
  BackHandler.exitApp();
}
const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: BUTTON_SIZE + BORDER_WIDTH,
    height: BUTTON_SIZE + BORDER_WIDTH,
    borderWidth: BORDER_WIDTH,
    borderRadius: BUTTON_SIZE / 2,
  },
});
export default CloseButton;
