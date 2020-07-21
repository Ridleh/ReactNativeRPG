import React from "react";
import HomeScreen from "../Screens/HomeScreen";
import InventoryScreen from "../Screens/InventoryScreen";
import PartyScreen from "../Screens/PartyScreen";
import QuestScreen from "../Screens/QuestScreen";
import ShopScreen from "../Screens/ShopScreen";
import BattleScreen from "../Screens/BattleScreen";
import RecruitScreen from "../Screens/RecruitScreen";
import CharacterScreen from "../Screens/CharacterScreen";
import CharacterStack from "./CharacterStack";

import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import QuestStack from "./QuestStack";
import { getImageFromIconsMap } from "../AssetMaps/IconsMap";

const Drawer = createBottomTabNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        tabBarOptions={{activeBackgroundColor:'orange'}}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ unmountOnBlur: true,
            tabBarIcon: ({focused}) => TabBarIcon(focused, 'Quest.png')
           }}
        />
        <Drawer.Screen
          name="Character"
          component={CharacterStack}
          options={{ unmountOnBlur: true,
            tabBarIcon: ({focused}) => TabBarIcon(focused, 'Equip.png') }}
        />
        <Drawer.Screen
        name='Shop'
        component={ShopScreen}
        options={{unmountOnBlur: true,
          tabBarIcon: ({focused}) => TabBarIcon(focused, 'greed.png')}}
        />
        <Drawer.Screen
        name='Quests'
        component={QuestStack}
        options={{unmountOnBlur: true,
          tabBarIcon: ({focused}) => TabBarIcon(focused, 'Quest.png')}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const TabBarIcon = (focused: boolean, image: string) => {
  return (
    <Image
      style={{
        width: focused ? 36 : 30,
        height: focused ? 36 : 30,
      }}
      source={getImageFromIconsMap(image)}
    />
  );
};