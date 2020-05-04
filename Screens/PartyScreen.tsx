import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
} from "react-native";
import { Header, Overlay } from "react-native-elements";
import {
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
} from "react-native-gesture-handler";
import { connect } from "react-redux";
import * as Interfaces from "../Interfaces/InterfaceIndex";
import * as StatHandler from "../Systems/StatHandler";

const { height, width } = Dimensions.get("window");

class PartyScreen extends Component<any, any> {
  navigation: any = this.props.navigation;

  constructor(props: any) {
    super(props);
    this.state = {
      showOverlay: false,
      selectedPartyMember: [],
      party: this.props.party,
      update: false
    };
    this.closeOverlay = this.closeOverlay.bind(this);
    this.handleOnFocusPartyMember = this.handleOnFocusPartyMember.bind(this);
    this.renderParty = this.renderParty.bind(this);
    this.handleSwapOutPartyMember = this.handleSwapOutPartyMember.bind(this);
  }

  closeOverlay() {
    this.setState((prevState: { showOverlay: boolean }) => ({
      showOverlay: !prevState.showOverlay
    }));
  }

  handleOnClickEditPartyMember = () => {
    this.closeOverlay();
    this.navigation.navigate("EditPartyMember", {
      partyMember: this.state.selectedPartyMember,
    });
  };

  handleSwapOutPartyMember() {
    //StatHandler.removePartyMemberFromParty(this.state.selectedPartyMember);
    this.closeOverlay();
    this.navigation.navigate("AddToParty");
  }

  handleOnFocusPartyMember(
    selectedPartyMember: Interfaces.PartyMemberInterface
  ) {
    this.setState((prevState: { showOverlay: boolean }) => ({
      selectedPartyMember,
      showOverlay: !prevState.showOverlay,
    }));
  }

  renderParty(partyMember: Interfaces.PartyMemberInterface) {
    return (
      <TouchableOpacity
        onPress={() => this.handleOnFocusPartyMember(partyMember)}
      >
        <View style={styles.partyMemberContainer}>
          <View
            style={{
              justifyContent: "center",
            }}
          >
            <Text>{partyMember.Name}</Text>
          </View>
          <Image
            source={partyMember.Image}
            style={{
              height: 75,
              width: 40,
            }}
          />
          <View style={{ flexDirection: "column", justifyContent: "center" }}>
            <Text>Level: {partyMember.Level}</Text>
            <Text>
              Health: {partyMember.CurrentHealth}/{partyMember.Health}
            </Text>
            <Text>
              Mana: {partyMember.CurrentMana}/{partyMember.Mana}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={{ paddingTop: 24 }}>
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
            centerComponent={{ text: "PARTY", style: { color: "#fff" } }}
          />

          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <FlatList
              data={this.props.party}
              extraData={this.props}
              renderItem={({ item }) => this.renderParty(item)}
              keyExtractor={(item: Interfaces.PartyMemberInterface) =>
                item.ID.toString()
              }
            />
          </View>
          <Overlay
            overlayStyle={{
              flexDirection: "column",
              backgroundColor: "chocolate",
              borderColor: "black",
              borderRadius: 20,
              borderWidth: 5
            }}
            animationType="slide"
            isVisible={this.state.showOverlay}
            onBackdropPress={() => this.closeOverlay()}
          >
            <View style={{ flex: 1 }}>
              <View
                style={{
                  flex: 9,
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <Text>Name: {this.state.selectedPartyMember.Name}</Text>
                <Text>Level: {this.state.selectedPartyMember.Level}</Text>
                <Text>
                  Health: {this.state.selectedPartyMember.CurrentHealth}/
                  {this.state.selectedPartyMember.Health}
                </Text>
                <Text>
                  Mana: {this.state.selectedPartyMember.CurrentMana}/
                  {this.state.selectedPartyMember.Mana}
                </Text>
                <Text>Attack: {this.state.selectedPartyMember.Attack}</Text>
                <Text>Magic: {this.state.selectedPartyMember.Magic}</Text>
                <Text>Mind: {this.state.selectedPartyMember.Mind}</Text>
                <Text>
                  Resistance: {this.state.selectedPartyMember.Resistance}
                </Text>
                <Text>Defence: {this.state.selectedPartyMember.Defence}</Text>
                <Text>Speed: {this.state.selectedPartyMember.Speed}</Text>
                <Text>Luck: {this.state.selectedPartyMember.Luck}</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignContent: "space-between"
                }}
              >
                <Button
                  onPress={() => this.handleOnClickEditPartyMember()}
                  title="Edit Party Member"
                />
                <Button
                  title="Swap Out Party Member"
                  onPress={() => this.handleSwapOutPartyMember()}
                />
              </View>
            </View>
          </Overlay>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  partyMemberContainer: {
    borderColor: "black",
    borderRadius: 15,
    borderWidth: 5,
    height: (height / 5) * 0.6,
    width: "90%",
    marginLeft: "5%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

function mapStateToProps(state: any) {
  return {
    playersStamina: state.Party.Stamina,
    party: state.Party.Party,
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

export default connect(mapStateToProps, mapDispatchToProps)(PartyScreen);
