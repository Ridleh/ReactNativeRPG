import React, { Component } from "react";
import { View, ImageBackground, Text } from "react-native";
import styles from "../StyleSheet/Styles";
import { getImageFromUIMap } from "../AssetMaps/UIMap";
import { Header } from "react-native-elements";

export default function BackgroundContainer(props: any) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={getImageFromUIMap("name_frame_mid_ready.png")}
        style={styles.imageBackgroundFull}
        resizeMode="center"
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: "yellow" }}>{props.title}</Text>
          <Text style={{ color: "yellow" }}>{props.subtitle}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
