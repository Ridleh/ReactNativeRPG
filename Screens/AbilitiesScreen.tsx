import React, { Component } from "react";
import {
  HeaderWithButton,
  BackgroundContainer,
  MidBarReadyContainer,
  SectionSelector,
} from "../Components/ComponentIndex";
import { View, ImageBackground, Dimensions, Text, Image } from "react-native";
import styles from "../StyleSheet/Styles";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import { getImageFromUIMap } from "../AssetMaps/UIMap";
import { ListItem } from "react-native-elements";
import { getImageFromIconsFreeMap } from "../AssetMaps/IconsFreeMap";

export default class HomeScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      classes: [
        {
          name: "Warrior",
          abilities: [
            { title: "Perseverance", level: 1 },
            { title: "Quick Strike", level: 1 },
            { title: "grit", level: 1 },
            { title: "Slash", level: 1 },
            { title: "Warrior Mastery", level: 1 },
            { title: "weapon booster", level: 1 },
          ],
        },
        {
          name: "Mage",
          abilities: [
            { title: "Energy Bolt", level: 1 },
            { title: "Magic Armor", level: 1 },
            { title: "Flame Orb", level: 1 },
            { title: "Cold Beam", level: 1 },
            { title: "Explosion", level: 1 },
            { title: "Arcane Overdrive", level: 1 },
          ],
        },
        {
          name: "Thief",
          abilities: [
            { title: "Double Stab", level: 1 },
            { title: "Lucky Seven", level: 1 },
            { title: "Bandit Slash", level: 1 },
            { title: "Nimble Body", level: 1 },
            { title: "Physical Training", level: 1 },
            { title: "Fatal Blow", level: 1 },
          ],
        },
        {
          name: "Archer",
          abilities: [
            { title: "Arrow Blow", level: 1 },
            { title: "Arrow Bomb", level: 1 },
            { title: "Bow Booster", level: 1 },
            { title: "Mortal Blow", level: 1 },
            { title: "Boost", level: 1 },
            { title: "Pain Killer", level: 1 },
          ],
        },
      ],
      classSelectorIndex: 0,
      currentClass: {}
    };
  }

  componentDidMount = (): void => {
    this.setState({
      currentClass: this.state.classes[this.state.classSelectorIndex]
    })
  }

  navigateToPreviousScreen = () => {
    this.props.navigation.pop();
  };

  changeClass = (direction: number): void => {
    if (this.state.classSelectorIndex + direction < 0) {
      return;
    } else if (
      this.state.classSelectorIndex + direction >=
      this.state.classes.length
    ) {
      return;
    }
    this.setState((prevState: { classSelectorIndex: number }) => ({
      classSelectorIndex: prevState.classSelectorIndex + direction,
      currentClass: this.state.classes[prevState.classSelectorIndex + direction]
    }));
  };

  renderItem = (item: any): JSX.Element => {
    return (
      <ListItem
        containerStyle={{
          backgroundColor: "darkgray",
          borderRadius: 12,
          marginBottom: 10,
          height: Dimensions.get('window').height/6
        }}
        title={item.title}
        subtitle="This is an ability"
        bottomDivider
        chevron
        leftElement={
          <Image
          style={{width:75, height: 75}}
          source={getImageFromIconsFreeMap("skill_icon_02.png")}/>
        }
        rightElement={
          <View style={{flexDirection:'column', justifyContent:'flex-end'}}>
            <TouchableHighlight
          onPress={() => this.changeSkillLevel(item, 1)}>
            <Image
          style={{width:35, height: 35}}
          source={getImageFromUIMap("Mini_arrow_top.png")}/>
          </TouchableHighlight>
          
          <ImageBackground 
          style={{width:40, height: 40}}
          source={getImageFromUIMap("lil_roundframe_ready.png")}>
            <View style={styles.center}>
        <Text style={{color: 'white'}}>{item.level}</Text>
            </View>
          </ImageBackground>
          <TouchableHighlight
          onPress={() => this.changeSkillLevel(item, -1)}>
          <Image
          style={{width:35, height: 35}}
          source={getImageFromUIMap("Mini_arrow_bot.png")}/>
          </TouchableHighlight>
          </View>
        }
      />
    );
  };

  //this is terrible but lets just go with it for now
  changeSkillLevel = (ability: any, change: number): void => {
    ability.level += change;
    let currentClass: any = this.state.currentClass;
    for(let i = 0, n = currentClass.abilities.length; i < n; i++){
      if(currentClass.abilities[i].title === ability.title){
        currentClass.abilities[i] = ability;
        this.setState({
          currentClass: currentClass
        })
        break;
      }
    }
  }

  render() {
    return (
      <BackgroundContainer>
        <View style={styles.header}>
          <HeaderWithButton
            handlePress={this.navigateToPreviousScreen}
            buttonLabel={"Go Back"}
            header={"Abilities"}
          />
        </View>
        <View style={styles.header}>
          <SectionSelector
            handlePress={this.changeClass}
            class={this.state.currentClass}
            classLength={this.state.classes.length}
            classSelectorIndex={this.state.classSelectorIndex}
          />
        </View>
        <MidBarReadyContainer>
          <FlatList
            data={this.state.currentClass.abilities}
            extraData={this.state.currentClass.abilities}
            keyExtractor={(item: any) => item.title}
            renderItem={({ item }) => this.renderItem(item)}
          />
        </MidBarReadyContainer>
      </BackgroundContainer>
    );
  }
}
