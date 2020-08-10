import React, { Component } from "react";
import { Text, View } from "react-native";

import {
  BackgroundContainer,
  Header,
  RenderItemsComponent,
  StatsContainerMid,
  ButtonWide,
} from "../Components/ComponentIndex";
import styles from "../StyleSheet/Styles";
import { ButtonGroup, Overlay } from "react-native-elements";
import { getArmorsMapArray } from "../AssetMaps/ArmorsMap";
import { getWeaponMapArray } from "../AssetMaps/WeaponsMap";

export default class ShopScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      weapons: [],
      armors: [],
      selectedIndex: 0,
      selectedItem: {},
      showOverlay: false,
    };
  }

  componentDidMount() {
    const weaponsList: ImageMapData[] = getArmorsMapArray();
    const armorsList: ImageMapData[] = getWeaponMapArray();
    var weapons: Item[] = [];
    var armors: Item[] = [];
    for (var i = 0; i < 50; i++) {
      let item: Item = {
        Health: Math.round(Math.random() * 400),
        Attack: Math.round(Math.random() * 400),
        Defence: Math.round(Math.random() * 400),
        Magic: Math.round(Math.random() * 400),
        Resistance: Math.round(Math.random() * 400),
        Mind: Math.round(Math.random() * 400),
        CritChance: Math.round(Math.random() * 100),
        EvasionChance: Math.round(Math.random() * 100),
        Speed: Math.round(Math.random() * 100),
        id: i,
        type: "glove",
        image: armorsList[Math.round(Math.random() * 499)].src,
      };
      armors.push(item);
    }

    for (var i = 0; i < 50; i++) {
      let item: Item = {
        Health: Math.round(Math.random() * 400),
        Attack: Math.round(Math.random() * 400),
        Defence: Math.round(Math.random() * 400),
        Magic: Math.round(Math.random() * 400),
        Resistance: Math.round(Math.random() * 400),
        Mind: Math.round(Math.random() * 400),
        CritChance: Math.round(Math.random() * 100),
        EvasionChance: Math.round(Math.random() * 100),
        Speed: Math.round(Math.random() * 100),
        id: i,
        type: "weapon",
        image: weaponsList[Math.round(Math.random() * 499)].src,
      };
      weapons.push(item);
    }

    this.setState({
      weapons: weapons,
      armors: armors,
    });
  }

  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  updateIndex(selectedIndex: number) {
    this.setState({ selectedIndex });
  }

  getData() {
    return this.state.selectedIndex === 0
      ? this.state.weapons
      : this.state.armors;
  }

  toggleOverlay = () => {
    this.setState((prevState: { showOverlay: boolean }) => ({
      showOverlay: !prevState.showOverlay,
    }));
  };

  itemSelected = (item: Item): void => {
    this.setState({ selectedItem: item });
  };

  buyItem = (): void => {
    console.log("pressed");
  };

  render() {
    const buttons = ["Weapons", "Armor"];
    const { selectedIndex } = this.state;

    return (
      <BackgroundContainer>
        <View style={styles.header}>
          <Header
            title={"Shop"}
            subtitle={"Tap and hold an item for more details"}
          />
        </View>
        <View style={[styles.flexFullColumn, { padding: 15 }]}>
          <View>
            <ButtonGroup
              onPress={this.updateIndex.bind(this)}
              selectedIndex={selectedIndex}
              buttons={buttons}
              containerStyle={{ height: 35 }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <StatsContainerMid selectedItem={this.state.selectedItem} />
          </View>
          <View style={{ flex: 4 }}>
            <View style={{flex: 6}}>
            <RenderItemsComponent
              items={this.getData()}
              handlePress={this.itemSelected}
            />
            </View>
            <View style={{flex:1}}>
            <ButtonWide title={"Equip Item"} handlePress={this.buyItem} />
            </View>
          </View>
        </View>
        <Overlay
          isVisible={this.state.showOverlay}
          onBackdropPress={this.toggleOverlay}
        >
          <Text>This is buy overlay</Text>
        </Overlay>
      </BackgroundContainer>
    );
  }
}
