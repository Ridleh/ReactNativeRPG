import React, { Component } from "react";
import { View, ImageBackground } from "react-native";
import styles from "../StyleSheet/Styles";
import { getImageFromUIMap } from "../AssetMaps/UIMap";
import { Header } from "react-native-elements";

export default function BackgroundContainer(props: any) {
  return (
    <Header
      containerStyle={{ paddingTop: 0 }}
      leftComponent={{
        icon: "menu",
        color: "gold",
        onPress: props.handlePress,
      }}
      centerComponent={{ text: props.title, style: { color: "gold" } }}
      rightContainerStyle={styles.center}
      backgroundImage={getImageFromUIMap("lil_bar.png")}
      backgroundImageStyle={{ flex: 1, resizeMode: "stretch" }}
    />
  );
}
