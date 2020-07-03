import React, { Component } from "react";
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  SectionList,
} from "react-native";

import {
  HeaderWithButton,
  BackgroundContainer,
  Readybutton
} from "./Components/ComponentIndex";
import styles from "../StyleSheet/Styles";
import { ListItem, Overlay } from "react-native-elements";
import { getImage } from "../AssetIndex/GUIPartsIndex";

export default class ShopScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [
        {
          title: "Story Quests",
          data: ["Story Quest I", "Story Quest II", "Story Quest III"],
        },
        {
          title: "Boss Fights",
          data: ["Boss Fight I", "Boss Fight II", "Boss Fight III"],
        },
        {
          title: "Kill Quests",
          data: ["Kill Quest I", "Kill Quest II", "Kill Quest III"],
        },
        {
          title: "Expeditions",
          data: ["Expedition I", "Expedition II"],
        },
      ],
      showOverlay: false,
    };
  }

  navigateToPreviousScreen = () => {
    this.props.navigation.navigate('Home');
  };

  toggleOverlay = () => {
    this.setState((prevState: { showOverlay: boolean }) => ({
      showOverlay: !prevState.showOverlay,
    }));
  };

  buttonTest = () => {
    console.log('weird');
  }

  renderItem = (item: any) => {
    return (
      <ListItem
        containerStyle={{
          backgroundColor: "chocolate",
          borderRadius: 12,
          marginBottom: 10,
        }}
        title={item}
        subtitle="Stamina: 20   Difficulty: 10"
        bottomDivider
        chevron
        onPress={this.toggleOverlay}
      />
    );
  };

  render() {
    return (
      <BackgroundContainer>
        <View style={styles.header}>
          <HeaderWithButton
            handlePress={this.navigateToPreviousScreen}
            buttonLabel={"Go Home"}
            header={"Quests"}
          />
        </View>
        <View style={styles.flexFull}>
        <Readybutton
            label={'Begin'}
            handlePress={this.buttonTest}
            />
          <SectionList
            sections={this.state.data}
            keyExtractor={(item: any, index: number) => item + index}
            renderItem={({ item }) => this.renderItem(item)}
            renderSectionHeader={({ section: { title } }) => (
              <Text
                style={{
                  fontSize: 32,
                  color: "white",
                }}
              >
                {title}
              </Text>
            )}
          />
        </View>
        <Overlay
          isVisible={this.state.showOverlay}
          overlayStyle={{
            flexDirection: "column",
            backgroundColor: "transparent",
            borderColor: "black",
            borderRadius: 20,
          }}
          onBackdropPress={this.toggleOverlay}
          animationType="fade"
        >
          <BackgroundContainer>
            <View style={styles.header}>
              <ImageBackground
                source={getImage("nameBar3")}
                style={{ width: "100%", height: "100%", overflow: "hidden" }}
                resizeMode="stretch"
              >
                <View style={styles.center}>
                  <Text
                    style={{
                      color: "gold",
                    }}
                  >
                    Description
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View
            style={styles.flexFullColumn}>
              <Text style={{color: 'white'}}>Description</Text>
            </View>
            <View style={{
              width: '100%',
              height: '15%',
              flexDirection:'row'
            }}>
            <Readybutton
            label={'Begin'}
            handlePress={this.toggleOverlay}
            />
            <Readybutton
            label={'Cancel'}
            handlePress={this.toggleOverlay}
            />
            </View>
          </BackgroundContainer>
        </Overlay>
      </BackgroundContainer>
    );
  }
}
