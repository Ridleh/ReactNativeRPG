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
import { Button, ButtonGroup, Icon, Header } from "react-native-elements";
import { TouchableHighlight } from "react-native-gesture-handler";
import * as Database from "../ItemsAndSpells/ItemsAndSpellsDatabase";
import { connect } from "react-redux";
import * as Interfaces from "../Interfaces/InterfaceIndex";
import * as StatHandler from "../Systems/StatHandler";

import { ItemTypes } from "../ItemsAndSpells/ItemsAndSpellsDatabase";
import { Types } from "../ItemsAndSpells/ItemTypes/Types";

import {BackgroundContainer} from '../Components/ComponentIndex';

const { height, width } = Dimensions.get("window");

export default class ShopScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <BackgroundContainer>
        
      </BackgroundContainer>
    );
  }
}