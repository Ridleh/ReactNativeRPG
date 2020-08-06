import React from "react";
import {
  Text,
  View,
  ImageBackground,
} from "react-native";
import styles from "../StyleSheet/Styles";
import { getImageFromUIMap } from "../AssetMaps/UIMap";

export default function StatsContainerMid(props: any) {
  return (
    <ImageBackground
      source={getImageFromUIMap("inventory_button2.png")}
      style={[styles.imageBackgroundFull, styles.flexFullRow, { padding: 15 }]}
      resizeMode="stretch"
    >
      <View style={[styles.flexFullColumn, { justifyContent: "space-evenly" }]}>
        <Text style={{ color: "gold" }}>
          Health: {props.selectedItem.Health}
        </Text>
        <Text style={{ color: "gold" }}>
          Attack: {props.selectedItem.Attack}
        </Text>
        <Text style={{ color: "gold" }}>
          Defence: {props.selectedItem.Defence}
        </Text>
      </View>
      <View style={[styles.flexFullColumn, { justifyContent: "space-evenly" }]}>
        <Text style={{ color: "gold" }}>Magic: {props.selectedItem.Magic}</Text>
        <Text style={{ color: "gold" }}>
          Resistance: {props.selectedItem.Resistance}
        </Text>
        <Text style={{ color: "gold" }}>Mind: {props.selectedItem.Mind}</Text>
      </View>
      <View style={[styles.flexFullColumn, { justifyContent: "space-evenly" }]}>
        <Text style={{ color: "gold" }}>
          Crit Chance: {props.selectedItem.CritChance}
        </Text>
        <Text style={{ color: "gold" }}>
          Evasion Chance: {props.selectedItem.Evasion}
        </Text>
        <Text style={{ color: "gold" }}>Speed: {props.selectedItem.Speed}</Text>
      </View>
    </ImageBackground>
  );
}
