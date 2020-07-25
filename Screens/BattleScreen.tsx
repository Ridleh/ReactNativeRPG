import React, { Component } from "react";
import BackgroundContainer from "../Components/BackgroundContainer";
import { View, ImageBackground, Image, FlatList } from "react-native";
import styles from "../StyleSheet/Styles";
import { HeaderWithButton } from "../Components/ComponentIndex";
import HealthBar from "../Components/HealthBar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getImageFromUIMap } from "../AssetMaps/UIMap";
import { getImageFromCharactersMap } from "../AssetMaps/CharactersMap";
import { getImageFromIconsFreeMap } from "../AssetMaps/IconsFreeMap";
import { getImageFromBackgroundsMap } from "../AssetMaps/BackgroundsMap";
import SkillBarComponent from "../Components/SkillBarComponent";

export default class HomeScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      playableCharacters: [
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
      ],
      opponents: [
        {
          id: 2,
          name: "enemy",
          health: 21712,
          attack: 488,
          defense: 600,
          magic: 496,
          resistance: 600,
          mana: 75,
          image: getImageFromCharactersMap("tyro.png"),
        },
      ],
      showOverlay: false,
    };
  }

  handleAbilityCast = (skillNum: number) => {
    console.log("player's attack", skillNum);
    const ability: any = this.getAbility(skillNum);
    var damage: number;
    var player: any = this.state.playableCharacters[0];
    var enemy: any = this.state.opponents[0];
    if (ability.damageType === "physical") {
      console.log("physical attack");
      const attack: number = player.attack * ability.ratio;
      damage = Math.pow(attack, 1.8) / Math.pow(enemy.defense, 0.5);
      damage = Math.round(damage);
      console.log("damage is", damage);
    } else {
      console.log("magical attack");
      const attack: number = player.magic * ability.ratio;
      damage = Math.pow(attack, 1.65) / Math.pow(enemy.defense, 0.5);
      damage = Math.round(damage);
      console.log("damage is", damage);
    }
    //const test :string[] = [];
    //test.length
    if (ability.bonusActions.length >= 1) {
      for (var i = 0; i < ability.bonusActions.length; i++) {
        const action: any = ability.bonusActions[i];
        var actionDamage: number;
        if (action.damageSource === "old") {
          actionDamage = damage * action.ratio;
        } else {
          console.log("wrong branch!!!");
          actionDamage = 100;
        }
        if (action.target === "self") {
          if (action.damageORHeal === "heal") {
            player.health += actionDamage;
          } else {
            player.health -= actionDamage;
          }
        } else {
          console.log('wrong target branch!!!');
          //'add this branch later'
        }

        /*
        target: self,
            damageORHeal: 'heal',
            ratio: 1,
            buffs:[],
            debuffs: []
        */
      }
    }
    var newPlayers: any[] = [];
    newPlayers.push(player);

    enemy.health -= damage;
    var newOpponents: any[] = [];
    newOpponents.push(enemy);
    this.setState({ opponents: newOpponents, playableCharacters: newPlayers });
    if (enemy.health <= 0) {
      console.log("enemy is defeated. game over");
      this.props.navigation.pop();
    } else {
      setTimeout(() => {
        console.log("enemy's attack");
        const enemyAttack: number = enemy.attack * 1.5;
        var enemyDamage = Math.pow(enemyAttack, 2) / Math.pow(player.defense, 0.84);
        enemyDamage = Math.round(damage);
        console.log("damage is", enemyDamage);
        player.health -= enemyDamage;
        var newPlayers: any[] = [];
        newPlayers.push(player);
        this.setState({ playableCharacters: newPlayers });
        if (player.health <= 0) {
          console.log("player is defeated. game over");
          this.props.navigation.pop();
        }
      }, 2000);
    }

    /*
    const damage: number = Math.floor(Math.random() * 80);
    var enemy: any = this.state.opponents[0];
    enemy.health -= damage;
    var newOpponents: any[] = [];
    newOpponents.push(enemy);
    this.setState({ opponents: newOpponents });
    if (enemy.health <= 0) {
      console.log("enemy is defeated. game over");
      this.props.navigation.pop();
    } else {
      setTimeout(() => {
        console.log("enemy's attack");
        const damage2: number = Math.floor(Math.random() * 80);
        var player: any = this.state.playableCharacters[0];
        player.health -= damage2;
        var newPlayers: any[] = [];
        newPlayers.push(player);
        this.setState({ playableCharacters: newPlayers });
        if (player.health <= 0) {
          console.log("player is defeated. game over");
          this.props.navigation.pop();
        }
      }, 2000);
    }
    */
  };

  getAbility = (skillNum: number) => {
    if (skillNum === 1) {
      return {
        target: "enemy",
        damageType: "magical",
        ratio: 0.6,
        numHits: 1,
        damageORHeal: "damage",
        canCrit: false,
        bonusActions: [
          {
            target: 'self',
            damageORHeal: "heal",
            damageSource: "old",
            ratio: 1,
            buffs: [],
            debuffs: [],
          },
        ],
      };
    } else if (skillNum === 2) {
      return {
        target: "enemy",
        damageType: "physical",
        ratio: 1.5,
        numHits: 1,
        damageORHeal: "damage",
        canCrit: true,
        bonusActions: []
      };
    } else if (skillNum === 3) {
      console.log("dont use this yet");
      return {
        target: "enemy",
        damageType: "physical",
        ratio: 1.5,
        numHits: 1,
        damageORHeal: "damage",
        canCrit: true,
      };
    } else {
      console.log("dont use this yet");
      return {
        target: "enemy",
        damageType: "physical",
        ratio: 1.5,
        numHits: 1,
        damageORHeal: "damage",
        canCrit: true,
      };
    }
  };

  renderPlayer = (player: any) => {
    return (
      <View>
        <HealthBar
          currentHealth={player.item.health}
          totalHealth={player.item.health}
          label={player.item.name}
        />
        <Image
          style={{
            height: 100,
            width: 100,
            paddingBottom: 10,
          }}
          source={player.item.image}
        />
      </View>
    );
  };

  renderEnemy(enemy: any) {
    return (
      <View>
        <HealthBar
          currentHealth={enemy.item.health}
          totalHealth={enemy.item.health}
          label={enemy.item.name}
        />
        <Image
          style={{
            height: 100,
            width: 100,
            paddingBottom: 10,
          }}
          source={enemy.item.image}
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
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                  backgroundColor: "gray",
                }}
              >
                <View
                  style={{
                    flex: 1,
                  }}
                >
                  <FlatList
                    data={this.state.opponents}
                    renderItem={(player) => this.renderEnemy(player)}
                    keyExtractor={(player: any) => player.id.toString()}
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
                    contentContainerStyle={{
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    data={this.state.playableCharacters}
                    renderItem={(player) => this.renderPlayer(player)}
                    keyExtractor={(player: any) => player.id.toString()}
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
