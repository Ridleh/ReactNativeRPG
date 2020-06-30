import React from "react";
import { View, ImageBackground, Image } from "react-native";
import styles from "../../StyleSheet/Styles";
import {getImage} from '../../AssetIndex/GUIPartsIndex';

export default function ItemContainer(props: any) {
  return (
    <View style={styles.item}>
      <ImageBackground
        style={{ height: "100%", width: "95%" }}
        source={getImage("miniBackground")}
        resizeMode="center"
      >
        <ImageBackground
          style={{ height: "100%", width: "95%" }}
          source={getImage('miniFrame0')}
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
