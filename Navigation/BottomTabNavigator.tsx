import React from "react";
import HomeScreen from "../Screens/HomeScreen";
import ShopScreen from "../Screens/ShopScreen";
import CharacterStack from "./CharacterStack";
import QuestScreen from '../Screens/QuestScreen';

import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getImageFromIconsMap } from "../AssetMaps/IconsMap";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{activeBackgroundColor:'orange'}}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ unmountOnBlur: true,
            tabBarIcon: ({focused}) => TabBarIcon(focused, 'Quest.png')
           }}
        />
        <Tab.Screen
          name="Character"
          component={CharacterStack}
          options={{ unmountOnBlur: true,
            tabBarIcon: ({focused}) => TabBarIcon(focused, 'Equip.png') }}
        />
        <Tab.Screen
        name='Shop'
        component={ShopScreen}
        options={{unmountOnBlur: true,
          tabBarIcon: ({focused}) => TabBarIcon(focused, 'greed.png')}}
        />
        <Tab.Screen
        name='Quests'
        component={QuestScreen}
        options={{unmountOnBlur: true,
          tabBarIcon: ({focused}) => TabBarIcon(focused, 'Quest.png')}}
        />
      </Tab.Navigator>
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