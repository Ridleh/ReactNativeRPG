import React, { Component } from "react";
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  FlatList,
  ImageBackground,
  Image,
} from "react-native";

import {
  BackgroundContainer,
  Header,
  MidBarReadyContainer,
} from "../Components/ComponentIndex";
import styles from "../StyleSheet/Styles";
import { getImageFromUIMap } from "../AssetMaps/UIMap";
import { TouchableHighlight } from "react-native-gesture-handler";
import { getImageFromIconsMap } from "../AssetMaps/IconsMap";
import { Icon } from "react-native-elements";
import { getImageFromIconsFreeMap } from "../AssetMaps/IconsFreeMap";
const { height, width } = Dimensions.get("window");

export default class ShopScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const images: any[] = [
      getImageFromIconsFreeMap("armor_icon.png"),
      getImageFromIconsFreeMap("stoune_icon.png"),
      getImageFromIconsFreeMap("weapon_icon.png"),
    ];
    var items: any[] = [];
    for (let i = 0; i < 30; i++) {
      var dummyData = {
        name: "item",
        image: images[i % 3],
        id: i.toLocaleString(),
      };
      items.push(dummyData);
    }
    this.setState({ data: items });
  }

  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  renderItems = (item: any) => {
    return (
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
    );
  };

  render() {
    return (
      <BackgroundContainer>
        <Header handlePress={this.openDrawer} />
        <View style={styles.flexFullColumn}>
          <View style={{ flex: 2 }}>
            <MidBarReadyContainer>
              <FlatList
                numColumns={5}
                data={this.state.data}
                renderItem={({ item }) => this.renderItems(item)}
                keyExtractor={(item) => item.id}
              />
            </MidBarReadyContainer>
          </View>
          <View style={{ flex: 1 }}>
            <MidBarReadyContainer></MidBarReadyContainer>
          </View>
        </View>
      </BackgroundContainer>
    );
  }
}
