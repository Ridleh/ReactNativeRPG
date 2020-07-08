import React from "react";
import { View, ImageBackground, Image, TouchableHighlight } from "react-native";
import styles from "../../StyleSheet/Styles";
import { getImageFromUIMap } from "../../AssetMaps/UIMap";

export default function ItemContainer(props: any) {
  return (
    <TouchableHighlight underlayColor={ 'transparent'} style={{ flex: 1 }} onPress={() => console.log("tapp")}>
      <View style={styles.item}>
        <ImageBackground
          style={{ height: "100%", width: "100%" }}
          source={props.image}
          resizeMode="center"
        >
          <Image
            style={{ height: "100%", width: "100%" }}
            source={getImageFromUIMap("inventory_frame.png")}
            resizeMode="center"
          />
        </ImageBackground>
      </View>
    </TouchableHighlight>
  );
}
