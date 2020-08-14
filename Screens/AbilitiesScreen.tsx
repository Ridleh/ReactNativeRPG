import React, { Component } from "react";
import {
  HeaderWithButton,
  BackgroundContainer,
  MidBarReadyContainer,
} from "../Components/ComponentIndex";
import { Text, View, Image, ImageBackground } from "react-native";
import styles from "../StyleSheet/Styles";
import { getImageFromUIMap } from "../AssetMaps/UIMap";
import { TouchableHighlight } from "react-native-gesture-handler";

export default class HomeScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      classes: ["Warrior", "Mage", "Paladin", "Archer"],
      classSelectorIndex: 0,
    };
  }

  navigateToPreviousScreen = () => {
    this.props.navigation.pop();
  };

  changeClass = (direction: number): void => {
    if (this.state.classSelectorIndex + direction < 0) {
      return;
    } else if (
      this.state.classSelectorIndex + direction >=
      this.state.classes.length
    ) {
      return;
    }
    this.setState((prevState: { classSelectorIndex: number }) => ({
      classSelectorIndex: prevState.classSelectorIndex + direction,
    }));
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
        <View style={styles.header}>
          <View style={styles.flexFullRow}>
            <View style={{ flex: 1 }}>
              <TouchableHighlight onPress={() => this.changeClass(-1)}>
                <Image
                  resizeMode="stretch"
                  style={styles.imageBackgroundFull}
                  source={getImageFromUIMap("Mini_arrow_left2.png")}
                />
              </TouchableHighlight>
            </View>
            <View style={{ flex: 4 }}>
              <ImageBackground
                resizeMode="stretch"
                style={styles.imageBackgroundFull}
                source={getImageFromUIMap("basic_bar.png")}
              >
                <View style={styles.center}>
                  <Text style={{ color: "gold" }}>
                    {this.state.classes[this.state.classSelectorIndex]}
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableHighlight onPress={() => this.changeClass(1)}>
                <Image
                  resizeMode="stretch"
                  style={styles.imageBackgroundFull}
                  source={getImageFromUIMap("Mini_arrow_right2.png")}
                />
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </BackgroundContainer>
    );
  }
}
