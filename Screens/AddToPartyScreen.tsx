import React, { Component } from "react";
import { View, ImageBackground, Dimensions, Image, Text } from "react-native";
import { Header, Button } from "react-native-elements";
import { Grid, Col, Row } from "react-native-easy-grid";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import { connect } from "react-redux";
import * as Interfaces from "../Interfaces/InterfaceIndex";
import * as StatHandler from "../Systems/StatHandler";
const { height, width } = Dimensions.get("window");

class AddToPartyScreen extends Component<any, any> {
  navigation = this.props.navigation;
  selectedPartyMember: any = null;
  selectedCharacter: any = null;

  constructor(props: any) {
    super(props);
    this.state = {
      selectedPartyMember: null,
      selectedCharacter: null,
    };
    this.renderParty = this.renderParty.bind(this);
    this.handleOnPressPartyMember = this.handleOnPressPartyMember.bind(this);
    this.handleOnPressCharacter = this.handleOnPressCharacter.bind(this);
    this.CheckIfShouldSwap = this.CheckIfShouldSwap.bind(this);
  }

  handleOnPressPartyMember(partyMember: Interfaces.PartyMemberInterface) {
    console.log("Passed in Party Member " + partyMember.Name);
    //this.setState({ selectedPartyMember: partyMember });
    this.setState({ selectedPartyMember: partyMember }, () => {
      this.CheckIfShouldSwap();
    });
  }

  handleOnPressCharacter(character: Interfaces.PartyMemberInterface) {
    console.log("Passed in Character " + character.Name);
    //this.setState({ selectedCharacter: character });
    this.setState({ selectedCharacter: character }, () => {
      this.CheckIfShouldSwap();
    });
  }

  CheckIfShouldSwap() {
      console.log("------------")
      var one = this.state.selectedCharacter !== null;
      var two = this.state.selectedPartyMember !== null
    console.log(one,two);
    //console.log(this.state.selectedCharacter);
    //console.log("------------------------");
    //console.log(this.state.selectedPartyMember !== null);
    //console.log(this.state.selectedPartyMember);
    if (
      this.state.selectedCharacter !== null &&
      this.state.selectedPartyMember !== null
    ) {
      console.log("in here");
      const partyMember: Interfaces.PartyMemberInterface = this.state
        .selectedPartyMember;
      const character: Interfaces.PartyMemberInterface = this.state
        .selectedCharacter;
      StatHandler.SwapPartyMemberForCharacter(partyMember, character);
      this.setState({
        selectedCharacter: null,
        selectedPartyMember: null,
      });
    }
  }

  isEmpty(obj: Interfaces.PartyMemberInterface) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }

  renderParty(partyMember: Interfaces.PartyMemberInterface) {
    return (
      <TouchableHighlight
        onPress={() => this.handleOnPressPartyMember(partyMember)}
      >
        <View>
          <Text>{partyMember.Name}</Text>
          <Image
            source={partyMember.Image}
            style={{
              height: 75,
              width: 40,
            }}
          />
        </View>
      </TouchableHighlight>
    );
  }

  renderCharactersOwned(character: Interfaces.PartyMemberInterface) {
    return (
      <TouchableHighlight
        onPress={() => this.handleOnPressCharacter(character)}
      >
        <View>
          <Text>{character.Name}</Text>
          <Image
            source={character.Image}
            style={{
              height: 75,
              width: 40,
            }}
          />
        </View>
      </TouchableHighlight>
    );
  }

  //renderCharactersOwned(Character: Interfaces.PartyMemberInterface) {}

  render() {
    return (
      <ImageBackground
        source={require("../Assets/Backgrounds/SampleBackgroundQuests.png")}
        style={{ height: height, width: width }}
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
        <Grid>
          <Row size={1} style={{ flex: 1 }}>
            <Button
              style={{ width: width }}
              title="Go Back"
              onPress={() => this.navigation.pop()}
            />
          </Row>
          <Row size={14}>
            <Col size={1} style={{ backgroundColor: "gray" }}>
              <View
                style={{
                  flexGrow: 1,
                  justifyContent: "space-evenly",
                  alignContent: "center",
                }}
              >
                <FlatList
                  data={this.props.party}
                  contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "center",
                  }}
                  numColumns={1}
                  renderItem={({ item }) => this.renderParty(item)}
                  keyExtractor={(item: Interfaces.PartyMemberInterface) =>
                    item.ID.toString()
                  }
                />
              </View>
            </Col>
            <Col size={3}>
              <View
                style={{
                  flexGrow: 1,
                  justifyContent: "space-evenly",
                  alignContent: "center",
                }}
              >
                <FlatList
                  data={this.props.charactersOwned}
                  contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "space-evenly",
                  }}
                  numColumns={3}
                  renderItem={({ item }) => this.renderCharactersOwned(item)}
                  keyExtractor={(item: Interfaces.PartyMemberInterface) =>
                    item.ID.toString()
                  }
                />
              </View>
            </Col>
          </Row>
        </Grid>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    playersStamina: state.Party.Stamina,
    party: state.Party.Party,
    charactersOwned: state.Party.CharactersOwned,
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

export default connect(mapStateToProps, mapDispatchToProps)(AddToPartyScreen);
