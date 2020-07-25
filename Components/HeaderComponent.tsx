import React, { Component } from "react";
import { View, ImageBackground, Text } from "react-native";
import styles from "../StyleSheet/Styles";
import { getImageFromUIMap } from "../AssetMaps/UIMap";
import { Header } from "react-native-elements";

export default function BackgroundContainer(props: any) {
  return (
    <View style={{ flex: 1, backgroundColor: "#291100" }}>
            <ImageBackground
              source={getImageFromUIMap("lil_bar.png")}
              style={styles.imageBackgroundFull}
              resizeMode="center"
            >
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:'yellow'}} >Name</Text>
              <Text style={{color:'yellow'}} >Level,Title</Text>
              </View>
            </ImageBackground>
          </View>
  );
}
