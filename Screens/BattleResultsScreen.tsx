import React, { Component } from "react";
import BackgroundContainer from "../Components/BackgroundContainer";
import { ActivityIndicator, View, ImageBackground, Text } from "react-native";
import { getImageFromUIMap } from "../AssetMaps/UIMap";
import styles from "../StyleSheet/Styles";
import { Button } from "react-native-elements";
import { BaseRouter } from "@react-navigation/native";

export default class HomeScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      screenReady: false,
      playerWon: this.props.route.params.playerWon,
    };

  }

  openDrawer = (): void => {
    this.props.navigation.openDrawer();
  };

  screenReady = (): void => {
    if (!this.state.screenReady) {
      this.setState({ screenReady: true });
    }
  };

  navigateToQuestScreen = (): void => {
    console.log(this.props.navigation);
    this.props.navigation.navigate("Quests");
  };

  render() {
    return (
      <ImageBackground
        style={styles.imageBackgroundFull}
        source={getImageFromUIMap("Paper_01.png")}
      >
        {this.state.screenReady ? null : (
          <View style={styles.center}>
            <ActivityIndicator size="large" />
            <Text style={{ color: "white" }}>Loading...</Text>
          </View>
        )}
        <View style={[styles.center, { flex: 9 }]}>
          <Text>Battle is Over</Text>
          {this.state.playerWon ? (
              <Text style={{ color: "white" }}>You Have Won</Text>
            ) : (
              <Text style={{ color: "white" }}>You Have Lost</Text>
            )}
        </View>
        <View style={{ flex: 1 }}>
          <ImageBackground
            onLoad={this.screenReady}
            style={styles.imageBackgroundFull}
            resizeMode="stretch"
            source={getImageFromUIMap("long_button.png")}
          >
            <Button
              title="OK"
              buttonStyle={{ backgroundColor: "transparent" }}
              onPress={this.navigateToQuestScreen}
            />
          </ImageBackground>
        </View>
      </ImageBackground>
    );
  }
}
