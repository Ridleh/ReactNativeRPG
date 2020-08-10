import React from "react";
import {
  View,
  ImageBackground,
  Image,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import styles from "../StyleSheet/Styles";
import { getImageFromUIMap } from "../AssetMaps/UIMap";
import { FlatList } from "react-native-gesture-handler";
import MidBarReady from "./MidBarReadyContainer";

export default function RenderItems(props: {
  items: Item[];
  handlePress: (item: Item) => void;
}) {
  return (
    <MidBarReady>
      <View style={styles.listPadding}>
        <FlatList
          indicatorStyle="white"
          numColumns={5}
          extraData={props.items}
          data={props.items}
          renderItem={({ item }) => renderItem(item, props)}
          keyExtractor={(item: Item) => item.id.toString()}
        />
      </View>
    </MidBarReady>
  );
}

function renderItem(item: Item, props: any) {
  return (
    <View
      style={{
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        margin: 2,
        flex: 1,
        height: Dimensions.get("window").width / 5, // approximate a square
        width: Dimensions.get("window").width / 5,
      }}
    >
      <ImageBackground
        style={{ height: "100%", width: "100%" }}
        source={getImageFromUIMap("Mini_background.png")}
        resizeMode="center"
      >
        <ImageBackground
          style={{ height: "100%", width: "100%" }}
          source={getImageFromUIMap("Mini_frame0.png")}
          resizeMode="stretch"
        >
          <TouchableHighlight onPress={() => props.handlePress(item)}>
            <Image
              source={item.image}
              style={{ width: "100%", height: "100%" }}
              resizeMode="center"
            />
          </TouchableHighlight>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}
