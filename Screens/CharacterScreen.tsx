import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  StyleSheet,
} from "react-native";
import { Header, Button } from "react-native-elements";
import { DeleteState } from "../Redux/Store";
import { WebView } from "react-native-webview";
import {
  TouchableOpacity,
  TouchableHighlight,
} from "react-native-gesture-handler";

import {
  BackgroundContainer,
  Readybutton,
  MidBarReadyContainer,
  ThreeItemContainer,
} from "./Components/ComponentIndex";
import styles from "../StyleSheet/Styles";
import ThreeItemLayout from "./Components/ThreeItemLayout";

const { height, width } = Dimensions.get("window");

export default class CharacterScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  handelPress = () => {
    console.log("From parent");
  };

  navigateToInventoryScreen = () => {
    this.props.navigation.push("Inventory");
  };

  render() {
    return (
      <BackgroundContainer>
        <View style={styles.flexFull}>
          <View style={{ flex: 3, flexDirection: "row" }}>
            <ImageBackground
              source={require("../Assets/GUI_Parts_Free/warrior_silhouette_man.png")}
              style={{ width: "100%", height: "100%", overflow: "hidden" }}
              resizeMode="contain"
            >
              <View style={styles.flexFullRow}>
                <ThreeItemContainer alignment={"flex-start"} />
                <ThreeItemContainer alignment={"flex-end"} />
              </View>
            </ImageBackground>
          </View>
          <View style={{ flex: 1 }}>
            <MidBarReadyContainer>
              <View style={styles.flexFullRow}>
                <Readybutton
                  label={"View Inventory"}
                  handlePress={this.navigateToInventoryScreen}
                />
                <Readybutton
                  label={"Here I am"}
                  handlePress={this.handelPress}
                />
              </View>
            </MidBarReadyContainer>
          </View>
        </View>
      </BackgroundContainer>
    );
  }
}
