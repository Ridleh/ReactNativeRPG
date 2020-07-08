import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "../StyleSheet/Styles";
import { getImageFromUIMap } from "../AssetMaps/UIMap";

export default function FourItemLayout(props: any) {
  return (
        <View style={styles.flexFullColumn}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              padding: 10,
            }}
          >
            <Text style={{ color: "gold" }}>Characteristics:</Text>
          </View>
          <View style={{ flex: 5, flexDirection: "row" }}>
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
  );
}
