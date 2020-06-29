import React from "react";
import { View, ImageBackground, Text, Image } from "react-native";
import styles from "../../StyleSheet/Styles";
import { TouchableHighlight } from "react-native-gesture-handler";
import ReadyButtonSmall from './ReadyButtonSmall'
import {Header} from 'react-native-elements'

export default function HeaderWithButton(props: any) {
  return (
    <View style={styles.flexFull}>
    <ImageBackground
      source={require("../../Assets/GUI_Parts_Free/name_bar2.png")}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
      resizeMode="stretch"
    >
      <View
        style={styles.centerRow}
      >
        <View style={{ width: "35%", height: "100%" }}>
          <ReadyButtonSmall
          handlePress={props.handlePress}
          label={props.buttonLabel}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "65%",
          }}
        >
          <Text
            style={{
              color: "gold",
            }}
          >
            {props.header}
          </Text>
        </View>
      </View>
    </ImageBackground>
  </View>
  );
}
