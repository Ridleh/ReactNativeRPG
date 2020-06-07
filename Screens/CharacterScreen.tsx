import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  StyleSheet,
} from "react-native";
import { Header, Button } from "react-native-elements";
import { DeleteState } from "../Redux/Store";
import { WebView } from "react-native-webview";
import {
  TouchableOpacity,
  TouchableHighlight,
} from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");

export default class CharacterScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <ImageBackground
        source={require("../Assets/GUI_Parts_Free/bar_ready.png")}
        style={{ width: "100%", height: "100%", overflow: "hidden" }}
        resizeMode="stretch"
      >
        <View style={{ flex: 1, padding: 10 }}>
          <View style={{ flex: 3, flexDirection: "row" }}>
            <ImageBackground
              source={require("../Assets/GUI_Parts_Free/warrior_silhouette_man.png")}
              style={{ width: "100%", height: "100%", overflow: "hidden" }}
              resizeMode="contain"
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Text style={{ color: "white" }}>left</Text>
                  <View style={styles.item}>
                    <ImageBackground
                      style={{ height: "100%", width: "95%" }}
                      source={require("../Assets/GUI_Parts_Free/Mini_background.png")}
                      resizeMode="center"
                    >
                      <ImageBackground
                        style={{ height: "100%", width: "95%" }}
                        source={require("../Assets/GUI_Parts_Free/Mini_frame0.png")}
                        resizeMode="center"
                      >
                        <Image
                          source={require("../Assets/Icons_Free/armor_icon.png")}
                          style={{ width: "91%", height: "100%" }}
                          resizeMode="center"
                        />
                      </ImageBackground>
                    </ImageBackground>
                  </View>
                  <View style={styles.item}>
                    <ImageBackground
                      style={{ height: "100%", width: "95%" }}
                      source={require("../Assets/GUI_Parts_Free/Mini_background.png")}
                      resizeMode="center"
                    >
                      <ImageBackground
                        style={{ height: "100%", width: "95%" }}
                        source={require("../Assets/GUI_Parts_Free/Mini_frame0.png")}
                        resizeMode="center"
                      >
                        <Image
                          source={require("../Assets/Icons_Free/armor_icon.png")}
                          style={{ width: "91%", height: "100%" }}
                          resizeMode="center"
                        />
                      </ImageBackground>
                    </ImageBackground>
                  </View>
                  <View style={styles.item}>
                    <ImageBackground
                      style={{ height: "100%", width: "95%" }}
                      source={require("../Assets/GUI_Parts_Free/Mini_background.png")}
                      resizeMode="center"
                    >
                      <ImageBackground
                        style={{ height: "100%", width: "95%" }}
                        source={require("../Assets/GUI_Parts_Free/Mini_frame0.png")}
                        resizeMode="center"
                      >
                        <Image
                          source={require("../Assets/Icons_Free/armor_icon.png")}
                          style={{ width: "91%", height: "100%" }}
                          resizeMode="center"
                        />
                      </ImageBackground>
                    </ImageBackground>
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: "white" }}>middle</Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Text style={{ color: "white" }}>right</Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <View style={styles.item}>
                      <ImageBackground
                        style={{ height: "100%", width: "95%" }}
                        source={require("../Assets/GUI_Parts_Free/Mini_background.png")}
                        resizeMode="center"
                      >
                        <ImageBackground
                          style={{ height: "100%", width: "95%" }}
                          source={require("../Assets/GUI_Parts_Free/Mini_frame0.png")}
                          resizeMode="center"
                        >
                          <Image
                            source={require("../Assets/Icons_Free/armor_icon.png")}
                            style={{ width: "91%", height: "100%" }}
                            resizeMode="center"
                          />
                        </ImageBackground>
                      </ImageBackground>
                    </View>
                  </View>
                  <View style={styles.item}>
                    <ImageBackground
                      style={{ height: "100%", width: "95%" }}
                      source={require("../Assets/GUI_Parts_Free/Mini_background.png")}
                      resizeMode="center"
                    >
                      <ImageBackground
                        style={{ height: "100%", width: "95%" }}
                        source={require("../Assets/GUI_Parts_Free/Mini_frame0.png")}
                        resizeMode="center"
                      >
                        <Image
                          source={require("../Assets/Icons_Free/armor_icon.png")}
                          style={{ width: "91%", height: "100%" }}
                          resizeMode="center"
                        />
                      </ImageBackground>
                    </ImageBackground>
                  </View>
                  <View style={styles.item}>
                    <ImageBackground
                      style={{ height: "100%", width: "95%" }}
                      source={require("../Assets/GUI_Parts_Free/Mini_background.png")}
                      resizeMode="center"
                    >
                      <ImageBackground
                        style={{ height: "100%", width: "95%" }}
                        source={require("../Assets/GUI_Parts_Free/Mini_frame0.png")}
                        resizeMode="center"
                      >
                        <Image
                          source={require("../Assets/Icons_Free/armor_icon.png")}
                          style={{ width: "91%", height: "100%" }}
                          resizeMode="center"
                        />
                      </ImageBackground>
                    </ImageBackground>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{ flex: 1 }}>
            <ImageBackground
              source={require("../Assets/GUI_Parts_Free/barmid_ready.png")}
              style={{ width: "100%", height: "100%", overflow: "hidden" }}
              resizeMode="stretch"
            >
              <View style={{ padding: 10, flex: 1 }}>
                <View style={{ flex: 3 }}></View>
                <View style={{ flex: 2, flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={() => this.props.navigation.navigate('Inventory')}
                    >
                      <ImageBackground
                        source={require("../Assets/GUI_Parts_Free/button_ready_on.png")}
                        style={{ width: "100%", height: "100%" }}
                        resizeMode="center"
                      >
                        <View
                          style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text style={{ color: "gold" }}>View Inventory</Text>
                        </View>
                      </ImageBackground>
                    </TouchableHighlight>
                  </View>

                  <View style={{ flex: 1 }}>
                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={() => console.log("hi")}
                    >
                      <ImageBackground
                        source={require("../Assets/GUI_Parts_Free/button_ready_on.png")}
                        style={{ width: "100%", height: "100%" }}
                        resizeMode="center"
                      >
                        <View
                          style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text style={{ color: "gold" }}>Here I am</Text>
                        </View>
                      </ImageBackground>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  item: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 1 / 5,
    height: Dimensions.get("window").width / 4, // approximate a square
    width: Dimensions.get("window").width / 4,
  },
  title: {
    fontSize: 32,
  },
  itemInvisible: {
    backgroundColor: "transparent",
  },
  itemText: {
    color: "#fff",
  },
  checkOutBox: {
    flex: 3,
    backgroundColor: "#D3D3D3",
    borderRadius: 4,
    borderWidth: 10,
    borderColor: "#000000",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});

/*
<Image
                source={require("../Assets/GUI_Parts_Free/warrior_silhouette_man.png")}
                style={{ width: "100%", height: "100%", overflow: "hidden" }}
                resizeMode="cover"
              />
*/
