import React, { Component, useState } from "react";
import { Text, View, Dimensions, ImageBackground, Image } from "react-native";
import { Header, Button } from "react-native-elements";
import { DeleteState } from "../Redux/Store";
import { WebView } from "react-native-webview";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import styles from '../StyleSheet/Styles';
import {BackgroundContainer} from './Components/ComponentIndex';

const { height, width } = Dimensions.get("window");
const imageHeight = Math.round((width * 18.5) / 9);

export default class InventoryScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    var array: string[] = [];
    for (var i = 0; i < 50; i++) {
      array.push(i.toString());
    }
    this.setState({ data: array });
  }

  renderList() {
    return (
      <View
        style={{
          backgroundColor: "black",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
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
            <View>
              <Image
                source={require("../Assets/Icons_Free/stoune_icon.png")}
                style={{ width: "100%", height: "100%" }}
                resizeMode="center"
              />
            </View>
          </ImageBackground>
        </ImageBackground>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.rootContainer}>
        <BackgroundContainer>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ width: "100%", height: "67%" }}>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flex: 1 }}>
                  <ImageBackground
                    source={require("../Assets/GUI_Parts_Free/name_bar2.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                    }}
                    resizeMode="stretch"
                  >
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <View style={{ width: "35%", height: "100%" }}>
                        <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Character')}>
                        <ImageBackground
                          source={require("../Assets/GUI_Parts_Free/button2_ready_on.png")}
                          style={{ height: "100%", width: "100%" }}
                          resizeMode="stretch"
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              height: "100%",
                              width: "100%",
                            }}
                          >
                            <Text
                              style={{
                                color: "gold",
                              }}
                            >
                              Go Back
                            </Text>
                          </View>
                        </ImageBackground>
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          width: "65%",
                        }}
                      >
                        <Text
                          style={{
                            color: "gold",
                          }}
                        >
                          Inventory
                        </Text>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
                <View style={{ flex: 9 }}>
                  <ImageBackground
                    source={require("../Assets/GUI_Parts_Free/barmid_ready.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                    }}
                    resizeMode="stretch"
                  >
                    <View
                      style={{ paddingHorizontal: 10, paddingVertical: 20 }}
                    >
                      <FlatList
                        numColumns={5}
                        data={this.state.data}
                        renderItem={({ item }) => this.renderList()}
                      />
                    </View>
                  </ImageBackground>
                </View>
              </View>
            </View>
            <View style={{ width: "100%", height: "33%" }}>
              <View style={{ flex: 1 }}>
                <ImageBackground
                  source={require("../Assets/GUI_Parts_Free/barmid_ready.png")}
                  style={{ width: "100%", height: "100%", overflow: "hidden" }}
                  resizeMode="stretch"
                ></ImageBackground>
              </View>
            </View>
          </View>
          </BackgroundContainer>
      </View>
    );
  }
}
