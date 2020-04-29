import React, { Component, useState } from "react";
import {
  Text,
  View,
  Dimensions,
  ImageBackground,
  FlatList,
} from "react-native";
import { Header, Button, Overlay, ListItem } from "react-native-elements";
import { connect } from "react-redux";
import * as StatHandler from "../Utility/StatHandler";
import * as Interfaces from "../Interfaces/InterfaceIndex";

const { height, width } = Dimensions.get("window");

class EditPartyMemberScreen extends Component<any, any> {
  navigation = this.props.navigation;
  partyMember = this.props.route.params.partyMember;

  constructor(props: any) {
    super(props);
    this.state = { counter: 0, showOverlay: false };
    this.toggleItemsScreen = this.toggleItemsScreen.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.handleEquipItem = this.handleEquipItem.bind(this);
    this.handleUnequipItem = this.handleUnequipItem.bind(this);
    this.isItemEquipped = this.isItemEquipped.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  toggleItemsScreen = () => {
    this.setState((prevState: { showOverlay: boolean }) => ({
      showOverlay: !prevState.showOverlay,
    }));
  };

  handleEquipItem(item: Interfaces.ItemInterface) {
    StatHandler.equipItem(this.partyMember, item);
    this.setState({});
  }

  handleUnequipItem(item: Interfaces.ItemInterface) {
    StatHandler.unequipItem(this.partyMember, item);
    this.setState({});
  }

  isItemEquipped(item: Interfaces.ItemInterface) {
    return StatHandler.isItemEquipped(this.partyMember, item);
  }

  renderItems(item: any) {
    return (
      <View style={{ flex: 1 }}>
        <ListItem
          title={item.item.Name}
          bottomDivider
          chevron
          checkmark={this.isItemEquipped(item.item)}
          onPress={() =>
            this.isItemEquipped(item.item)
              ? this.handleUnequipItem(item.item)
              : this.handleEquipItem(item.item)
          }
        />
      </View>
    );
  }

  render() {
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
                  renderItem={(item) => this.renderItems(item)}
                  keyExtractor={(item: Interfaces.ItemInterface) =>
                    item.ID.toString()
                  }
                  scrollEnabled
                />
                <Text>test</Text>
                <Button title="Back" onPress={() => this.toggleItemsScreen()} />
              </View>
            </Overlay>
            <View
              style={{
                flex: 9,
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Text>Name: {this.partyMember.Name}</Text>
              <Text>Level: {this.partyMember.Level}</Text>
              <Text>
                Health: {this.partyMember.CurrentHealth}/
                {this.partyMember.Health}
              </Text>
              <Text>
                Mana: {this.partyMember.CurrentMana}/{this.partyMember.Mana}
              </Text>
              <Text>Attack: {this.partyMember.Attack}</Text>
              <Text>Magic: {this.partyMember.Magic}</Text>
              <Text>Mind: {this.partyMember.Mind}</Text>
              <Text>Resistance: {this.partyMember.Resistance}</Text>
              <Text>Defence: {this.partyMember.Defence}</Text>
              <Text>Speed: {this.partyMember.Speed}</Text>
              <Text>Luck: {this.partyMember.Luck}</Text>
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
          <Button title="Go Back" onPress={() => this.navigation.pop()} />
        </ImageBackground>
      </View>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    party: state.Party,
    items: state.Items,
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
