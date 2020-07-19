import React from "react";
import { View, Text, ImageBackground, TouchableHighlight } from "react-native";
import styles from "../StyleSheet/Styles";
import { getImageFromUIMap } from "../AssetMaps/UIMap";

export default function FourItemLayout(props: any) {
  return (
    <TouchableHighlight
    onPress={props.handlePress}
    style={styles.flexFullColumn}>
        <View style={styles.flexFullColumn}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              paddingTop:10
            }}
          >
            <Text style={{ color: "gold" }}>Characteristics:</Text>
          </View>
          <View style={{ flex: 5, flexDirection: "row", paddingBottom:10 }}>
            <View
              style={{
                justifyContent: "space-evenly",
                alignItems: "center",
                flex: 1,
                flexDirection: "column",
              }}
            >
              <Text style={{ color: "white" }}>Health: 0</Text>
              <Text style={{ color: "white" }}>Mana: 0</Text>
              <Text style={{ color: "white" }}>Resist: 0</Text>
            </View>
            <View
              style={{
                justifyContent: "space-evenly",
                alignItems: "center",
                flex: 1,
                flexDirection: "column",
              }}
            >
              <Text style={{ color: "white" }}>Armor: 0</Text>
              <Text style={{ color: "white" }}>Attack: 0</Text>
              <Text style={{ color: "white" }}>Crit: 0%</Text>
            </View>
          </View>
        </View>
        </TouchableHighlight>
  );
}
