import React, { Component } from "react";
import { View, ImageBackground } from "react-native";
import styles from "../../StyleSheet/Styles";
import {getImage} from '../../AssetIndex/GUIPartsIndex';

export default function MidBarReady(props: any) {
  return (
    <View style={styles.rootContainer}>
      <ImageBackground
        source={getImage('barMidReady')}
        style={styles.imageBackgroundFull}
        resizeMode="stretch"
      >
        <View style={styles.flexFull}>{props.children}</View>
      </ImageBackground>
    </View>
  );
}
