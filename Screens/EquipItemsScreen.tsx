import React, { Component } from "react";
import { BackgroundContainer, Header } from "../Components/ComponentIndex";
import { View, ImageBackground, Text, Dimensions, Image } from "react-native";
import styles from "../StyleSheet/Styles";
import { getImageFromUIMap } from "../AssetMaps/UIMap";
import { Button } from "react-native-elements";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import MidBarReady from "../Components/MidBarReadyContainer";
import { getImageFromIconsFreeMap } from "../AssetMaps/IconsFreeMap";

export default class EquipItemsScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: [],
      selectedItem: {}
    };
    console.log(this.props.route.params.index);
    console.log(this.props.route.params.leftSide);
  }

  componentDidMount = (): void => {
    let items: Item[] = [];
    for(let i = 0; i < 70; i++){
      let item: any = {
        Health: Math.round(Math.random()*400),
        Attack: Math.round(Math.random()*400),
        Defence: Math.round(Math.random()*400),
        Magic: Math.round(Math.random()*400),
        Resistance: Math.round(Math.random()*400),
        Mind: Math.round(Math.random()*400),
        CritChance: Math.round(Math.random()*100),
        EvasionChance: Math.round(Math.random()*100),
        Speed: Math.round(Math.random()*100),
        id: i.toString(),
        type: 'armor',
        image: getImageFromIconsFreeMap('armor_icon.png')
      }
      items.push(item);
    }
    this.setState({items})
  }

  equipItem = (): void => {
    this.props.navigation.pop();
  }

  itemPressed = (item: Item): void => {
    console.log('pressed');
    this.setState({selectedItem: item});
    
  }

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
            <TouchableHighlight
            onPress={() => this.itemPressed(item)}>
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
              <View style={[styles.flexFullColumn,{justifyContent:'space-evenly'}]}>
            <Text style={{ color: "gold" }}>Health: {this.state.selectedItem.Health}</Text>
                <Text style={{ color: "gold" }}>Attack: {this.state.selectedItem.Attack}</Text>
                <Text style={{ color: "gold" }}>Defence: {this.state.selectedItem.Defence}</Text>
              </View>
              <View style={[styles.flexFullColumn,{justifyContent:'space-evenly'}]}>
                <Text style={{ color: "gold" }}>Magic: {this.state.selectedItem.Magic}</Text>
                <Text style={{ color: "gold" }}>Resistance: {this.state.selectedItem.Resistance}</Text>
                <Text style={{ color: "gold" }}>Mind: {this.state.selectedItem.Mind}</Text>
              </View>
              <View style={[styles.flexFullColumn,{justifyContent:'space-evenly'}]}>
                <Text style={{ color: "gold" }}>Crit Chance: {this.state.selectedItem.CritChance}</Text>
                <Text style={{ color: "gold" }}>Evasion Chance: {this.state.selectedItem.Evasion}</Text>
                <Text style={{ color: "gold" }}>Speed: {this.state.selectedItem.Speed}</Text>
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
              buttonStyle={{flex:1, backgroundColor: "transparent" }}
              onPress={this.equipItem}
            />
          </ImageBackground>
          </View>
        </View>
      </BackgroundContainer>
    );
  }
}
