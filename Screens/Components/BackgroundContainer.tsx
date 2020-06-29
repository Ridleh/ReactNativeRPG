import React, { Component } from "react";
import { View, ImageBackground } from "react-native";
import styles from "../../StyleSheet/Styles";

export default class BackgroundContainer extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.rootContainer}>
        <ImageBackground
          source={require("../../Assets/GUI_Parts_Free/bar_ready.png")}
          style={ styles.imageBackgroundFull }
          resizeMode="stretch"
        >
          <View style={styles.rootContainerPadding}>{this.props.children}</View>
        </ImageBackground>
      </View>
    );
  }
}
