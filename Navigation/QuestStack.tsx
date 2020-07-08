import React from "react";
import QuestScreen from "../Screens/QuestScreen";
import BattleScreen from "../Screens/BattleScreen";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

const Stack = createNativeStackNavigator();

export default function QuestStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Quest'}
    >
      <Stack.Screen name="Quest" component={QuestScreen} />
      <Stack.Screen name="Battle" component={BattleScreen} options={{gestureEnabled: false}}/>
    </Stack.Navigator>
  );
}
