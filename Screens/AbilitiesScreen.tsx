import React, { Component } from "react";
import {
  HeaderWithButton,
  BackgroundContainer,
  MidBarReadyContainer,
} from "./Components/ComponentIndex";
import { View, ImageBackground, Text } from "react-native";
import styles from "../StyleSheet/Styles";
import { getImageFromUIMap } from "../AssetMaps/UIMap";

export default class HomeScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  navigateToPreviousScreen = () => {
    this.props.navigation.pop();
  };

  render() {
    return (
      <BackgroundContainer>
        <View style={styles.header}>
          <HeaderWithButton
            handlePress={this.navigateToPreviousScreen}
            buttonLabel={"Go Back"}
            header={"Abilities"}
          />
        </View>
        <View style={{ width: "100%", height: "6%" }}>
          <ImageBackground
            source={getImageFromUIMap("name_bar3.png")}
            style={{ width: "100%", height: "100%", overflow: "hidden" }}
            resizeMode="stretch"
          >
            <View style={styles.center}>
              <Text
                style={{
                  color: "gold",
                }}
              >
                Equipped Abilities
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ width: "100%", height: "15%" }}>
          <MidBarReadyContainer>
              
          </MidBarReadyContainer>
        </View>
      </BackgroundContainer>
    );
  }
}
