import React from "react";
import { View, ImageBackground, Image } from "react-native";
import styles from "../../StyleSheet/Styles";
import { getImage } from "../../AssetMaps/GUIPartsIndex";
import { getImageFromCRPG } from "../../AssetMaps/ClassicRPGUIMap";

export default function ItemContainer(props: any) {
  return (
    <View style={styles.item}>
      <ImageBackground
        style={{ height: "100%", width: "100%" }}
        source={props.image}
        resizeMode="center"
      >
        <Image
          style={{ height: "100%", width: "100%" }}
          source={getImageFromCRPG("inventoryFrame")}
          resizeMode="center"
        ></Image>
      </ImageBackground>
    </View>
  );
}
