import React, { Component } from "react";
import { View, ImageBackground } from "react-native";
import styles from "../StyleSheet/Styles";
import { getImageFromUIMap } from "../AssetMaps/UIMap";
//import {ItemContainer} from './ComponentIndex';'
import ItemContainer from "./ItemContainer";
import { getImageFromFrameBackgroundsMap } from "../AssetMaps/FrameBackgroundsMap";
import { TouchableHighlight } from "react-native-gesture-handler";
export default function (props: any) {
  return (
    <View style={styles.flexFullRow}>
      <ImageBackground
        source={getImageFromUIMap("skill_bar.png")}
        style={styles.imageBackgroundFull}
        resizeMode="stretch"
      >
        <View style={{flex: 1, flexDirection:'row', justifyContent:'space-evenly'}}>
          <TouchableHighlight style={{ flex: 1 }} onPress={props.handlePress}>
            <ItemContainer
              image={getImageFromFrameBackgroundsMap("helm_background.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight style={{ flex: 1 }} onPress={props.handlePress}>
            <ItemContainer
              image={getImageFromFrameBackgroundsMap("helm_background.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight style={{ flex: 1 }} onPress={props.handlePress}>
            <ItemContainer
              image={getImageFromFrameBackgroundsMap("helm_background.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight style={{ flex: 1 }} onPress={props.handlePress}>
            <ItemContainer
              image={getImageFromFrameBackgroundsMap("helm_background.png")}
            />
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
}
