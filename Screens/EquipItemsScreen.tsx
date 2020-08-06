import React, { Component } from "react";
import {
  BackgroundContainer,
  Header,
  RenderItemsComponent,
  StatsContainerMid,
  ButtonWide,
} from "../Components/ComponentIndex";
import { View } from "react-native";
import styles from "../StyleSheet/Styles";
import { getImageFromIconsFreeMap } from "../AssetMaps/IconsFreeMap";
import { connect } from "react-redux";

class EquipItemsScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: [],
      selectedItem: {},
      extraData: {},
    };
  }

  componentDidMount = (): void => {
    const options: string[] = [
      "helmet",
      "shoulder",
      "chest",
      "pant",
      "boot",
      "necklace",
      "cape",
      "bracer",
      "glove",
      "weapon",
    ];
    let items: Item[] = [];
    for (let i = 0; i < 70; i++) {
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
        type: options[i % 10],
        image: getImageFromIconsFreeMap("armor_icon.png"),
      };
      items.push(item);
    }
    this.setState({
      items,
      extraData: this.props.route.params.extraProps,
    });
  };

  equipItem = (): void => {
    const item = this.state.selectedItem;
    switch (this.state.selectedItem.type) {
      case "helmet":
        //this.props.unequipHelmet();
        this.props.equipHelmet(item);
        break;
      case "shoulder":
        //this.props.unequipShoulder();
        this.props.equipShoulder(item);
        break;
      case "chest":
        //this.props.unequipChest();
        this.props.equipChest(item);
        break;
      case "pant":
        //this.props.equipChest();
        this.props.equipChest(item);
        break;
      case "boot":
        //this.props.unequipBoot();
        this.props.equipBoot(item);
        break;
      case "necklace":
        //this.props.unequipNecklace();
        this.props.equipNecklace(item);
        break;
      case "cape":
        //this.props.unequipCape();
        this.props.equipCape(item);
        break;
      case "bracer":
        //this.props.equipBracer();
        this.props.equipBracer(item);
        break;
      case "glove":
        //this.props.equipGlove();
        this.props.equipGlove(item);
        break;
      case "weapon":
        //this.props.equipWeapon();
        this.props.equipWeapon(item);
        break;
      default:
        console.warn("Warning: Item has incorrect type");
    }
    this.props.updateCharacterStats();
    this.props.navigation.pop();
  };

  itemPressed = (item: Item): void => {
    console.log(item.type);
    this.setState({ selectedItem: item });
  };

  render() {
    return (
      <BackgroundContainer>
        <View style={styles.header}>
          <Header title={"Equip Item"} />
        </View>
        <View style={[styles.flexFullColumn, { padding: 15 }]}>
          <View style={{ flex: 2 }}>
            <StatsContainerMid
            selectedItem={this.state.selectedItem}/>
          </View>
          <View style={{ flex: 5 }}>
            <RenderItemsComponent
              items={this.state.items}
              handlePress={this.itemPressed}
            />
          </View>
          <View style={{ flex: 1 }}>
            <ButtonWide
            title={"Equip Item"}
            handlePress={this.equipItem}/>
          </View>
        </View>
      </BackgroundContainer> 
    );
  }
}

function mapStateToProps(state: any) {
  return {
    character: state.Character,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    equipHelmet: (item: Item) => dispatch({ type: "equipHelmet", item: item }),
    equipShoulder: (item: Item) =>
      dispatch({ type: "equipShoulder", item: item }),
    equipChest: (item: Item) => dispatch({ type: "equipChest", item: item }),
    equipPant: (item: Item) => dispatch({ type: "equipPant", item: item }),
    equipBoot: (item: Item) => dispatch({ type: "equipBoot", item: item }),
    equipNecklace: (item: Item) =>
      dispatch({ type: "equipNecklace", item: item }),
    equipCape: (item: Item) => dispatch({ type: "equipCape", item: item }),
    equipBracer: (item: Item) => dispatch({ type: "equipBracer", item: item }),
    equipGlove: (item: Item) => dispatch({ type: "equipGlove", item: item }),
    equipWeapon: (item: Item) => dispatch({ type: "equipWeapon", item: item }),

    unequipHelmet: () => dispatch({ type: "unequipHelmet" }),
    unequipShoulder: () => dispatch({ type: "unequipShoulder" }),
    unequipChest: () => dispatch({ type: "unequipChest" }),
    unequipPant: () => dispatch({ type: "unequipPant" }),
    unequipBoot: () => dispatch({ type: "unequipBoot" }),
    unequipNecklace: () => dispatch({ type: "unequipNecklace" }),
    unequipCape: () => dispatch({ type: "unequipCape" }),
    unequipBracer: () => dispatch({ type: "unequipBracer" }),
    unequipGlove: () => dispatch({ type: "unequipGlove" }),
    unequipWeapon: () => dispatch({ type: "unequipWeapon" }),

    updateCharacterStats: () => dispatch({ type: "updateCharacterStats" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipItemsScreen);
