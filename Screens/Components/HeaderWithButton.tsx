import React from "react";
import { View, ImageBackground, Text} from "react-native";
import styles from "../../StyleSheet/Styles";
import ReadyButtonSmall from './ReadyButtonSmall'
import {getImage} from '../../AssetMaps/GUIPartsIndex';

export default function HeaderWithButton(props: any) {
  return (
    <View style={styles.flexFull}>
    <ImageBackground
      source={getImage('nameBar2')}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
      resizeMode="stretch"
    >
      <View
        style={styles.centerRow}
      >
        <View style={{ width: "35%", height: "100%" }}>
          <View style={styles.flexFull}>
          </View>
          <ReadyButtonSmall
          handlePress={props.handlePress}
          label={props.buttonLabel}
          />
          
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "65%",
          }}
        >
          <Text
            style={{
              color: "gold",
            }}
          >
            {props.header}
          </Text>
        </View>
      </View>
    </ImageBackground>
  </View>
  );
}
