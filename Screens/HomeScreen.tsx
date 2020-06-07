import React, { Component } from "react";
import BackgroundContainer from "./Components/BackgroundContainer";

export default class HomeScreen extends Component<any, any> {
  webview = null;
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return <BackgroundContainer></BackgroundContainer>;
  }
}
