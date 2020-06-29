import React from "react";
import { View, ImageBackground, Text, Image } from "react-native";
import styles from "../../StyleSheet/Styles";
import { TouchableHighlight } from "react-native-gesture-handler";
import ItemContainer from "./ItemContainer";

/*
required props:
    alignment: parameter for alignItems style
*/
export default function ThreeItemLayout(props: any) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: props.alignment,
      }}
    >
     <ItemContainer/>
     <ItemContainer/>
     <ItemContainer/> 
    </View>
  );
}
