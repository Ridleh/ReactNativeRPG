import React, { Component } from "react";
import { View, ImageBackground } from "react-native";
import styles from "../../StyleSheet/Styles";
import {getImage} from '../../AssetIndex/GUIPartsIndex';

export default class BackgroundContainer extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.rootContainer}>
        <ImageBackground
          source={getImage('barReady')}
          style={ styles.imageBackgroundFull }
          resizeMode="stretch"
        >
          <View style={styles.rootContainerPadding}>{this.props.children}</View>
        </ImageBackground>
      </View>
    );
  }
}
