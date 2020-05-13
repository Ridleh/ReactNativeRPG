import React, { Component, useState } from "react";
import {
  Text,
  View,
  Dimensions,
  ImageBackground,
  FlatList,
  Image,
  ListView,
} from "react-native";
import {
  Header,
  Button,
  Overlay,
  ListItem,
  ButtonGroup,
} from "react-native-elements";
import { connect } from "react-redux";
import * as StatHandler from "../Systems/StatHandler";
import * as Interfaces from "../Interfaces/InterfaceIndex";
import { Grid, Row, Col } from "react-native-easy-grid";
import { TouchableHighlight } from "react-native-gesture-handler";

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
      Names: [],
      partyMember: [],
    };
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
    this.renderSpellsEquip = this.renderSpellsEquip.bind(this);
    this.renderItemsEquip = this.renderItemsEquip.bind(this);
  }

  componentDidMount() {
    var Names: string[] = [];
    this.props.party.forEach((partyMember: Interfaces.PartyMemberInterface) => {
      Names.push(partyMember.Name);
    });
    this.setState({ Names, partyMember: this.props.party[0] });
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
    return StatHandler.isItemEquipped(
      this.props.party[this.state.selectedIndex],
      item
    );
  }

  updateIndex(selectedIndex: number) {
    this.setState({
      selectedIndex,
      partyMember: this.props.party[selectedIndex],
    });
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
    return StatHandler.isSpellEquipped(
      this.props.party[this.state.selectedIndex],
      spell
    );
  }

  renderItemsEquip(item: Interfaces.ItemInterface) {
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

  renderItems(spell: Interfaces.ItemInterface) {
    return (
      <TouchableHighlight onPress={() => this.toggleSpellsScreen()}>
        <Image
          source={spell.Image}
          style={{
            width: 75,
            height: 75,
          }}
        />
      </TouchableHighlight>
    );
  }

  renderSpells(spell: Interfaces.SpellInterface) {
    return (
      <TouchableHighlight onPress={() => this.toggleSpellsScreen()}>
        <Image
          source={spell.Image}
          style={{
            width: 75,
            height: 75,
          }}
        />
      </TouchableHighlight>
    );
  }

  renderSpellsEquip(spell: Interfaces.SpellInterface) {
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
    const { selectedIndex } = this.state;

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
            containerStyle={{ height: 55 }}
          />
          <Overlay
            isVisible={this.state.showOverlaySpell}
            onBackdropPress={this.toggleSpellsScreen}
            overlayStyle={{
              flexDirection: "column",
              backgroundColor: "chocolate",
              borderColor: "black",
              borderRadius: 20,
              borderWidth: 5,
            }}
            animationType="slide"
          >
            <View>
              <FlatList
                data={this.props.spells}
                renderItem={({ item }) => this.renderSpellsEquip(item)}
                keyExtractor={(item: Interfaces.SpellInterface) => item.ID}
              />
            </View>
          </Overlay>
          <Overlay
            isVisible={this.state.showOverlay}
            onBackdropPress={this.toggleItemsScreen}
            overlayStyle={{
              flexDirection: "column",
              backgroundColor: "chocolate",
              borderColor: "black",
              borderRadius: 20,
              borderWidth: 5,
            }}
            animationType="slide"
          >
            <View>
              <FlatList
                data={this.props.items}
                renderItem={({ item }) => this.renderItemsEquip(item)}
                keyExtractor={(item: Interfaces.ItemInterface) => item.ID}
              />
            </View>
          </Overlay>

          <View style={{ flex: 1, flexDirection: "column" }}>
            <View
              style={{
                alignItems: "center",
                backgroundColor: "powderblue",
                justifyContent: "center",
              }}
            >
              <Image
                source={this.state.partyMember.Image}
                style={{
                  height: 112,
                  width: 60,
                }}
              />
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: "skyblue",
                flexDirection: "row",
              }}
            >
              <View>
                <Text>Name: {this.state.partyMember.Name}</Text>
                <Text>Level: {this.state.partyMember.Level}</Text>
                <Text>Health: {this.state.partyMember.Health}</Text>
                <Text>Attack: {this.state.partyMember.Attack}</Text>
                <Text>Defense: {this.state.partyMember.Defense}</Text>
                <Text>Magic: {this.state.partyMember.Magic}</Text>
              </View>
              <View>
                <Text>Resistance: {this.state.partyMember.Resistance}</Text>
                <Text>Mind: {this.state.partyMember.Mind}</Text>
                <Text>Accuracy: {this.state.partyMember.Accuracy}</Text>
                <Text>Evasion: {this.state.partyMember.Evasion}</Text>
                <Text>Speed: {this.state.partyMember.Speed}</Text>
              </View>
            </View>
            <View>
              <View
                style={{ justifyContent: "space-evenly", alignItems: "center" }}
              >
                <Button
                  title="Edit Spells"
                  onPress={() => this.toggleSpellsScreen()}
                />
                <FlatList
                  horizontal={true}
                  data={this.state.partyMember.Spells}
                  renderItem={({ item }) => this.renderSpells(item)}
                  keyExtractor={(item: Interfaces.SpellInterface) => item.ID}
                />
              </View>
              <View
                style={{ justifyContent: "space-evenly", alignItems: "center" }}
              >
                <Button
                  title="Edit Items"
                  onPress={() => this.toggleItemsScreen()}
                />
                <FlatList
                  horizontal={true}
                  data={this.state.partyMember.Items}
                  renderItem={({ item }) => this.renderItems(item)}
                  keyExtractor={(item: Interfaces.ItemInterface) => item.ID}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    party: state.Party.Party,
    items: state.Inventory.Items,
    spells: state.Inventory.Spells,
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
