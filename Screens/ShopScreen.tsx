import React, { Component } from "react";
import { Text, View } from "react-native";

import {
  BackgroundContainer,
  Header,
  RenderItemsComponent,
  StatsContainerMid,
  ButtonWide,
} from "../Components/ComponentIndex";
import styles from "../StyleSheet/Styles";
import { ButtonGroup, Overlay } from "react-native-elements";
import {
  generateRandomArmors,
  generateRandomWeapons,
} from "../SystemHandlers/ItemHandler";
import { connect } from "react-redux";

class ShopScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      weapons: [],
      armors: [],
      selectedIndex: 0,
      selectedItem: {},
      showOverlay: false,
    };
  }

  componentDidMount() {
    var weapons: Item[] = generateRandomWeapons(50);
    var armors: Item[] = generateRandomArmors(50);
    this.setState({
      weapons: weapons,
      armors: armors,
    });
  }

  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  updateIndex(selectedIndex: number) {
    this.setState({ selectedIndex });
  }

  getData() {
    return this.state.selectedIndex === 0
      ? this.state.weapons
      : this.state.armors;
  }

  toggleOverlay = () => {
    this.setState((prevState: { showOverlay: boolean }) => ({
      showOverlay: !prevState.showOverlay,
    }));
  };

  itemSelected = (item: Item): void => {
    console.log(item.type);
    this.setState({ selectedItem: item });
  };

  buyItem = (): void => {
    const item: Item = this.state.selectedItem;
    const weaponTypes: string[] = [
      "arrow",
      "axe",
      "bolt",
      "book",
      "bow",
      "crossbow", //this wont reach because we check if "crossbow" includes "bow"
      "dagger",
      "hammer",
      "scythe",
      "shield",
      "spear",
      "staff",
      "sword",
    ];
    if (weaponTypes.includes(item.type.toLowerCase())) {
      this.props.buyWeapon(item);
      return;
    }
    switch (item.type) {
      case "helmet":
        //this.props.unequipHelmet();
        this.props.buyHelmet(item);
        break;
      case "shoulder":
        //this.props.unequipShoulder();
        this.props.buyShoulder(item);
        break;
      case "chest":
        //this.props.unequipChest();
        this.props.buyChest(item);
        break;
      case "pant":
        //this.props.equipChest();
        this.props.buyPant(item);
        break;
      case "boot":
        //this.props.unequipBoot();
        this.props.buyBoot(item);
        break;
      case "necklace":
        //this.props.unequipNecklace();
        this.props.buyNecklace(item);
        break;
      case "cape":
        //this.props.unequipCape();
        this.props.buyCape(item);
        break;
      case "bracer":
        //this.props.equipBracer();
        this.props.buyBracer(item);
        break;
      case "glove":
        //this.props.equipGlove();
        this.props.buyGlove(item);
        break;
      default:
        console.warn("Warning: Item has incorrect type:", item.type);
    }
  };

  render() {
    const buttons = ["Weapons", "Armor"];
    const { selectedIndex } = this.state;

    return (
      <BackgroundContainer>
        <View style={styles.header}>
          <Header
            title={"Shop"}
            subtitle={"Tap and hold an item for more details"}
          />
        </View>
        <View style={[styles.flexFullColumn, { padding: 15 }]}>
          <View>
            <ButtonGroup
              onPress={this.updateIndex.bind(this)}
              selectedIndex={selectedIndex}
              buttons={buttons}
              containerStyle={{ height: 35 }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <StatsContainerMid selectedItem={this.state.selectedItem} />
          </View>
          <View style={{ flex: 4 }}>
            <View style={{ flex: 6 }}>
              <RenderItemsComponent
                items={this.getData()}
                handlePress={this.itemSelected}
              />
            </View>
            <View style={{ flex: 1 }}>
              <ButtonWide title={"Buy Item"} handlePress={this.buyItem} />
            </View>
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

function mapStateToProps(state: any) {
  return {
    character: state.Character,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    buyHelmet: (item: Item) => dispatch({ type: "buyHelmet", item: item }),
    buyShoulder: (item: Item) => dispatch({ type: "buyShoulder", item: item }),
    buyChest: (item: Item) => dispatch({ type: "buyChest", item: item }),
    buyPant: (item: Item) => dispatch({ type: "buyPant", item: item }),
    buyBoot: (item: Item) => dispatch({ type: "buyBoot", item: item }),
    buyNecklace: (item: Item) => dispatch({ type: "buyNecklace", item: item }),
    buyCape: (item: Item) => dispatch({ type: "buyCape", item: item }),
    buyBracer: (item: Item) => dispatch({ type: "buyBracer", item: item }),
    buyGlove: (item: Item) => dispatch({ type: "buyGlove", item: item }),
    buyWeapon: (item: Item) => dispatch({ type: "buyWeapon", item: item }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopScreen);
