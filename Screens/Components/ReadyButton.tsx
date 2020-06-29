import React from "react";
import { View, ImageBackground, Text } from "react-native";
import styles from "../../StyleSheet/Styles";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function ReadyButton(props: any) {
  return (
    <View style={styles.flexFull}>
      <TouchableHighlight
        onPress={props.handlePress}
        underlayColor="transparent"
      >
        <ImageBackground
          source={require("../../Assets/GUI_Parts_Free/button_ready_on.png")}
          style={styles.imageBackgroundFull}
          resizeMode="center"
        >
          <View style={styles.center}>
            <Text style={{ color: "gold" }}>{props.label}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
    </View>
  );
}
