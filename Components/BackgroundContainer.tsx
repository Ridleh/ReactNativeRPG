import React, { Component } from "react";
import { View, ImageBackground } from "react-native";
import styles from "../StyleSheet/Styles";
import {getImageFromUIMap} from '../AssetMaps/UIMap';

export default function BackgroundContainer(props: any){

    return (
      <View style={styles.rootContainer}>
        <ImageBackground
          source={getImageFromUIMap('bar_ready.png')}
          style={ styles.imageBackgroundFull }
          resizeMode="stretch"
        >
          <View style={styles.rootContainerPadding}>{props.children}</View>
        </ImageBackground>
      </View>
    );
}
