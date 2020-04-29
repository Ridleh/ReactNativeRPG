import React from "react";
import HomeScreen from "../Screens/HomeScreen";
import InventoryScreen from "../Screens/InventoryScreen";
import PartyScreen from "../Screens/PartyScreen";
import QuestScreen from "../Screens/QuestScreen";
import ShopScreen from "../Screens/ShopScreen";
import BattleScreen from "../Screens/BattleScreen";

import PartyStack from './PartyStack/PartyStack';
import QuestStack from './QuestStack/QuestStack';

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="Shop"
          component={ShopScreen}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="Inventory"
          component={InventoryScreen}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="Party"
          component={PartyStack}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="Quest"
          component={QuestStack}
          options={{ unmountOnBlur: true }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export { HomeScreen, InventoryScreen, PartyScreen, QuestScreen, ShopScreen };
