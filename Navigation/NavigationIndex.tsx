import React from "react";
import HomeScreen from "../Screens/HomeScreen";
import InventoryScreen from "../Screens/InventoryScreen";
import PartyScreen from "../Screens/PartyScreen";
import QuestScreen from "../Screens/QuestScreen";
import ShopScreen from "../Screens/ShopScreen";
import BattleScreen from "../Screens/BattleScreen";
import RecruitScreen from "../Screens/RecruitScreen";
import CharacterScreen from "../Screens/CharacterScreen";

import PartyStack from "./PartyStack/PartyStack";
import QuestStack from "./QuestStack/QuestStack";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { getPartyState } from "../Redux/Actions";

const Drawer = createDrawerNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{
          backgroundColor: "#4A3531",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="Character"
          component={CharacterScreen}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="Inventory"
          component={InventoryScreen}
          options={{ unmountOnBlur: true }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export { HomeScreen, InventoryScreen, PartyScreen, QuestScreen, ShopScreen };
