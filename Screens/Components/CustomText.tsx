import React, { Component } from "react";
import { Text } from "react-native";

import { Font } from "expo";

class CustomText extends Component<any, any> {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {

    this.setState({
      fontLoaded: true
    });
  }

  render() {
    const { children, styles } = this.props;
    if (this.state.fontLoaded) {
      return <Text style={[styles]}>{children}</Text>;
    }

    return <Text style={styles}>{children}</Text>;
  }
}

export default CustomText;
