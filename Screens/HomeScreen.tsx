import React, { Component } from "react";
import BackgroundContainer from "./Components/BackgroundContainer";

export default class HomeScreen extends Component<any, any> {
  webview = null;
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    return (
      <BackgroundContainer>
      </BackgroundContainer>
    );
  }
}
