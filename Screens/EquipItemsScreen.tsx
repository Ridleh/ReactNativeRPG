import React, { Component } from "react";
import { BackgroundContainer, Header } from "../Components/ComponentIndex";
import { View, ImageBackground, Text, Dimensions, Image } from "react-native";
import styles from "../StyleSheet/Styles";
import { getImageFromUIMap } from "../AssetMaps/UIMap";
import { Button } from "react-native-elements";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import MidBarReady from "../Components/MidBarReadyContainer";
import { getImageFromIconsFreeMap } from "../AssetMaps/IconsFreeMap";
import { connect } from "react-redux";

class EquipItemsScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: [],
      selectedItem: {},
      extraData: {},
    };
  }

  componentDidMount = (): void => {
    const options: string[] = [
      "helmet",
      "shoulder",
      "chest",
      "pant",
      "boot",
      "necklace",
      "cape",
      "bracer",
      "glove",
      "weapon",
    ];
    let items: Item[] = [];
    for (let i = 0; i < 70; i++) {
      let item: Item = {
        Health: Math.round(Math.random() * 400),
        Attack: Math.round(Math.random() * 400),
        Defence: Math.round(Math.random() * 400),
        Magic: Math.round(Math.random() * 400),
        Resistance: Math.round(Math.random() * 400),
        Mind: Math.round(Math.random() * 400),
        CritChance: Math.round(Math.random() * 100),
        EvasionChance: Math.round(Math.random() * 100),
        Speed: Math.round(Math.random() * 100),
        id: i,
        type: options[i % 10],
        image: getImageFromIconsFreeMap("armor_icon.png"),
      };
      items.push(item);
    }
    this.setState({
      items,
      extraData: this.props.route.params.extraProps,
    });
  };

  equipItem = (): void => {
    const item = this.state.selectedItem;
    switch (this.state.selectedItem.type) {
      case "helmet":
        //this.props.unequipHelmet();
        this.props.equipHelmet(item);
        break;
      case "shoulder":
        //this.props.unequipShoulder();
        this.props.equipShoulder(item);
        break;
      case "chest":
        //this.props.unequipChest();
        this.props.equipChest(item);
        break;
      case "pant":
        //this.props.equipChest();
        this.props.equipChest(item);
        break;
      case "boot":
        //this.props.unequipBoot();
        this.props.equipBoot(item);
        break;
      case "necklace":
        //this.props.unequipNecklace();
        this.props.equipNecklace(item);
        break;
      case "cape":
        //this.props.unequipCape();
        this.props.equipCape(item);
        break;
      case "bracer":
        //this.props.equipBracer();
        this.props.equipBracer(item);
        break;
      case "glove":
       //this.props.equipGlove();
        this.props.equipGlove(item);
        break;
      case "weapon":
        //this.props.equipWeapon();
        this.props.equipWeapon(item);
        break;
      default:
        console.warn("Warning: Item has incorrect type");
    }
    this.props.navigation.pop();
  };

  itemPressed = (item: Item): void => {
    console.log(item.type);
    this.setState({ selectedItem: item });
  };

  renderItem(item: Item) {
    return (
      <View
        style={{
          backgroundColor: "black",
          alignItems: "center",
          justifyContent: "center",
          margin: 2,
          flex: 1,
          height: Dimensions.get("window").width / 5, // approximate a square
          width: Dimensions.get("window").width / 5,
        }}
      >
        <ImageBackground
          style={{ height: "100%", width: "100%" }}
          source={getImageFromUIMap("Mini_background.png")}
          resizeMode="center"
        >
          <ImageBackground
            style={{ height: "100%", width: "100%" }}
            source={getImageFromUIMap("Mini_frame0.png")}
            resizeMode="stretch"
          >
            <TouchableHighlight onPress={() => this.itemPressed(item)}>
              <Image
                source={item.image}
                style={{ width: "100%", height: "100%" }}
                resizeMode="center"
              />
            </TouchableHighlight>
          </ImageBackground>
        </ImageBackground>
      </View>
    );
  }

  render() {
    return (
      <BackgroundContainer>
        <View style={styles.header}>
          <Header title={"Equip Item"} />
        </View>
        <View style={[styles.flexFullColumn, { padding: 15 }]}>
          <View style={{ flex: 2 }}>
            <ImageBackground
              source={getImageFromUIMap("inventory_button2.png")}
              style={[
                styles.imageBackgroundFull,
                styles.flexFullRow,
                { padding: 15 },
              ]}
              resizeMode="stretch"
            >
              <View
                style={[
                  styles.flexFullColumn,
                  { justifyContent: "space-evenly" },
                ]}
              >
                <Text style={{ color: "gold" }}>
                  Health: {this.state.selectedItem.Health}
                </Text>
                <Text style={{ color: "gold" }}>
                  Attack: {this.state.selectedItem.Attack}
                </Text>
                <Text style={{ color: "gold" }}>
                  Defence: {this.state.selectedItem.Defence}
                </Text>
              </View>
              <View
                style={[
                  styles.flexFullColumn,
                  { justifyContent: "space-evenly" },
                ]}
              >
                <Text style={{ color: "gold" }}>
                  Magic: {this.state.selectedItem.Magic}
                </Text>
                <Text style={{ color: "gold" }}>
                  Resistance: {this.state.selectedItem.Resistance}
                </Text>
                <Text style={{ color: "gold" }}>
                  Mind: {this.state.selectedItem.Mind}
                </Text>
              </View>
              <View
                style={[
                  styles.flexFullColumn,
                  { justifyContent: "space-evenly" },
                ]}
              >
                <Text style={{ color: "gold" }}>
                  Crit Chance: {this.state.selectedItem.CritChance}
                </Text>
                <Text style={{ color: "gold" }}>
                  Evasion Chance: {this.state.selectedItem.Evasion}
                </Text>
                <Text style={{ color: "gold" }}>
                  Speed: {this.state.selectedItem.Speed}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ flex: 5 }}>
            <MidBarReady>
              <View style={styles.listPadding}>
                <FlatList
                  indicatorStyle="white"
                  numColumns={5}
                  extraData={this.state.items}
                  data={this.state.items}
                  renderItem={({ item }) => this.renderItem(item)}
                  keyExtractor={(item: Item) => item.id.toString()}
                />
              </View>
            </MidBarReady>
          </View>
          <View style={{ flex: 1 }}>
            <ImageBackground
              style={styles.imageBackgroundFull}
              resizeMode="stretch"
              source={getImageFromUIMap("button_ready_on.png")}
            >
              <Button
                title="Equip Item"
                containerStyle={styles.center}
                titleStyle={styles.center}
                buttonStyle={{ flex: 1, backgroundColor: "transparent" }}
                onPress={this.equipItem}
              />
            </ImageBackground>
          </View>
        </View>
      </BackgroundContainer>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    character: state.Character,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    equipHelmet: (item: Item) => dispatch({ type: "equipHelmet", item: item }),
    equipShoulder: (item: Item) =>
      dispatch({ type: "equipShoulder", item: item }),
    equipChest: (item: Item) => dispatch({ type: "equipChest", item: item }),
    equipPant: (item: Item) => dispatch({ type: "equipPant", item: item }),
    equipBoot: (item: Item) => dispatch({ type: "equipBoot", item: item }),
    equipNecklace: (item: Item) =>
      dispatch({ type: "equipNecklace", item: item }),
    equipCape: (item: Item) => dispatch({ type: "equipCape", item: item }),
    equipBracer: (item: Item) => dispatch({ type: "equipBracer", item: item }),
    equipGlove: (item: Item) => dispatch({ type: "equipGlove", item: item }),
    equipWeapon: (item: Item) => dispatch({ type: "equipWeapon", item: item }),

    unequipHelmet: () => dispatch({ type: "unequipHelmet" }),
    unequipShoulder: () => dispatch({ type: "unequipShoulder" }),
    unequipChest: () => dispatch({ type: "unequipChest" }),
    unequipPant: () => dispatch({ type: "unequipPant" }),
    unequipBoot: () => dispatch({ type: "unequipBoot" }),
    unequipNecklace: () => dispatch({ type: "unequipNecklace" }),
    unequipCape: () => dispatch({ type: "unequipCape" }),
    unequipBracer: () => dispatch({ type: "unequipBracer" }),
    unequipGlove: () => dispatch({ type: "unequipGlove" }),
    unequipWeapon: () => dispatch({ type: "unequipWeapon" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipItemsScreen);
