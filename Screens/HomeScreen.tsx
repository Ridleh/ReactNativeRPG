import React, { Component, useState } from "react";
import { Text, View, Dimensions, ImageBackground, Image } from "react-native";
import { Header, Button } from "react-native-elements";
import { DeleteState } from "../Redux/Store";
import { WebView } from "react-native-webview";
import { TouchableOpacity } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");
const imageHeight = Math.round((width * 18.5) / 9);

export default class HomeScreen extends Component<any, any> {
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

  deleteGameStateFromStorage() {
    DeleteState();
  }

  getBackgroundImage() {
    console.log(width, height);
    const folderName: string[] = ["CritRole_Mega", "CritRole_NPC", "MX"];
    const imageName: string[] = [
      "Essek_M1",
      "Gilmore_M1",
      "Kimallura_M",
      "Reani_M1",
      "SurpriseVax_M",
      "Trinket_M1",
    ];
    //const imageIndex: number = Math.random() * imageName.length;
    //const image: string = '../Assets/Wallpapers/CritRole_NPC/' + imageName[imageIndex] + '.jpg';
    //const image: string = "../";
    return require("../Assets/Wallpapers/MX/Beau_M1.jpg");
  }

  render() {
    return (
      /*
      <WebView
        source={{uri: 'https://alignmobiledev.aligntoday.com'}}
        style={{marginTop: 20}}/>
        */
      <View style={{ flex: 1, backgroundColor: "black", paddingTop:25 }}>
        <Header
        placement='left'
        leftComponent={{text:'Welcome', style:{color: 'white'}}}
        backgroundColor='#180D01'
        />
        <ImageBackground
          source={require("../Assets/GUI_Parts_Free/bar_ready.png")}
          style={{ width: "100%", height: "100%", overflow: "hidden" }}
          resizeMode="stretch"
        >
          <View style={{alignItems:'center', justifyContent:'center', paddingTop:7}}>
          
          <TouchableOpacity
            onPress={() => this.deleteGameStateFromStorage()}
          >
            <ImageBackground
            source={require('../Assets/GUI_Parts_Free/button_ready_on.png')}
            style={{width: 200, height: 100}}
            >
              
            </ImageBackground>
          </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
