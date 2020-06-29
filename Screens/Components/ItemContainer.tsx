import React from "react";
import { View, ImageBackground, Text, Image } from "react-native";
import styles from "../../StyleSheet/Styles";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function ItemContainer(props: any) {
  return (
    <View style={styles.item}>
      <ImageBackground
        style={{ height: "100%", width: "95%" }}
        source={require("../../Assets/GUI_Parts_Free/Mini_background.png")}
        resizeMode="center"
      >
        <ImageBackground
          style={{ height: "100%", width: "95%" }}
          source={require("../../Assets/GUI_Parts_Free/Mini_frame0.png")}
          resizeMode="center"
        >
          <Image
            source={require("../../Assets/Icons_Free/armor_icon.png")}
            style={{ width: "91%", height: "100%" }}
            resizeMode="center"
          />
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}
