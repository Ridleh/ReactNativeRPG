import React, { Component } from "react";
import { Text, View, ImageBackground, SectionList } from "react-native";

import {
  HeaderWithButton,
  BackgroundContainer,
  Readybutton,
  Header,
} from "../Components/ComponentIndex";
import styles from "../StyleSheet/Styles";
import { ListItem, Overlay } from "react-native-elements";
import { getImageFromUIMap } from "../AssetMaps/UIMap";
import { getImageFromCharactersMap } from "../AssetMaps/CharactersMap";

export default class ShopScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [
        {
          title: "Boss Fights",
          data: [
            {
              title: "The Warrior",
              enemies: [
                {
                  id: 2,
                  name: "enemy",
                  health: 21712,
                  attack: 200,
                  defense: 450,
                  magic: 496,
                  resistance: 300,
                  mana: 75,
                  image: getImageFromCharactersMap("Warrior.png"),
                },
              ],
              background: "",
              EXPReward: 0,
              giveLoot: 0,
              description: "has high attack",
            },
            {
              title: "The Black Mage",
              enemies: [
                {
                  id: 2,
                  name: "enemy",
                  health: 21712,
                  attack: 200,
                  defense: 450,
                  magic: 496,
                  resistance: 300,
                  mana: 75,
                  image: getImageFromCharactersMap("Black_Mage.png"),
                },
              ],
              background: "",
              EXPReward: 0,
              giveLoot: 0,
              description: "average stats high magic",
            },
            {
              title: "The White Mage",
              enemies: [
                {
                  id: 2,
                  name: "enemy",
                  health: 21712,
                  attack: 200,
                  defense: 450,
                  magic: 496,
                  resistance: 300,
                  mana: 75,
                  image: getImageFromCharactersMap("Warrior.png"),
                },
                {
                  id: 22,
                  name: "enemy 2",
                  health: 21712,
                  attack: 200,
                  defense: 450,
                  magic: 496,
                  resistance: 300,
                  mana: 75,
                  image: getImageFromCharactersMap("White_Mage.png"),
                },
              ],
              background: "",
              EXPReward: 0,
              giveLoot: 0,
              description: "2 vs 1",
            },
          ],
        },
      ],
      showOverlay: false,
      selectedQuest: {},
    };
  }

  toggleOverlay = (quest?: Quest) => {
    this.setState((prevState: { showOverlay: boolean }) => ({
      showOverlay: !prevState.showOverlay,
      selectedQuest: quest ? quest : {},
    }));
  };

  openDrawer = () => {
    //this.props.navigation.openDrawer();
  };

  beginQuest = () => {
    console.log("quest begin");
    const enemies: Enemy[] = this.state.selectedQuest.enemies;
    /*
    showOverlay needs to be set to false before navigating away
    from this screen otherwise every list item will be
    unresponsive
    Also we are using nested navigators so passing params via route
    is different
    */
    this.setState(
      (prevState: { showOverlay: boolean }) => ({
        showOverlay: !prevState.showOverlay,
      }),
      () => {
        this.props.navigation.navigate('Battle', {
          screen: 'Battle',
          params: {enemies}
        });
      }
    );
  };

  cancelQuest = () => {
    this.toggleOverlay;
  };

  renderItem = (item: any) => {
    return (
      <ListItem
        containerStyle={{
          backgroundColor: "chocolate",
          borderRadius: 12,
          marginBottom: 10,
        }}
        title={item.title}
        subtitle="Stamina: 20   Difficulty: 10"
        bottomDivider
        chevron
        onPress={() => this.toggleOverlay(item)}
      />
    );
  };

  render() {
    return (
      <BackgroundContainer>
        <View style={styles.header}>
          <Header title={'Quests'} subtitle={''}/>
        </View>
        <View style={{flex:1, paddingHorizontal:15}}>
          <SectionList
            extraData={this.state.data}
            sections={this.state.data}
            keyExtractor={(item: any, index: number) => item + index}
            renderItem={({ item }) => this.renderItem(item)}
            renderSectionHeader={({ section: { title } }) => (
              <Text
                style={{
                  fontSize: 32,
                  color: "white",
                }}
              >
                {title}
              </Text>
            )}
          />
        </View>
        <Overlay
          isVisible={this.state.showOverlay}
          overlayStyle={{
            flexDirection: "column",
            backgroundColor: "transparent",
            borderColor: "black",
            borderRadius: 20,
          }}
          onBackdropPress={this.toggleOverlay}
          animationType="slide"
        >
          <ImageBackground
            source={getImageFromUIMap("Paper_01.png")}
            style={styles.imageBackgroundFull}
            resizeMode="stretch"
          >
            <View style={styles.header}>
              <View style={styles.center}>
                <Text
                  style={{
                    color: "gold",
                  }}
                >
                  {this.state.selectedQuest.title}
                </Text>
              </View>
            </View>
            <View style={styles.flexFullColumn}>
              <Text style={{ color: "white" }}>
                {this.state.selectedQuest.description}
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                height: "15%",
                flexDirection: "row",
              }}
            >
              <Readybutton label={"Begin"} handlePress={this.beginQuest} />
              <Readybutton label={"Cancel"} handlePress={this.toggleOverlay} />
            </View>
          </ImageBackground>
        </Overlay>
      </BackgroundContainer>
    );
  }
}
