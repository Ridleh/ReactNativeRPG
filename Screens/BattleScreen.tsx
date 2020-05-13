import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  StyleSheet,
  Animated,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Header, Button, Overlay } from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";
import HealthBar from "./Components/HealthBar";
import { connect } from "react-redux";
import * as Interfaces from "../Interfaces/InterfaceIndex";
import * as StatHandler from "../Systems/StatHandler";

const { height, width } = Dimensions.get("window");

const available_width = 100;

class BattleScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      party: [],
      enemies: [],
      turnNumber: 0,
      showEndGameScreen: false,
      firstPartyMember: {}
    };

    this.renderPlayer = this.renderPlayer.bind(this);
    this.getData = this.getData.bind(this);
    this.useSpell = this.useSpell.bind(this);
    this.handleGameOver = this.handleGameOver.bind(this);
    this.renderSpell = this.renderSpell.bind(this);
  }

  static navigationOptions = {
    drawerLabel: () => null,
  };

  getData() {
    this.setState({
      party: [...this.props.party],
      enemies: [
        {
          Name: "Nega Tyro",
          level: 30,
          Health: 9999,
          Mana: 300,
          ID: "22234",
        },
      ],
      firstPartyMember: this.props.party[0]
    });
  }

  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {}

  useSpell(spell: Interfaces.SpellInterface) {
    spell.Uses -= 1;
    var endGame: boolean = false;
    var damage: number = Math.floor(Math.random() * 100);
    var player: number = this.state.turnNumber % this.state.party.length;
    console.log("damage is " + damage);

    if (this.state.turnNumber % 2 === 0) {
      let enemies = [...this.state.enemies];
      enemies[0] = { ...enemies[0], Health: enemies[0].Health - damage };
      this.setState({ enemies });
      if (enemies[0].Health <= 0) {
        endGame = true;
      }
    } else {
      let party = [...this.state.party];
      party[player] = {
        ...party[player],
        Health: party[player].Health - damage,
      };
      this.setState({ party });
      if (party[player].Health <= 0) {
        endGame = true;
      }
    }
    this.setState((prevState: { turnNumber: number }) => ({
      turnNumber: prevState.turnNumber + 1,
      firstPartyMember: this.state.party[(prevState.turnNumber + 1) % this.state.party.length]
    }));
    if (endGame) {
      let enemies = [...this.state.enemies];
      let party = [...this.state.party];
      enemies[0].Health = 100;
      party[player].Health = 100;
      this.setState({ showEndGameScreen: true, party, enemies });
    }
  }

  handleGameOver() {
    this.setState({ showEndGameScreen: false });
    StatHandler.giveEXP(this.props.party, 10);
    const gold: number = Math.floor(Math.random() * 1000);
    this.props.giveGold(gold);
    this.props.navigation.pop();
  }

  renderPlayer(player: Interfaces.PartyMemberInterface) {
    return (
      <Row style={{ justifyContent: "center" }}>
        <View>
          <HealthBar
            currentHealth={player.Health}
            totalHealth={100}
            label={player.Name}
          />

          <Image
            style={{
              height: 100,
              width: 100,
              paddingBottom: 10,
            }}
            source={player.Image}
          />
        </View>
      </Row>
    );
  }

  renderEnemy(enemy: any) {
    return (
      <Row style={{ justifyContent: "center" }}>
        <View>
          <HealthBar
            currentHealth={enemy.Health}
            totalHealth={100}
            label={enemy.Name}
          />

          <Image
            style={{
              height: 100,
              width: 100,
              paddingBottom: 10,
              transform: [{ scaleX: -1 }],
            }}
            source={require("../assets/Characters/dummy_enemy.png")}
          />
        </View>
      </Row>
    );
  }

  renderSpell(spell: Interfaces.SpellInterface) {
    return (
      <TouchableOpacity onPress={() => this.useSpell(spell)}>
        <Text>Uses: {spell.Uses}</Text>
        <Image
          style={{
            height: 100,
            width: 100,
            paddingBottom: 10,
            transform: [{ scaleX: -1 }],
          }}
          source={spell.Image}
        />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/Backgrounds/GrassyPlains.png")}
        style={{ height: height, width: width }}
      >
        <View style={{ flex: 1 }}>
          {this.state.showEndGameScreen && (
            <Overlay isVisible={this.state.showEndGameScreen}>
              <View>
                <Text>Game is over</Text>
                <Button
                  title={"ok, go home"}
                  onPress={() => this.handleGameOver()}
                />
              </View>
            </Overlay>
          )}

          <Grid style={{ flex: 1 }}>
            <Row size={3}>
              <Col style={{ flex: 1 }}>
                <FlatList
                  data={this.state.enemies}
                  renderItem={({ item }) => this.renderEnemy(item)}
                  keyExtractor={(item: any) => item.ID.toString()}
                />
              </Col>
              <Col style={{ flex: 1 }}>
                <FlatList
                  data={this.state.party}
                  renderItem={({ item }) => this.renderPlayer(item)}
                  keyExtractor={(item: Interfaces.PartyMemberInterface) =>
                    item.ID
                  }
                />
              </Col>
            </Row>
            <Row size={1} style={{ flex: 1 }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  backgroundColor: "lightblue",
                }}
              >
                <Col>
                  <FlatList
                  contentContainerStyle={{flexGrow:1, flexDirection:"row", justifyContent:"center"}}
                    data={this.state.firstPartyMember.Spells}
                    renderItem={({ item }) => this.renderSpell(item)}
                    keyExtractor={(item: Interfaces.SpellInterface) => item.ID}
                  />
                </Col>
              </View>
            </Row>
          </Grid>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  balanceBar: {
    width: 75,
    height: 20,
    backgroundColor: "gray",
  },

  balanceSection: {
    display: "flex",
    height: 20,
    fontSize: 10,
    textAlignVertical: "top",
    textAlign: "center",
  },

  balabnceSectionp: {
    margin: 0,
    padding: 3,
  },

  spent: {
    backgroundColor: "red",
  },

  spending: {
    backgroundColor: "yellow",
  },

  left: {
    backgroundColor: "lightgreen",
  },
});

function mapStateToProps(state: any) {
  return {
    playersGold: 1000,
    party: state.Party.Party,
  };
}

function mapDispatchToProps(dispatch: any) {
  //console.log('printing dispatch',dispatch)
  return {
    giveGold: (gold: number) => dispatch({ type: "increaseGold", gold: gold }),
    //decreaseCounter: () => dispatch({type: 'decreaseCounter', name :'test2'})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BattleScreen);
