import React, { Component } from "react";
import { Text, View, Dimensions, ImageBackground, Image, TouchableHighlight } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import styles from "../StyleSheet/Styles";
import {
  BackgroundContainer,
  MidBarReadyContainer,
  HeaderWithButton,
} from "../Components/ComponentIndex";
import MidBarReady from "../Components/MidBarReadyContainer";
import { getImageFromUIMap } from "../AssetMaps/UIMap";
import { ButtonGroup, Overlay } from "react-native-elements";
import { getImageFromIconsFreeMap } from "../AssetMaps/IconsFreeMap";

export default class InventoryScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      weaponsArray: [],
      armorArray: [],
      selectedIndex: 0,
      showOverlay: false
    };
  }
  componentDidMount() {
    var weaponsArray: any[] = [];
    for (var i = 0; i < 49; i++) {
      const item: any = {
        name: 'weapon ' + i.toString(),
        image: getImageFromIconsFreeMap('weapon_icon.png'),
        id: i.toString()
      }
      weaponsArray.push(item);
    }

    var armorArray: any[] = [];
    for (var i = 0; i < 49; i++) {
      const item: any = {
        name: 'armor ' + i.toString(),
        image: getImageFromIconsFreeMap('armor_icon.png'),
        id: i.toString()
      }
      armorArray.push(item);
      this.setState({weaponsArray,armorArray})
    }
  }

  navigateToPreviousScreen = () => {
    this.props.navigation.pop();
  };

  updateIndex(selectedIndex: number) {
    this.setState({ selectedIndex });
  }

  getData(){
    const selectedIndex: number = this.state.selectedIndex;
    const armors: any[] = this.state.armorArray;
    const weapons: any[] = this.state.weaponsArray;
    return selectedIndex === 0 ? weapons : armors 
  }

  toggleOverlay = () => {
    this.setState((prevState: { showOverlay: boolean }) => ({
      showOverlay: !prevState.showOverlay,
    }));
  };

  renderList(item: any) {
    return (
      
      <View
        style={{
          backgroundColor: "black",
          alignItems: "center",
          justifyContent: "center",
          margin: 2,
          flex: 1,
          height: Dimensions.get("window").width / 4, // approximate a square
          width: Dimensions.get("window").width / 4,
        }}
      >
        <ImageBackground
          style={{ height: "100%", width: "100%" }}
          source={getImageFromUIMap("Mini_background.png")}
          resizeMode="center"
        >
          <ImageBackground
            style={{ height: "100%", width: "100%" }}
            source={getImageFromUIMap("Mini_frame0.png")}
            resizeMode="stretch"
          >
            <TouchableHighlight
            onPress={this.toggleOverlay}>
              <Image
                source={item.image}
                style={{ width: "100%", height: "100%" }}
                resizeMode="center"
              />
              </TouchableHighlight>
          </ImageBackground>
        </ImageBackground>
      </View>
    );
  }

  render() {
    const buttons = ["Weapons", "Armor"];
    const { selectedIndex } = this.state;
    return (
      <BackgroundContainer>
        <Overlay
        animationType="fade"
        onBackdropPress={this.toggleOverlay}
        isVisible={this.state.showOverlay}>
          <Text>Overlay screen</Text>
        </Overlay>
        <View style={styles.flexFullColumn}>
          <View style={styles.header}>
            <HeaderWithButton
              handlePress={this.navigateToPreviousScreen}
              buttonLabel={"Go Back"}
              header={"Inventory"}
            />
          </View>
          <ButtonGroup
            onPress={this.updateIndex.bind(this)}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ height: '8%' }}
          />
          <MidBarReady>
            <View style={styles.listPadding}>
              <FlatList
                indicatorStyle="white"
                numColumns={4}
                data={this.getData()}
                renderItem={({ item }) => this.renderList(item)}
                keyExtractor={item => item.id}
              />
            </View>
          </MidBarReady>
        </View>
      </BackgroundContainer>
    );
  }
}
