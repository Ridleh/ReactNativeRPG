import React, { Component } from "react";
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  FlatList,
  ImageBackground,
  Image,
  TouchableHighlight,
} from "react-native";

import {
  BackgroundContainer,
  Header,
  MidBarReadyContainer,
} from "../Components/ComponentIndex";
import styles from "../StyleSheet/Styles";
import { getImageFromUIMap } from "../AssetMaps/UIMap";
import { getImageFromIconsMap } from "../AssetMaps/IconsMap";
import { Icon, ButtonGroup, Overlay } from "react-native-elements";
import { getImageFromIconsFreeMap } from "../AssetMaps/IconsFreeMap";
const { height, width } = Dimensions.get("window");

export default class ShopScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: [],
      weapons: [],
      armors: [],
      runes: [],
      selectedIndex: 0,
      showOverlay: false,
    };
  }

  componentDidMount() {
    const images: any[] = [
      getImageFromIconsFreeMap("armor_icon.png"),
      getImageFromIconsFreeMap("stoune_icon.png"),
      getImageFromIconsFreeMap("weapon_icon.png"),
    ];
    var items: any[] = [];
    var weapons: any[] = [];
    var armors: any[] = [];
    var runes: any[] = [];
    for (let i = 0; i < 30; i++) {
      var img: number = Math.floor(Math.random() * 3);
      var dummyData = {
        name: "item",
        image: images[img],
        id: i.toLocaleString(),
      };
      if (img === 1) {
        armors.push(dummyData);
      } else if (img === 2) {
        runes.push(dummyData);
      } else {
        weapons.push(dummyData);
      }
      items.push(dummyData);
    }
    this.setState({
      items: items,
      weapons: weapons,
      armors: armors,
      runes: runes,
    });
  }

  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  updateIndex(selectedIndex: number) {
    this.setState({ selectedIndex });
  }

  getData() {
    if (this.state.selectedIndex === 0) {
      return this.state.items;
    } else if (this.state.selectedIndex === 1) {
      return this.state.weapons;
    } else if (this.state.selectedIndex === 2) {
      return this.state.armors;
    } else {
      return this.state.runes;
    }
  }

  toggleOverlay = () => {
    this.setState((prevState: { showOverlay: boolean }) => ({
      showOverlay: !prevState.showOverlay,
    }));
  };

  renderItems = (item: any) => {
    return (
      <TouchableHighlight style={{ flex: 1 }} onPress={this.toggleOverlay}>
        <View
          style={{
            backgroundColor: "transparent",
            alignItems: "center",
            justifyContent: "center",
            margin: 1 / 5,
            flex: 1,
            height: Dimensions.get("window").width / 5, // approximate a square
            width: Dimensions.get("window").width / 5,
          }}
        >
          <ImageBackground
            style={{ height: "100%", width: "100%" }}
            source={getImageFromUIMap("little_background_frame.png")}
            resizeMode="center"
          >
            <ImageBackground
              style={{ height: "100%", width: "100%" }}
              source={getImageFromUIMap("inventory_frame_little.png")}
              resizeMode="stretch"
            >
              <Image
                source={item.image}
                style={{ width: "95%", height: "95%" }}
              />
            </ImageBackground>
          </ImageBackground>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    const buttons = ["All", "Weapons", "Armor", "Runes"];
    const { selectedIndex } = this.state;

    return (
      <BackgroundContainer>
        <View style={styles.header}>
          <Header handlePress={this.openDrawer} />
        </View>
        <View style={styles.flexFullColumn}>
          <View>
            <ButtonGroup
              onPress={this.updateIndex.bind(this)}
              selectedIndex={selectedIndex}
              buttons={buttons}
              containerStyle={{ height: 75 }}
            />
          </View>
          <View style={{ flex: 2 }}>
            <MidBarReadyContainer>
              <FlatList
                numColumns={5}
                data={this.getData()}
                renderItem={({ item }) => this.renderItems(item)}
                keyExtractor={(item) => item.id}
              />
            </MidBarReadyContainer>
          </View>
        </View>
        <Overlay
          isVisible={this.state.showOverlay}
          onBackdropPress={this.toggleOverlay}
        >
          <Text>This is buy overlay</Text>
        </Overlay>
      </BackgroundContainer>
    );
  }
}
