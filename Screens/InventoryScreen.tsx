import React, { Component} from "react";
import { Text, View, Dimensions, ImageBackground, Image } from "react-native";
import {FlatList } from "react-native-gesture-handler";
import styles from "../StyleSheet/Styles";
import {
  BackgroundContainer,
  MidBarReadyContainer,
  HeaderWithButton,
} from "../Components/ComponentIndex";
import MidBarReady from "../Components/MidBarReadyContainer";
import { getImageFromUIMap } from "../AssetMaps/UIMap";

export default class InventoryScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
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
          flex: 1,
          height: Dimensions.get("window").width / 5, // approximate a square
          width: Dimensions.get("window").width / 5,
        }}
      >
      </View>
    );
  }

  render() {
    return (
      <BackgroundContainer>
        <View style={styles.flexFullColumn}>
          <View style={styles.header}>
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
