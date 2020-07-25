import React, { Component } from "react";
import { View, ImageBackground } from "react-native";
import styles from "../StyleSheet/Styles";
import { getImageFromUIMap } from "../AssetMaps/UIMap";
//import {ItemContainer} from './ComponentIndex';'
import ItemContainer from "./ItemContainer";
import { getImageFromFrameBackgroundsMap } from "../AssetMaps/FrameBackgroundsMap";
import { TouchableHighlight } from "react-native-gesture-handler";
import { getImageFromIconsFreeMap } from "../AssetMaps/IconsFreeMap";

export default function (props: any) {
  return (
    <View style={styles.flexFullRow}>
      <ImageBackground
        source={getImageFromUIMap("skill_bar.png")}
        style={styles.imageBackgroundFull}
        resizeMode="stretch"
      >
        <View style={{flex: 1, flexDirection:'row', justifyContent:'space-evenly'}}>
          <TouchableHighlight style={{ flex: 1 }} onPress={() => props.handlePress(1)}>
            <ItemContainer
              image={getImageFromIconsFreeMap("skill_icon_01.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight style={{ flex: 1 }} onPress={() => props.handlePress(2)}>
            <ItemContainer
              image={getImageFromIconsFreeMap("skill_icon_02.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight style={{ flex: 1 }} onPress={() => props.handlePress(3)}>
            <ItemContainer
              image={getImageFromIconsFreeMap("skill_icon_03.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight style={{ flex: 1 }} onPress={() => props.handlePress(4)}>
            <ItemContainer
              image={getImageFromIconsFreeMap("skill_icon_04.png")}
            />
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
}