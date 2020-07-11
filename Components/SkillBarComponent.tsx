import React, { Component } from "react";
import { View, ImageBackground } from "react-native";
import styles from "../StyleSheet/Styles";
import { getImageFromUIMap } from "../AssetMaps/UIMap";
//import {ItemContainer} from './ComponentIndex';'
import ItemContainer from './ItemContainer';
import { getImageFromFrameBackgroundsMap } from "../AssetMaps/FrameBackgroundsMap";

export default function (props: any) {
  return (
    <View style={styles.flexFullRow}>
      <ImageBackground
        source={getImageFromUIMap("skill_bar.png")}
        style={styles.imageBackgroundFull}
        resizeMode="stretch"
      >
        <View style={styles.flexFullRow} >
            <ItemContainer
            image={getImageFromFrameBackgroundsMap('helm_background.png')}/>
            <ItemContainer
            image={getImageFromFrameBackgroundsMap('helm_background.png')}/>
            <ItemContainer
            image={getImageFromFrameBackgroundsMap('helm_background.png')}/>
            <ItemContainer
            image={getImageFromFrameBackgroundsMap('helm_background.png')}/>
        </View>
      </ImageBackground>
    </View>
  );
}
