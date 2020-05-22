import React, { Component } from "react";
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import { Button, ButtonGroup, Icon, Header } from "react-native-elements";
import { TouchableHighlight } from "react-native-gesture-handler";
import * as Database from "../ItemsAndSpells/ItemsAndSpellsDatabase";
import { connect } from "react-redux";
import * as Interfaces from "../Interfaces/InterfaceIndex";
import * as StatHandler from '../Systems/StatHandler';

import { ItemTypes } from "../ItemsAndSpells/ItemsAndSpellsDatabase";
import { Types } from "../ItemsAndSpells/ItemTypes/Types";

class ShopScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedIndex: 0,
      selectedItem: {},
      selectedItemName: " ",
      selectedItemPrice: 0,
      playersGold: 1000,
      buttonSelected: "items",
      dummyItems: [],
      dummySpells: [],
      armors: [],
      weapons: [],
      blackMagic: [],
      whiteMagic: [],
    };
  }

  componentDidMount() {
    var swords = Database.swordDatabase.slice();
    var staffs = Database.staffDatabase.slice();
    var bows = Database.BowsDatabase.slice();
    var weapons = [...swords, ...staffs, ...bows];

    var bracers = Database.BracersDataBase.slice();
    var hats = Database.HatsDataBase.slice();
    var helms = Database.HelmsDataBase.slice();
    var lightArmors = Database.LightArmorsDataBase.slice();
    var robes = Database.RobesDataBase.slice();
    var shields = Database.ShieldDataBase.slice();
    var armors = [
      ...bracers,
      ...hats,
      ...helms,
      ...lightArmors,
      ...robes,
      ...shields,
    ];

    var blackMagic = Database.blackMagicSpellsDatabase.slice();

    var whiteMagic = Database.WhiteMagicDataBase.slice();

    this.setState({
      weapons,
      armors,
      blackMagic,
      whiteMagic,
    });
  }

  componentWillUnmount() {
    //console.log('componentWillUnmount - Shop')
  }

  getData() {
    switch (this.state.selectedIndex) {
      case 0:
        return this.state.weapons;
      case 1:
        return this.state.armors;
      case 2:
        return this.state.blackMagic;
      case 3:
        return this.state.whiteMagic;
    }
  }

  updateIndex(selectedIndex: number) {
    this.setState({ selectedIndex });
  }

  updateShopSummayScreen(selectedItem: Interfaces.ItemInterface) {
    this.setState({
      selectedItem,
      selectedItemName: selectedItem.Name,
      selectedItemPrice: selectedItem.Price,
    });
  }

  purchaseItem() {
    const itemType = this.state.selectedItem.Type;
    if (this.props.playersGold >= this.state.selectedItemPrice) {
      var cost: number = this.state.selectedItemPrice;
      this.props.decreaseGold(cost);
    }
    //StatHandler.handlePurchase(this.state.selectedItem);

    switch (itemType) {
      case Types.Bow:
        //this.props.buyItem(this.state.selectedItem);
        StatHandler.handleWeaponPurchase(this.state.selectedItem);
        break;
      case Types.Staff:
        //this.props.buyItem(this.state.selectedItem);
        StatHandler.handleWeaponPurchase(this.state.selectedItem);
        break;
      case Types.Sword:
        //this.props.buyItem(this.state.selectedItem);
        StatHandler.handleWeaponPurchase(this.state.selectedItem);
        break;
      case Types.Bracer:
        //this.props.buyItem(this.state.selectedItem);
        StatHandler.handleArmorPurchase(this.state.selectedItem);
        break;
      case Types.Hat:
        //this.props.buyItem(this.state.selectedItem);
        StatHandler.handleArmorPurchase(this.state.selectedItem);
        break;
      case Types.Helm:
        //this.props.buyItem(this.state.selectedItem);
        StatHandler.handleArmorPurchase(this.state.selectedItem);
        break;
      case Types.LightArmor:
        //this.props.buyItem(this.state.selectedItem);
        StatHandler.handleArmorPurchase(this.state.selectedItem);
        break;
      case Types.Robe:
        //this.props.buyItem(this.state.selectedItem);
        StatHandler.handleArmorPurchase(this.state.selectedItem);
        break;
      case Types.Shield:
        //this.props.buyItem(this.state.selectedItem);
        StatHandler.handleArmorPurchase(this.state.selectedItem);
        break;
      case Types.BlackMagic:
        //this.props.buySpell(this.state.selectedItem);
        StatHandler.handleBlackMagicSpellPurchase(this.state.selectedItem);
        break;
      case Types.WhiteMagic:
        //this.props.buyS(this.state.selectedItem);
        StatHandler.handleWhiteMagicSpellPurchase(this.state.selectedItem);
        break;
      default:
        console.error(
          "Error: The type of the purchased item, " +
            itemType +
            "cannot be found or does not exist in type database"
        );
    }
  }

  //Spells can use Item interfce due to duck typing
  renderItem(item: Interfaces.ItemInterface) {
    return (
      <TouchableHighlight onPress={() => this.updateShopSummayScreen(item)}>
        <View style={styles.item}>
          <ImageBackground
            style={{ height: "100%", width: "100%" }}
            source={item.Image}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text adjustsFontSizeToFit style={styles.itemText}>
                {item.Name}
              </Text>
              <Text style={styles.itemText}>{item.Price}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableHighlight>
    );
  }

  renderCurrencies() {
    return (
      <View style={{ flex: 1 }}>
        <Text>GOLD: {this.props.playersGold}</Text>
      </View>
    );
  }

  render() {
    const buttons = ["Weapons", "Armors", "Black\n Magic", "White\n Magic"];
    const { selectedIndex } = this.state;
    return (
      <View style={{ paddingTop: 25, flex: 1 }}>
        <Header
          containerStyle={{ backgroundColor: "#964b00" }}
          leftComponent={{
            icon: "menu",
            color: "#fff",
            onPress: () => this.props.navigation.openDrawer(),
          }}
          centerComponent={{ text: "SHOP", style: { color: "#fff" } }}
          rightComponent={this.renderCurrencies()}
        />
        <ButtonGroup
          onPress={(index) => this.updateIndex(index)}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 75,
           width: Dimensions.get('window').width }}
        />
        <View style={{ flex: 1 }}>
          <View style={{ flex: 4 }}>
            <FlatList
              keyExtractor={(item: Interfaces.ItemInterface) =>
                item.ID.toString()
              }
              numColumns={4}
              data={this.getData()}
              style={{
                flex: 1,
                marginVertical: 10,
              }}
              renderItem={({ item }) => this.renderItem(item)}
            />
          </View>

          <View style={{ flex: 3 }}>
            <View style={styles.checkOutBox}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <Text style={{ paddingBottom: 10 }}>
                  NAME : {this.state.selectedItemName}
                </Text>
                <Text>COST: {this.state.selectedItemPrice} </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <Text>HEALTH: {this.state.selectedItem.HealthModifier} </Text>
                <Text>ATTACK: {this.state.selectedItem.AttackModifier}</Text>
                <Text>
                  RESISTANCE: {this.state.selectedItem.ResistanceModifier}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <Text>DEFENCE: {this.state.selectedItem.DefenceModifier}</Text>
                <Text>MAGIC: {this.state.selectedItem.MagicModifier}</Text>
                <Text>MIND: {this.state.selectedItem.MindModifier}</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <Text>LUCK: +0 </Text>
                <Text>SPEED: +0</Text>
                <Text>COPIES OWNED: 0</Text>
              </View>
            </View>
            <Button
              onPress={() => this.purchaseItem()}
              style={{ flex: 2, paddingVertical: 10 }}
              title={
                this.state.playersGold > this.state.selectedItemPrice
                  ? "PURCHASE"
                  : "INSUFFICIENT FUNDS"
              }
            />
          </View>
        </View>
      </View>
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
    backgroundColor: "black",
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

function mapStateToProps(state: any) {
  return {
    selectedIndex: 0,
    selectedItem: {},
    selectedItemName: " ",
    selectedItemPrice: 0,
    playersGold: state.Party.Gold,
    buttonSelected: "items",
    dummyItems: [],
    dummySpells: [],
  };
}

function mapDispatchToProps(dispatch: any) {
  //console.log('printing dispatch',dispatch)
  return {
    buyItem: (item: any) => dispatch({ type: "addItem", item: item }),
    buySpell: (spell: any) => dispatch({ type: "addSpell", spell: spell }),
    decreaseGold: (gold: number) =>
      dispatch({ type: "decreaseGold", gold: gold }),

    //decreaseCounter: () => dispatch({type: 'decreaseCounter', name :'test2'})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopScreen);
