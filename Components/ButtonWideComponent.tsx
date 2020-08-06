import React from "react";
import { ImageBackground } from "react-native";
import styles from "../StyleSheet/Styles";
import { getImageFromUIMap } from "../AssetMaps/UIMap";
import { Button } from "react-native-elements";
import { useLinkProps } from "@react-navigation/native";

export default function Buttonwide(props: any) {
  return (
    <ImageBackground
      style={styles.imageBackgroundFull}
      resizeMode="stretch"
      source={getImageFromUIMap("button_ready_on.png")}
    >
      <Button
        title={props.title}
        containerStyle={styles.center}
        titleStyle={styles.center}
        buttonStyle={{ flex: 1, backgroundColor: "transparent" }}
        onPress={props.handlePress}
      />
    </ImageBackground>
  );
}
