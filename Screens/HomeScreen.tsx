import React, { Component, useState } from "react";
import { Text, View, Dimensions, ImageBackground } from "react-native";
import { Header, Button } from "react-native-elements";

const { height, width } = Dimensions.get("window");

export default class HomeScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { counter: 0 };
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

  render() {
    return (
      <View>
        <ImageBackground
          source={require("../assets/Backgrounds/SampleBackgroundQuests.png")}
          style={{ height: height - 24, width: width }}
        >
          <Header
            containerStyle={{ backgroundColor: "#964b00" }}
            leftComponent={{
              icon: "menu",
              color: "#fff",
              onPress: () => this.props.navigation.openDrawer(),
            }}
            centerComponent={{ text: "INVENTORY", style: { color: "#fff" } }}
          />
          <Text>Home Screen</Text>
          <Button title="Increase" onPress={() => this.increaseCounter()} />
          <Text>{this.state.counter}</Text>
          <Button title="Decrease" onPress={() => this.decreaseCounter()} />
        </ImageBackground>
      </View>
    );
  }
}
