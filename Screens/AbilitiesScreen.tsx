import React, { Component } from "react";
import {
  HeaderWithButton,
  BackgroundContainer,
  MidBarReadyContainer,
} from "./Components/ComponentIndex";
import { View, ImageBackground, Text } from "react-native";
import styles from "../StyleSheet/Styles";
import { getImage } from "../AssetIndex/GUIPartsIndex";

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
            source={getImage("nameBar3")}
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