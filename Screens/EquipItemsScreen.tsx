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
    };
  }

  componentDidMount = (): void => {
    let items: Item[] = this.getItemsFromState();
    this.setState({
      items,
    });
  };

  getItemsFromState = (): Item[] => {
    const { leftSide, index } = this.props.route.params.extraProps;
    const inventory: Inventory = this.props.inventory;
    //console.log(this.props);
    let returnItems: Item[] = [];
    switch (index) {
      case 0:
        returnItems = leftSide ? inventory.Helmets : inventory.Necklaces;
        break;
      case 1:
        returnItems = leftSide ? inventory.Shoulders : inventory.Capes;
        break;
      case 2:
        returnItems = leftSide ? inventory.Chests : inventory.Bracers;
        break;
      case 3:
        returnItems = leftSide ? inventory.Pants : inventory.Gloves;
        break;
      case 4:
        returnItems = leftSide ? inventory.Boots : inventory.Weapons;
        break;
      default:
        console.warn("Error: invalid index passed to EquipItemsScreen:", index);
    }
    return returnItems;
  };

  equipItem = (): void => {
    const item: Item = this.state.selectedItem;
    switch (item.type) {
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
        this.props.equipPant(item);
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
      case "arrow": //fix later
        this.props.equipWeapon(item);
        break;
      case "axe":
        this.props.equipWeapon(item);
        break;
      case "bolt": //fix later
        this.props.equipWeapon(item);
        break;
      case "book":
        this.props.equipWeapon(item);
        break;
      case "bow":
        this.props.equipWeapon(item);
        break;
      case "crossbow":
        this.props.equipWeapon(item);
        break;
      case "dagger":
        this.props.equipWeapon(item);
        break;
      case "hammer":
        this.props.equipWeapon(item);
        break;
      case "scythe":
        this.props.equipWeapon(item);
        break;
      case "shield":
        this.props.equipWeapon(item);
        break;
      case "spear":
        this.props.equipWeapon(item);
        break;
      case "staff":
        this.props.equipWeapon(item);
        break;
      case "sword":
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
            <StatsContainerMid selectedItem={this.state.selectedItem} />
          </View>
          <View style={{ flex: 5 }}>
            <RenderItemsComponent
              items={this.state.items}
              handlePress={this.itemPressed}
            />
          </View>
          <View style={{ flex: 1 }}>
            <ButtonWide title={"Equip Item"} handlePress={this.equipItem} />
          </View>
        </View>
      </BackgroundContainer>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    character: state.Character,
    inventory: state.Inventory,
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

    buyHelmet: (item: Item) => dispatch({ type: "buyHelmet", item: item }),
    buyShoulder: (item: Item) => dispatch({ type: "buyShoulder", item: item }),
    buyChest: (item: Item) => dispatch({ type: "buyChest", item: item }),
    buyPant: (item: Item) => dispatch({ type: "buyPant", item: item }),
    buyBoot: (item: Item) => dispatch({ type: "buyBoot", item: item }),
    buyNecklace: (item: Item) => dispatch({ type: "buyNecklace", item: item }),
    buyCape: (item: Item) => dispatch({ type: "buyCape", item: item }),
    buyBracer: (item: Item) => dispatch({ type: "buyBracer", item: item }),
    buyGlove: (item: Item) => dispatch({ type: "buyGlove", item: item }),
    buyWeapon: (item: Item) => dispatch({ type: "buyWeapon", item: item }),
  

    updateCharacterStats: () => dispatch({ type: "updateCharacterStats" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipItemsScreen);
