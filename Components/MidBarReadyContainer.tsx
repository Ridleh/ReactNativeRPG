import React from "react";
import { View, ImageBackground } from "react-native";
import styles from "../StyleSheet/Styles";
import {getImageFromUIMap} from '../AssetMaps/UIMap';

export default function MidBarReady(props: any) {
  return (
    <View style={styles.flexFull}>
      <ImageBackground
        source={getImageFromUIMap('mid_bar.png')}
        style={styles.imageBackgroundFull}
        resizeMode="stretch"
      >
        <View style={styles.flexFull}>{props.children}</View>
      </ImageBackground>
    </View>
  );
}
