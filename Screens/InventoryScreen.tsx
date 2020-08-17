import React, { Component } from "react";
import { Text, View} from "react-native";
import styles from "../StyleSheet/Styles";
import {
  BackgroundContainer,
  HeaderWithButton,
  RenderItemsComponent,
} from "../Components/ComponentIndex";
import { ButtonGroup, Overlay } from "react-native-elements";
import { getImageFromIconsFreeMap } from "../AssetMaps/IconsFreeMap";
import { connect } from "react-redux";

class InventoryScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      weaponsArray: [],
      armorArray: [],
      selectedIndex: 0,
      showOverlay: false
    };
  }
  componentDidMount() {
    const inventory: Inventory = this.props.inventory;
    var armorArray: Item[] = [
      ...inventory.Boots,
      ...inventory.Bracers,
      ...inventory.Capes,
      ...inventory.Chests,
      ...inventory.Gloves,
      ...inventory.Helmets,
      ...inventory.Necklaces,
      ...inventory.Pants,
      ...inventory.Shoulders
    ];
    var weaponsArray: Item[] = inventory.Weapons;
      this.setState({weaponsArray,armorArray})
  }

  navigateToPreviousScreen = () => {
    this.props.navigation.pop();
  };

  updateIndex(selectedIndex: number) {
    this.setState({ selectedIndex });
  }

  getData(): Item[]{
    const selectedIndex: number = this.state.selectedIndex;
    const armors: Item[] = this.state.armorArray;
    const weapons: Item[] = this.state.weaponsArray;
    return selectedIndex === 0 ? weapons : armors
  }

  toggleOverlay = () => {
    this.setState((prevState: { showOverlay: boolean }) => ({
      showOverlay: !prevState.showOverlay,
    }));
  };

  handlePress = (): void => {

  }

  render() {
    const buttons = ["Weapons", "Armor"];
    const { selectedIndex } = this.state;
    return (
      <BackgroundContainer>
        <Overlay
        animationType="fade"
        onBackdropPress={this.toggleOverlay}
        isVisible={this.state.showOverlay}>
          <Text>Overlay screen</Text>
        </Overlay>
        <View style={[styles.flexFullColumn,{padding:15}]}>
          <View style={styles.header}>
            <HeaderWithButton
              handlePress={this.navigateToPreviousScreen}
              buttonLabel={"Go Back"}
              header={"Inventory"}
            />
          </View>
          <ButtonGroup
            onPress={this.updateIndex.bind(this)}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ height: 35 }}
          />
          <RenderItemsComponent
            handlePress={this.handlePress}
            items={this.getData()}/>
        </View>
      </BackgroundContainer>
    );
  }
}
function mapStateToProps(state: any) {
  return {
    character: state.Character,
    inventory: state.Inventory
  };
}

function mapDispatchToProps(dispatch: any) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(InventoryScreen);

