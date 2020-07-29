import React from "react";
import QuestScreen from "../Screens/QuestScreen";
import BattleScreen from "../Screens/BattleScreen";
import BattleResultsScreen from '../Screens/BattleResultsScreen';
import { createNativeStackNavigator } from "react-native-screens/native-stack";

const Stack = createNativeStackNavigator();

export default function BattleStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Battle'}
    >
      <Stack.Screen name="Battle" component={BattleScreen}/>
      <Stack.Screen name="Battle Results" component={BattleResultsScreen}/>
    </Stack.Navigator>
  );
}
