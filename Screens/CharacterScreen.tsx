import React, { Component } from "react";
import { Text, View, ImageBackground, Dimensions } from "react-native";
import {
  BackgroundContainer,
  Readybutton,
  MidBarReadyContainer,
  ThreeItemContainer,
  HeaderWithButton,
} from "./Components/ComponentIndex";
import styles from "../StyleSheet/Styles";
import { getImage } from "../AssetMaps/GUIPartsIndex";
import { getImageFromCRPG } from "../AssetMaps/ClassicRPGUIMap";
import ReadyButton from "./Components/ReadyButton";
const { height, width } = Dimensions.get("window");

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

  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.flexFullColumn}>
          <View style={{ flex: 1, backgroundColor: "#291100" }}>
            <ImageBackground
              source={getImageFromCRPG("lilBar")}
              style={styles.imageBackgroundFull}
              resizeMode="center"
            >
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:'yellow'}} >Name</Text>
              <Text style={{color:'yellow'}} >Level,Title</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ flex: 6 }}>
            <ImageBackground
              source={getImageFromCRPG("inventoryBar")}
              style={styles.imageBackgroundFull}
              resizeMode="stretch"
            >
              <ImageBackground
                source={getImage("warriorSilhouetteWoman")}
                style={styles.imageBackgroundFull}
                resizeMode="center"
              >
                <View style={{ flex: 1, flexDirection: "row", padding: 10 }}>
                  <View
                    style={{
                      height: "100%",
                      width: "20%",
                    }}
                  >
                    <ThreeItemContainer leftSide={true} />
                  </View>
                  <View style={{ height: "100%", width: "60%" }}></View>
                  <View
                    style={{
                      height: "100%",
                      width: "20%",
                    }}
                  >
                    <ThreeItemContainer leftSide={false} />
                  </View>
                </View>
              </ImageBackground>
            </ImageBackground>
          </View>
          <View style={{ flex: 2 }}>
            <ImageBackground
              source={getImage("barMidReady")}
              style={styles.imageBackgroundFull}
              resizeMode="stretch"
            >
              <View style={{ flexDirection: "row", padding: 10 }}>
                <View style={{ flex: 1 }}>
                  <ImageBackground
                    source={getImageFromCRPG("inventoryButton2")}
                    style={styles.imageBackgroundFull}
                    resizeMode="stretch"
                  >
                    <View style={styles.flexFullColumn}>
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          flex: 1,
                          padding: 10,
                        }}
                      >
                        <Text style={{ color: "gold" }}>Characteristics:</Text>
                      </View>
                      <View style={{ flex: 5, flexDirection: "row" }}>
                        <View
                          style={{
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            flex: 1,
                            flexDirection: "column",
                          }}
                        >
                          <Text style={{ color: "white" }}>Health: 0</Text>
                          <Text style={{ color: "white" }}>Mana: 0</Text>
                          <Text style={{ color: "white" }}>Resist: 0</Text>
                        </View>
                        <View
                          style={{
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            flex: 1,
                            flexDirection: "column",
                          }}
                        >
                          <Text style={{ color: "white" }}>Armor: 0</Text>
                          <Text style={{ color: "white" }}>Attack: 0</Text>
                          <Text style={{ color: "white" }}>Crit: 0%</Text>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
                <View style={{ flex: 1 }}>
                  <ReadyButton
                    label={"View Abilities"}
                    handlePress={this.navigateToAbilitiesScreen}
                  />
                  <ReadyButton
                    label={"View Inventory"}
                    handlePress={this.navigateToInventoryScreen}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    );
  }
}
