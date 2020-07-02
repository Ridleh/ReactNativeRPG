import React, { Component } from "react";
import { View, ImageBackground } from "react-native";
import {
  BackgroundContainer,
  Readybutton,
  MidBarReadyContainer,
  ThreeItemContainer,
} from "./Components/ComponentIndex";
import styles from "../StyleSheet/Styles";
import {getImage} from '../AssetIndex/GUIPartsIndex';

export default class CharacterScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  navigateToAbilitiesScreen = () => {
    this.props.navigation.push("Abilities");
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
              source={getImage('warriorSilhouetteWoman')}
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
                  label={"View Abilities"}
                  handlePress={this.navigateToAbilitiesScreen}
                />
              </View>
            </MidBarReadyContainer>
          </View>
        </View>
      </BackgroundContainer>
    );
  }
}