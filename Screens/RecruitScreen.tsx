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
import {
  swordDatabase,
  staffDatabase,
  blackMagicSpellsDatabase,
  CoreClassDatabase
} from "../ItemsAndSpells/ItemsAndSpellsDatabase";
import { connect } from "react-redux";
import * as Interfaces from "../Interfaces/InterfaceIndex";
import * as StatHandler from "../Utility/StatHandler";

import { ItemTypes } from "../ItemsAndSpells/ItemsAndSpellsDatabase";
//import {swordDatabase} from '../ItemsAndSpells/Weapons/Swords'
//import {staffDatabase} from '../ItemsAndSpells/Weapons/Staffs'

class RecruitScreen extends Component<any, any> {
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
      classes: []
    };
  }

  componentDidMount() {
    var swords = swordDatabase.slice();
    var staffs = staffDatabase.slice();
    var coreClasses : Interfaces.PartyMemberInterface[] = CoreClassDatabase.slice();

    var weaponsAndArmor = [...swords, ...staffs];

    var blackMagicSpells = blackMagicSpellsDatabase.slice();
    var spells = [...blackMagicSpells];

    this.setState({
      classes : coreClasses
    });
  }

  componentWillUnmount() {
    //console.log('componentWillUnmount - Shop')
  }

  getData() {
    return this.state.classes
  }

  updateIndex(selectedIndex: number) {
    //console.log(selectedIndex)
    this.setState({ selectedIndex });
  }

  updateShopSummayScreen(selectedItem: Interfaces.ItemInterface) {
    this.setState({
      selectedItem,
      selectedItemName: selectedItem.Name,
      selectedItemPrice: 100,
    });
  }

  purchaseItem() {
    const itemType = this.state.selectedItem.Type;
    if (this.props.playersGold >= this.state.selectedItemPrice) {
      var cost: number = this.state.selectedItemPrice
      this.props.decreaseGold(cost);
      //this.props.buyCharacter(this.state.selectedItem);
      StatHandler.addCharacterToCharactersOwnedList(this.state.selectedItem)
      if( !StatHandler.isPartyFull() ){
        StatHandler.addCharacterToParty(this.state.selectedItem);
      }
    }
  }

  component1 = () => <Text>Core Classes</Text>;
  component2 = () => <Text>specialists</Text>;

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
              <Text style={styles.itemText}>{100}</Text>
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
    const buttons = [
      { element: this.component1 },
      { element: this.component2 },
    ];
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
          containerStyle={{ height: 75 }}
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
    backgroundColor: "#4D243D",
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
    decreaseGold: (gold: number) => dispatch({ type: "decreaseGold", gold: gold }),
    //buyCharacter: (character: Interfaces.PartyMemberInterface) => dispatch({type:'addPartyMember', partyMember: character}),

    //decreaseCounter: () => dispatch({type: 'decreaseCounter', name :'test2'})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecruitScreen);
