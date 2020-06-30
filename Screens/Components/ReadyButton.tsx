import React from "react";
import { View, ImageBackground, Text } from "react-native";
import styles from "../../StyleSheet/Styles";
import { TouchableHighlight } from "react-native-gesture-handler";
import {getImage} from '../../AssetIndex/GUIPartsIndex';

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
