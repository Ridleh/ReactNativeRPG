import React from 'react'
import QuestScreen from "../../Screens/QuestScreen";
import BattleScreen from "../../Screens/BattleScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function stackNavigation() {
  return (
      <Stack.Navigator initialRouteName="Quest" headerMode="none">
        <Stack.Screen name="Quest" component={QuestScreen} />
        <Stack.Screen
          name="Battle"
          component={BattleScreen}
          options={{gestureEnabled: false}}
        />
      </Stack.Navigator>
  );
}
