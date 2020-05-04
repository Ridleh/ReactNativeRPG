import React, { Component, useState } from "react";
import {
  Text,
  View,
  Dimensions,
  ImageBackground,
  FlatList,
} from "react-native";
import { Header, Button, Overlay, ListItem, ButtonGroup } from "react-native-elements";
import { connect } from "react-redux";
import * as StatHandler from "../Systems/StatHandler";
import * as Interfaces from "../Interfaces/InterfaceIndex";

const { height, width } = Dimensions.get("window");

class EditPartyMemberScreen extends Component<any, any> {
  navigation = this.props.navigation;
  partyMember = this.props.route.params.partyMember;

  constructor(props: any) {
    super(props);
    this.state = { 
      counter: 0, 
      showOverlay: false,
      showOverlaySpell: false,
      selectedIndex: 0,
      Names: [] };
    this.toggleItemsScreen = this.toggleItemsScreen.bind(this);
    this.toggleSpellsScreen = this.toggleSpellsScreen.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.handleEquipItem = this.handleEquipItem.bind(this);
    this.handleUnequipItem = this.handleUnequipItem.bind(this);
    this.isItemEquipped = this.isItemEquipped.bind(this);
    this.handleEquipSpell = this.handleEquipSpell.bind(this);
    this.handleUnequipSpell = this.handleUnequipSpell.bind(this);
    this.isSpellEquipped = this.isSpellEquipped.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
  }

  componentDidMount() {
    var Names: string[] = []
    this.props.party.forEach((partyMember: Interfaces.PartyMemberInterface)  => {
      Names.push(partyMember.Name);
    });
    this.setState({Names})
  }

  componentWillUnmount() {}

  toggleItemsScreen = () => {
    this.setState((prevState: { showOverlay: boolean }) => ({
      showOverlay: !prevState.showOverlay,
    }));
  };

  toggleSpellsScreen = () => {
    this.setState((prevState: { showOverlaySpell: boolean }) => ({
      showOverlaySpell: !prevState.showOverlaySpell,
    }));
  };

  handleEquipItem(item: Interfaces.ItemInterface) {
    if (StatHandler.canEquipItem(item)) {
      StatHandler.equipItem(this.props.party[this.state.selectedIndex], item);
      this.setState({});
    } else {
      console.warn("you cannot equip this item");
    }
  }

  handleUnequipItem(item: Interfaces.ItemInterface) {
    StatHandler.unequipItem(this.props.party[this.state.selectedIndex], item);
    this.setState({});
  }

  isItemEquipped(item: Interfaces.ItemInterface) {
    return StatHandler.isItemEquipped(this.props.party[this.state.selectedIndex], item);
  }

  updateIndex(selectedIndex: number){
    this.setState({selectedIndex});
  }

  handleEquipSpell(spell: Interfaces.SpellInterface) {
    if (StatHandler.canEquipSpell(spell)) {
      StatHandler.equipSpell(this.props.party[this.state.selectedIndex], spell);
      this.setState({});
    } else {
      console.warn("you cannot equip this spell");
    }
  }

  handleUnequipSpell(spell: Interfaces.SpellInterface) {
    StatHandler.unequipSpell(this.props.party[this.state.selectedIndex], spell);
    this.setState({});
  }

  isSpellEquipped(spell: Interfaces.SpellInterface) {
    return StatHandler.isSpellEquipped(this.props.party[this.state.selectedIndex], spell);
  }

  renderItems(item: Interfaces.ItemInterface) {
    return (
      <View style={{ flex: 1 }}>
        <ListItem
          title={item.Name}
          bottomDivider
          chevron
          checkmark={this.isItemEquipped(item)}
          onPress={() =>
            this.isItemEquipped(item)
              ? this.handleUnequipItem(item)
              : this.handleEquipItem(item)
          }
        />
      </View>
    );
  }

  renderSpells(spell: Interfaces.SpellInterface){
    return (
      <View style={{ flex: 1 }}>
        <ListItem
          title={spell.Name}
          bottomDivider
          chevron
          checkmark={this.isSpellEquipped(spell)}
          onPress={() =>
            this.isSpellEquipped(spell)
              ? this.handleUnequipSpell(spell)
              : this.handleEquipSpell(spell)
          }
        />
      </View>
    );
  }

