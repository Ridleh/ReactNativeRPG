import React, { Component } from "react";
import { Text, View, Dimensions, ImageBackground, Image, TouchableHighlight } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import styles from "../StyleSheet/Styles";
import {
  BackgroundContainer,
  MidBarReadyContainer,
  HeaderWithButton,
  RenderItemsComponent,
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
        <View style={[styles.flexFullColumn,{padding:15}]}>
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
            containerStyle={{ height: 35 }}
          />
          <RenderItemsComponent
            items={this.getData()}/>
        </View>
      </BackgroundContainer>
    );
  }
}
