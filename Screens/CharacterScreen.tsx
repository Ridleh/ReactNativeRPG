import React, { Component } from "react";
import { Text, View, ImageBackground } from "react-native";
import {
  FourItemContainer,
  StatsContainer,
  Header,
} from "../Components/ComponentIndex";
import styles from "../StyleSheet/Styles";
import { getImageFromUIMap } from "../AssetMaps/UIMap";
import ReadyButton from "../Components/ReadyButton";
import { getImageFromSilhouetteMap } from "../AssetMaps/SilhouetteMap";
import { connect } from "react-redux";

class CharacterScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  navigateToAbilitiesScreen = () => {
    this.props.navigation.push("Abilities");
  };

  navigateToInventoryScreen = () => {
    this.props.navigation.push("Inventory");
  };

  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  showCharacteristicsOverlay() {
    console.log("yes");
  }

  render() {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.flexFullColumn}>
          <View style={styles.header}>
            <Header title={'Player'} subtitle={'Level, Class'} />
          </View>
          <View style={{ flex: 6 }}>
            <ImageBackground
              source={getImageFromUIMap("Inventory_bar.png")}
              style={styles.imageBackgroundFull}
              resizeMode="stretch"
            >
              <ImageBackground
                source={getImageFromSilhouetteMap(
                  "warrior_silhouette_woman.png"
                )}
                style={styles.imageBackgroundFull}
                resizeMode="center"
              >
                <View style={{ flex: 1, flexDirection: "row", padding: 10 }}>
                  <View
                    style={{
                      height: "100%",
                      width: "20%",
                    }}
                  >
                    <FourItemContainer leftSide={true} character={this.props.character} />
                  </View>
                  <View style={{ height: "100%", width: "60%" }}></View>
                  <View
                    style={{
                      height: "100%",
                      width: "20%",
                    }}
                  >
                    <FourItemContainer leftSide={false} character={this.props.character}/>
                  </View>
                </View>
              </ImageBackground>
            </ImageBackground>
          </View>
          <View style={{ flex: 2 }}>
            <ImageBackground
              source={getImageFromUIMap("mid_bar.png")}
              style={styles.imageBackgroundFull}
              resizeMode="stretch"
            >
              <View style={{ flexDirection: "row", padding: 10 }}>
                <View style={{ flex: 1 }}>
                  <ImageBackground
                    source={getImageFromUIMap("inventory_button2.png")}
                    style={styles.imageBackgroundFull}
                    resizeMode="stretch"
                  >
                    <StatsContainer
                    character={this.props.character.character}
                      handlePress={this.showCharacteristicsOverlay}
                    />
                  </ImageBackground>
                </View>
                <View style={{ flex: 1 }}>
                  <ReadyButton
                    label={"View Abilities"}
                    handlePress={this.navigateToAbilitiesScreen}
                  />
                  <ReadyButton
                    label={"View Inventory"}
                    handlePress={this.navigateToInventoryScreen}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    character: state.Character
  };
}

function mapDispatchToProps(dispatch: any) {
  //console.log('printing dispatch',dispatch)
  return {
    //buyItem: (item: any) => dispatch({ type: "addItem", item: item }),
    //buySpell: (spell: any) => dispatch({ type: "addSpell", spell: spell }),
    //decreaseGold: (gold: number) =>
    //  dispatch({ type: "decreaseGold", gold: gold }),
    //buyCharacter: (character: Interfaces.PartyMemberInterface) => dispatch({type:'addPartyMember', partyMember: character}),

    //decreaseCounter: () => dispatch({type: 'decreaseCounter', name :'test2'})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterScreen);

