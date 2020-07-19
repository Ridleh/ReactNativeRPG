import React, { Component } from "react";
import {BackgroundContainer, Header} from "../Components/ComponentIndex";

export default class EquipItemsScreen extends Component<any, any> {
  webview = null;
  constructor(props: any) {
    super(props);
    this.state = {};
    console.log('error')
  }

  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    return (
      <BackgroundContainer>
        <Header
        title={'Equip Item'}
        />
      </BackgroundContainer>
    );
  }
}
