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
          health: 100,
          mana: 75,
          image: getImageFromCharactersMap("tyro.png"),
        },
      ],
      opponents: [
        {
          id: 2,
          name: "enemy",
          health: 100,
          mana: 75,
          image: getImageFromCharactersMap("tyro.png"),
        },
      ],
      showOverlay: false,
    };
  }

  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  handleAbilityCast = () => {
    console.log("player's attack");
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
  };

  renderPlayer = (player: any) => {
    return (
      <View>
        <HealthBar
          currentHealth={player.item.health}
          totalHealth={100}
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
          totalHealth={100}
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
                    renderItem={(player) => this.renderPlayer(player)}
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
