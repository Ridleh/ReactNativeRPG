import React, { Component } from "react";
import { View, ImageBackground, Image, FlatList } from "react-native";
import styles from "../StyleSheet/Styles";
import HealthBar from "../Components/HealthBar";
import { getImageFromCharactersMap } from "../AssetMaps/CharactersMap";
import { getImageFromBackgroundsMap } from "../AssetMaps/BackgroundsMap";
import SkillBarComponent from "../Components/SkillBarComponent";
import BattleHandler from "../SystemHandlers/BattleHandler";

var battleHandler: BattleHandler;
export default class HomeScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      playableCharacters: [],
      opponents: [],
      showOverlay: false,
      refreshList: false
    };
  }


  componentDidMount() {
    const players: Player[] = [
      {
        id: 1,
        name: "Player",
        health: 7150,
        mana: 75,
        attack: 227,
        defense: 170,
        magic: 300,
        resistance: 141,
        image: getImageFromCharactersMap("tyro.png"),
      },
    ];
    const enemies: Enemy[] = [
      {
        id: 2,
        name: "enemy",
        health: 21712,
        attack: 200,
        defense: 450,
        magic: 496,
        resistance: 300,
        mana: 75,
        image: getImageFromCharactersMap("tyro.png"),
      },
    ];

    battleHandler = new BattleHandler(enemies, players);
    this.setState({
      playableCharacters: players,
      opponents: enemies,
    });
  }

  handleAbilityCast = (skillNum: number): void => {
    let returnState = battleHandler.handlePlayerAction(skillNum);
    let enemyArray: Enemy[] = returnState[0];
    let playerArray: Player[] = returnState[1];
    this.setState({ opponents: enemyArray, playableCharacters: playerArray });
    if (enemyArray[0].health <= 0) {
      //console.log("enemy is defeated. game over");
      this.props.navigation.pop();
    } else {
      //console.log("why no call?");
      setTimeout(() => {
        let returnState = battleHandler.handleEnemyAction();
        let enemyArray: Enemy[] = returnState[0];
        let playerArray: Player[] = returnState[1];

        this.setState({
          opponents: enemyArray,
          playableCharacters: playerArray,
        });
        if (playerArray[0].health <= 0) {
          //console.log("player is defeated. game over");
          this.props.navigation.pop();
        }
      }, 2000);
    }
  };

  renderPlayer = (player: Player) => {
    return (
      <View>
        <HealthBar
          currentHealth={player.health}
          totalHealth={player.health}
          label={player.name}
        />
        <Image
          style={{
            height: 100,
            width: 100,
            paddingBottom: 10,
          }}
          source={player.image}
        />
      </View>
    );
  };

  renderEnemy(enemy: Enemy) {
    return (
      <View>
        <HealthBar
          currentHealth={enemy.health}
          totalHealth={enemy.health}
          label={enemy.name}
        />
        <Image
          style={{
            height: 100,
            width: 100,
            paddingBottom: 10,
            transform: [
              {scaleX: -1} 
            ]
          }}
          source={enemy.image}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.flexFull}>
        <ImageBackground
          source={getImageFromBackgroundsMap("img_10088_01_02.png")}
          style={styles.imageBackgroundFull}
          resizeMode="stretch"
        >
          <View style={styles.flexFullColumn}>
            <View style={{ flex: 1, backgroundColor: "blue" }}></View>
            <View
              style={{
                flexDirection: "row",
                flex: 7,
                backgroundColor: "green",
              }}
            >
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flex: 1,
                  }}
                >
                  <FlatList
                  extraData={this.state.refreshList}
                    contentContainerStyle={{
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                      backgroundColor: "gray",
                    }}
                    data={this.state.opponents}
                    renderItem={({ item }) => this.renderEnemy(item)}
                    keyExtractor={(enemy: Enemy) => enemy.id.toString()}
                  />
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flex: 1,
                  }}
                >
                  <FlatList
                  extraData={this.state.refreshList}
                    contentContainerStyle={{
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                    }}
                    data={this.state.playableCharacters}
                    keyExtractor={(player: Player) => player.id.toString()}
                    renderItem={({ item }) => this.renderPlayer(item)}
                  />
                </View>
              </View>
            </View>
            <View style={{ flex: 2 }}>
              <SkillBarComponent handlePress={this.handleAbilityCast} />
            </View>
            <View></View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
