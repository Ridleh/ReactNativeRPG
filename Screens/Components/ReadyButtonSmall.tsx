import React from "react";
import { View, ImageBackground, Text } from "react-native";
import styles from "../../StyleSheet/Styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ReadyButtonSmall(props: any) {
  return (
      <TouchableOpacity onPress={props.handlePress}>
        <ImageBackground
          source={require("../../Assets/GUI_Parts_Free/button2_ready_on.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="stretch"
        >
          <View style={styles.center}>
            <Text
              style={{
                color: "gold",
              }}
            >
              {props.label}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
  );
}
