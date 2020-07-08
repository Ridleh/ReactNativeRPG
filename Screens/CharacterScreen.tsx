import React, { Component } from "react";
import { Text, View, ImageBackground} from "react-native";
import {
  FourItemContainer, StatsContainer,
} from "../Components/ComponentIndex";
import styles from "../StyleSheet/Styles";
import { getImageFromUIMap } from "../AssetMaps/UIMap";
import ReadyButton from "../Components/ReadyButton";
import { getImageFromSilhouetteMap } from "../AssetMaps/SilhouetteMap";

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
              source={getImageFromUIMap("lil_bar.png")}
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
              source={getImageFromUIMap("Inventory_bar.png")}
              style={styles.imageBackgroundFull}
              resizeMode="stretch"
            >
              <ImageBackground
                source={getImageFromSilhouetteMap("warrior_silhouette_woman.png")}
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
                    <FourItemContainer leftSide={true} />
                  </View>
                  <View style={{ height: "100%", width: "60%" }}></View>
                  <View
                    style={{
                      height: "100%",
                      width: "20%",
                    }}
                  >
                    <FourItemContainer leftSide={false} />
                  </View>
                </View>
              </ImageBackground>
            </ImageBackground>
          </View>
          <View style={{ flex: 2 }}>
            <ImageBackground
              source={getImageFromUIMap("mid_bar.png")}
              style={styles.imageBackgroundFull}
              resizeMode="stretch"
            >
              <View style={{ flexDirection: "row", padding: 10 }}>
                <View style={{ flex: 1 }}>
                  <ImageBackground
                    source={getImageFromUIMap("inventory_button2.png")}
                    style={styles.imageBackgroundFull}
                    resizeMode="stretch"
                  >
                    <StatsContainer/>
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