  render() {
    const buttons = this.state.Names;
    const {selectedIndex} = this.state;

    return (
      <View>
        <ImageBackground
          source={require("../assets/Backgrounds/SampleBackgroundQuests.png")}
          style={{ height: height - 24, width: width }}
        >
          <Header
            containerStyle={{ backgroundColor: "#964b00" }}
            leftComponent={{
              icon: "menu",
              color: "#fff",
              onPress: () => this.props.navigation.openDrawer(),
            }}
            centerComponent={{
              text: "Edit Party Member",
              style: { color: "#fff" },
            }}
          />
          <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 55}}/>
          <View style={{ flex: 1 }}>
            <Overlay
              overlayStyle={{
                flexDirection: "column",
                backgroundColor: "chocolate",
                borderColor: "black",
                borderRadius: 20,
                borderWidth: 5,
              }}
              isVisible={this.state.showOverlay}
              onBackdropPress={() => this.toggleItemsScreen()}
              animationType="slide"
            >
              <View>
                <FlatList
                  data={this.props.items}
                  renderItem={({item}) => this.renderItems(item)}
                  keyExtractor={(item: Interfaces.ItemInterface) =>
                    item.ID.toString()
                  }
                  scrollEnabled
                />
                <Text>test</Text>
                <Button title="Back" onPress={() => this.toggleItemsScreen()} />
              </View>
            </Overlay>
            <Overlay
              overlayStyle={{
                flexDirection: "column",
                backgroundColor: "chocolate",
                borderColor: "black",
                borderRadius: 20,
                borderWidth: 5,
              }}
              isVisible={this.state.showOverlaySpell}
              onBackdropPress={() => this.toggleSpellsScreen()}
              animationType="slide"
            >
              <View>
                <FlatList
                  data={this.props.spells}
                  renderItem={({item}) => this.renderSpells(item)}
                  keyExtractor={(item: Interfaces.SpellInterface) =>
                    item.ID
                  }
                  scrollEnabled
                />
                <Text>test</Text>
                <Button title="Back" onPress={() => this.toggleSpellsScreen()} />
              </View>
            </Overlay>
            <View
              style={{
                flex: 9,
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Text>Name: {this.props.party[this.state.selectedIndex].Name}</Text>
              <Text>Level: {this.props.party[this.state.selectedIndex].Level}</Text>
              <Text>
                Health: {this.props.party[this.state.selectedIndex].CurrentHealth}/
                {this.props.party[this.state.selectedIndex].Health}
              </Text>
              <Text>
                Mana: {this.props.party[this.state.selectedIndex].CurrentMana}/{this.props.party[this.state.selectedIndex].Mana}
              </Text>
              <Text>Attack: {this.props.party[this.state.selectedIndex].Attack}</Text>
              <Text>Magic: {this.props.party[this.state.selectedIndex].Magic}</Text>
              <Text>Mind: {this.props.party[this.state.selectedIndex].Mind}</Text>
              <Text>Resistance: {this.props.party[this.state.selectedIndex].Resistance}</Text>
              <Text>Defence: {this.props.party[this.state.selectedIndex].Defence}</Text>
              <Text>Speed: {this.props.party[this.state.selectedIndex].Speed}</Text>
              <Text>Luck: {this.props.party[this.state.selectedIndex].Luck}</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            ></View>
          </View>
          <Button
            title="Equip or Unequip Items"
            onPress={() => this.toggleItemsScreen()}
          />
          <Button
            title="Equip or Unequip Spells"
            onPress={() => this.toggleSpellsScreen()}
          />

          <Button title="Go Back" onPress={() => this.navigation.pop()} />
        </ImageBackground>
      </View>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    party: state.Party.Party,
    items: state.Inventory.Items,
    spells: state.Inventory.Spells
  };
}

function mapDispatchToProps(dispatch: any) {
  //console.log('printing dispatch',dispatch)
  return {
    giveStamina: (stamina: number) =>
      dispatch({ type: "giveStamina", stamina: stamina }),

    //decreaseCounter: () => dispatch({type: 'decreaseCounter', name :'test2'})
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPartyMemberScreen);
