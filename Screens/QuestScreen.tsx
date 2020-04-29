import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  FlatList,
  Dimensions,
} from "react-native";
import {
  Header,
  Button,
  ListItem,
  Overlay,
  Tooltip,
} from "react-native-elements";
import { TouchableHighlight } from "react-native-gesture-handler";
import { connect } from "react-redux";

const { height, width } = Dimensions.get("window");

class QuestScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      stamina: 100,
      questCategorySelected: false,
      showOverlay: false,
      toggleNoStaminaPopup: false,
      list: [
        {
          name: "Forest Outskirts I",
          avatar_url:
            "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
          subtitle: "Vice President",
        },
        {
          name: "Forest Outskirts II",
          avatar_url:
            "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "Vice Chairman",
        },
      ],
    };
    this.beginQuest = this.beginQuest.bind(this);
    this.toggleNoStaminaPopup = this.toggleNoStaminaPopup.bind(this);
  }

  keyExtractor = (item: any, index: number) => index.toString();

  renderItem = ({ item }: { item: any }) => (
    <ListItem
      containerStyle={{ borderRadius: 12, marginBottom: 10 }}
      title={item.name}
      subtitle="Stamina: 20   Difficulty: 10"
      leftAvatar={{ source: { uri: item.avatar_url } }}
      bottomDivider
      chevron
      onPress={() => this.renderOverlay()}
    />
  );

  renderOverlay() {
    this.setState((prevState: { showOverlay: boolean }) => ({
      showOverlay: !prevState.showOverlay,
    }));
  }

  beginQuest() {
    this.setState({ showOverlay: false });
    if (this.props.playersStamina >= 20) {
      this.props.giveStamina(-20);
      this.props.navigation.navigate("Battle");
    } else {
      this.toggleNoStaminaPopup();
    }
  }

  renderStamina() {
    return (
      <View>
        <Text>STAMINA: {this.props.playersStamina}</Text>
      </View>
    );
  }

  renderQuestCategories = ({}) => {
    if (!this.state.questCategorySelected) {
      return (
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <Button
            onPress={() => this.showSubQuests("Grassy Plains")}
            buttonStyle={{
              height: 100,
              borderRadius: 12,
              marginBottom: 30,
              backgroundColor: "green",
            }}
            title="Grassy Plains"
          />
          <Button
            buttonStyle={{
              height: 100,
              borderRadius: 12,
              marginBottom: 30,
              backgroundColor: "#d2691e",
            }}
            title="Rocky Mountains"
          />
          <Button
            buttonStyle={{ height: 100, borderRadius: 12, marginBottom: 30 }}
            title="Swifty Waters"
          />
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.list}
            renderItem={this.renderItem}
          />
          <Button
            buttonStyle={{
              alignSelf: "flex-end",
              position: "absolute",
              bottom: 85,
              left: -35,
              width: 120,
              height: 120,
              borderRadius: 100,
              marginBottom: 30,
              backgroundColor: "#964b00",
            }}
            title="Go Back"
            onPress={() => this.setState({ questCategorySelected: false })}
          />
        </View>
      );
    }
  };

  showSubQuests(title: string) {
    //console.log(title)
    this.setState({ questCategorySelected: true });
  }

  toggleNoStaminaPopup() {
    this.setState((prevState: { toggleNoStaminaPopup: boolean }) => ({
      toggleNoStaminaPopup: !prevState.toggleNoStaminaPopup,
    }));
  }

  render() {
    return (
      <View style={{ paddingTop: 25 }}>
        <Header
          containerStyle={{ backgroundColor: "#964b00", paddingBottom: 20 }}
          leftComponent={{
            icon: "menu",
            color: "#fff",
            onPress: () => this.props.navigation.openDrawer(),
          }}
          centerComponent={{ text: "QUESTS", style: { color: "#fff" } }}
          rightComponent={this.renderStamina()}
        />

        <ImageBackground
          source={require("../assets/Backgrounds/SampleBackgroundQuests.png")}
          style={{ paddingTop: 30, height: "100%", width: "100%" }}
        >
          <this.renderQuestCategories />
          <Overlay
            overlayStyle={{
              flexDirection: "column",
              backgroundColor: "chocolate",
              borderColor: "black",
              borderRadius: 20,
              borderWidth: 5,
            }}
            isVisible={this.state.showOverlay}
            onBackdropPress={() => this.renderOverlay()}
          >
            <View style={{ flex: 1 }}>
              <View style={{ flex: 9 }}>
                <Text>Quest description blah blah</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Button onPress={() => this.beginQuest()} title="BEGIN QUEST" />
              </View>
            </View>
          </Overlay>
          <Overlay
            overlayStyle={{
              flexDirection: "column",
              backgroundColor: "chocolate",
              borderColor: "black",
              borderRadius: 20,
              borderWidth: 5,
            }}
            height={height / 3}
            isVisible={this.state.toggleNoStaminaPopup}
            onBackdropPress={() => this.toggleNoStaminaPopup()}
          >
            <View style={{ flex: 1 }}>
              <View style={{ flex: 9 }}>
                <Text>You do not have enough stamina for this quest</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Button
                  onPress={() => this.toggleNoStaminaPopup()}
                  title="OK"
                />
              </View>
            </View>
          </Overlay>
        </ImageBackground>
      </View>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    playersStamina: state.playersStamina,
  };
}

function mapDispatchToProps(dispatch: any) {
  //console.log('printing dispatch',dispatch)
  return {
    giveStamina: (stamina: number) =>
      dispatch({ type: "giveStamina", stamina: stamina }),

    //decreaseCounter: () => dispatch({type: 'decreaseCounter', name :'test2'})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestScreen);
