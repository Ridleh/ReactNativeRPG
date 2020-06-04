import React, { Component, useState } from "react";
import { Text, View, Dimensions, ImageBackground, Image } from "react-native";
import { Header, Button } from "react-native-elements";
import { DeleteState } from "../Redux/Store";
import { WebView } from "react-native-webview";
import { TouchableOpacity } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");
const imageHeight = Math.round((width * 18.5) / 9);

export default class HomeScreen extends Component<any, any> {
  webview = null;
  constructor(props: any) {
    super(props);
    this.state = { counter: 0 };
    this.deleteGameStateFromStorage = this.deleteGameStateFromStorage.bind(
      this
    );
  }

  componentDidMount() {}

  componentWillUnmount() {}

  increaseCounter = () => {
    this.setState((prevState: { counter: number }) => ({
      counter: prevState.counter + 1,
    }));
  };

  decreaseCounter() {
    this.setState((prevState: { counter: number }) => ({
      counter: prevState.counter - 1,
    }));
  }

  deleteGameStateFromStorage(newNavState: any) {
    DeleteState();
    //this.props.navigation.navigate("Shop");
  }

  render() {
    const injectedJs = `window.postMessage(window.location.href);`;
    return (
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <ImageBackground
          source={require("../Assets/GUI_Parts_Free/bar_ready.png")}
          style={{ width: "100%", height: "100%", overflow: "hidden" }}
          resizeMode="stretch"
        ></ImageBackground>
      </View>
    );
  }
}
