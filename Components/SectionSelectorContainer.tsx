import React from "react";
import {
  Image,
  View,
  Text,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import styles from "../StyleSheet/Styles";
import { getImageFromUIMap } from "../AssetMaps/UIMap";

export default function SectionSelectorContainer(props: any) {
  return (
    <View style={styles.flexFullRow}>
      <View style={{ flex: 1 }}>
        {props.classSelectorIndex != 0 && (
          <TouchableHighlight onPress={() => props.handlePress(-1)}>
            <Image
              resizeMode="stretch"
              style={styles.imageBackgroundFull}
              source={getImageFromUIMap("Mini_arrow_left2.png")}
            />
          </TouchableHighlight>
        )}
      </View>
      <View style={{ flex: 4 }}>
        <ImageBackground
          resizeMode="stretch"
          style={styles.imageBackgroundFull}
          source={getImageFromUIMap("basic_bar.png")}
        >
          <View style={styles.center}>
            <Text style={{ color: "gold" }}>{props.class.name}</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{ flex: 1 }}>
        {props.classSelectorIndex != props.classLength - 1 && (
          <TouchableHighlight onPress={() => props.handlePress(1)}>
            <Image
              resizeMode="stretch"
              style={styles.imageBackgroundFull}
              source={getImageFromUIMap("Mini_arrow_right2.png")}
            />
          </TouchableHighlight>
        )}
      </View>
    </View>
  );
}
