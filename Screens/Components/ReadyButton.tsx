import React from "react";
import { View, ImageBackground, Text, TouchableHighlight } from "react-native";
import styles from "../../StyleSheet/Styles";
import {  } from "react-native-gesture-handler";
import {getImage} from '../../AssetMaps/GUIPartsIndex';

export default function ReadyButton(props: any) {

  return (
    <View style={styles.flexFull}>
      <TouchableHighlight
        onPress={props.handlePress}
        underlayColor="transparent"
      >
        <ImageBackground
          source={getImage('buttonReadyOn')}
          style={styles.imageBackgroundFull}
          resizeMode="center"
        >
          <View style={styles.center}>
            <Text style={{ color: "gold" }}>{props.label}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
    </View>
  );
}
