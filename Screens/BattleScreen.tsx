import React, { Component } from "react";
import {
  View,
  ImageBackground,
  FlatList,
  Text,
  ActivityIndicator,
  Image
} from "react-native";
import styles from "../StyleSheet/Styles";
import { getImageFromCharactersMap } from "../AssetMaps/CharactersMap";
import { getImageFromBackgroundsMap } from "../AssetMaps/BackgroundsMap";
import BattleHandler from "../SystemHandlers/BattleHandler";
import {
  SkillBarComponent,
  PlayerComponent,
  EnemyComponent,
} from "../Components/ComponentIndex";
import { getImageFromUIMap } from "../AssetMaps/UIMap";
import { getImageFromIconsMap } from "../AssetMaps/IconsMap";
import { TouchableHighlight } from "react-native-gesture-handler";

var battleHandler: BattleHandler;
export default class BattleScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      playableCharacters: [],
      opponents: [],
      showOverlay: false,
      refreshList: false,
      showSkillBar: true,
      pageReady: false,
    };
  }

  componentDidMount = () => {
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
    const enemies: Enemy[] = [...this.props.route.params.enemies];

    battleHandler = new BattleHandler(enemies, players);
    this.setState({
      playableCharacters: players,
      opponents: enemies,
    });
  }

  onLoad = (): void => {
    this.setState((prevState: { pageReady: boolean }) => ({
      pageReady: !prevState.pageReady,
    }));
  };

  handleAbilityCast = (skillNum: number): void => {
    let returnState = battleHandler.handlePlayerAction(skillNum);
    let enemyArray: Enemy[] = returnState[0];
    let playerArray: Player[] = returnState[1];
    this.setState((prevState: { showSkillBar: boolean }) => ({
      showSkillBar: !prevState.showSkillBar,
      opponents: enemyArray,
      playableCharacters: playerArray,
    }));
    if (enemyArray[0].health <= 0) {
      this.handleGameOver(true);
    } else {
      setTimeout(() => {
        let returnState = battleHandler.handleEnemyAction();
        let enemyArray: Enemy[] = returnState[0];
        let playerArray: Player[] = returnState[1];

        this.setState((prevState: { showSkillBar: boolean }) => ({
          showSkillBar: !prevState.showSkillBar,
          opponents: enemyArray,
          playableCharacters: playerArray,
        }));
        if (playerArray[0].health <= 0) {
          this.handleGameOver(false);
        }
      }, 2000);
    }
  };

  handleGameOver = (playerWon: boolean): void => {
    setTimeout(() => {
      this.props.navigation.navigate('Battle Results', {playerWon});
    }, 1500);
  };

  toggleOverlay = () => {
    this.setState((prevState: { showOverlay: boolean }) => ({
      showOverlay: !prevState.showOverlay,
    }));
  };

  surrender = (): void => {
    this.handleGameOver(false);
  }

  render = () => {
    return (
      <View style={styles.flexFull}>
        {this.state.pageready ? null : (
          <View style={styles.center}>
            <ActivityIndicator size="large" />
            <Text style={{ color: "white" }}>Loading...</Text>
          </View>
        )}
        <ImageBackground
          onLoadEnd={this.onLoad}
          source={getImageFromBackgroundsMap("img_10277_01_02.png")}
          style={styles.imageBackgroundFull}
          resizeMode="stretch"
        >
          <View style={styles.flexFullColumn}>
            <View style={{ flex: 1 }}>
              <ImageBackground
                source={getImageFromUIMap("lil_bar.png")}
                style={[styles.imageBackgroundFull,styles.flexFullRow]}
                resizeMode="stretch"
              >
                <View style={[styles.center,{flex: 8}]}>
                  <Text style={{color:'white'}}>Battle Agaisnt A True Hero</Text>
                </View>
                <View style={{alignItems:'center', flex: 2,justifyContent:'center'}}>
                    <TouchableHighlight
                    style={{flex:1}}
                    onPress={this.surrender}>
                    <Image
                    style={{height:70, width:70}}
                    source={getImageFromIconsMap('Honor.png')}/>
                    </TouchableHighlight>
                </View>
              </ImageBackground>
            </View>
            <View
              style={{
                flexDirection: "row",
                flex: 7,
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
                    }}
                    data={this.state.opponents}
                    renderItem={({ item }) => <EnemyComponent enemy={item} />}
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
                    renderItem={({ item }) => <PlayerComponent player={item} />}
                    keyExtractor={(player: Player) => player.id.toString()}
                  />
                </View>
              </View>
            </View>
            <View style={{ flex: 2 }}>
              <SkillBarComponent
                showSkillBar={this.state.showSkillBar}
                handlePress={this.handleAbilityCast}
              />
            </View>
            <View></View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
