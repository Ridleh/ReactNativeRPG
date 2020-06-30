import React, { Component} from "react";
import { Text, View, Dimensions, ImageBackground, Image } from "react-native";
import {FlatList } from "react-native-gesture-handler";
import styles from "../StyleSheet/Styles";
import {
  BackgroundContainer,
  MidBarReadyContainer,
  HeaderWithButton,
} from "./Components/ComponentIndex";
import MidBarReady from "./Components/MidBarReadyContainer";

export default class InventoryScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    var array: string[] = [];
    for (var i = 0; i < 11; i++) {
      array.push(i.toString());
    }
    this.setState({ data: array });
  }

  navigateToPreviousScreen = () => {
    this.props.navigation.pop();
  };

  renderList() {
    return (
      <View
        style={{
          backgroundColor: "black",
          alignItems: "center",
          justifyContent: "center",
          margin: 1 / 5,
          height: Dimensions.get("window").width / 5, // approximate a square
          width: Dimensions.get("window").width / 5,
        }}
      >
        <ImageBackground
          style={{ height: "100%", width: "100%" }}
          source={require("../Assets/GUI_Parts_Free/Mini_background.png")}
          resizeMode="center"
        >
          <ImageBackground
            style={{ height: "100%", width: "100%" }}
            source={require("../Assets/GUI_Parts_Free/Mini_frame0.png")}
            resizeMode="stretch"
          >
              <Image
                source={require("../Assets/Icons_Free/stoune_icon.png")}
                style={{ width: "100%", height: "100%" }}
                resizeMode="center"
              />
          </ImageBackground>
        </ImageBackground>
      </View>
    );
  }

  render() {
    return (
      <BackgroundContainer>
        <View style={styles.flexFullColumn}>
          <View style={{ width: "100%", height: "7%" }}>
            <HeaderWithButton
              handlePress={this.navigateToPreviousScreen}
              buttonLabel={"Go Back"}
              header={"Inventory"}
            />
          </View>
          <MidBarReady>
            <View style={styles.listPadding}>
              <FlatList
                indicatorStyle="white"
                numColumns={5}
                data={this.state.data}
                renderItem={({ item }) => this.renderList()}
              />
            </View>
          </MidBarReady>
          <MidBarReadyContainer></MidBarReadyContainer>
        </View>
      </BackgroundContainer>
    );
  }
}
