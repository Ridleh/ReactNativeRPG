import React from "react";
import HomeScreen from "../Screens/HomeScreen";

import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import BattleStack from './BattleStack';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='Bottom Tab'>
      <Stack.Screen
          name="Bottom Tab"
          component={BottomTabNavigator}
        />
        <Stack.Screen
          name="Battle"
          component={BattleStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}