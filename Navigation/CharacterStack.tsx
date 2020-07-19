import React from "react";
import CharacterScreen from "../Screens/CharacterScreen";
import InventoryScreen from "../Screens/InventoryScreen";
import AbilitiesScreen from "../Screens/AbilitiesScreen";
import EquipItemsScreen from '../Screens/EquipItemsScreen';
import { createNativeStackNavigator } from "react-native-screens/native-stack";

const Stack = createNativeStackNavigator();

export default function CharacterStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Character'}
    >
      <Stack.Screen name="Character" component={CharacterScreen} />
      <Stack.Screen name="Inventory" component={InventoryScreen} />
      <Stack.Screen name="Abilities" component={AbilitiesScreen} />
      <Stack.Screen name="EquipItems" component={EquipItemsScreen} />
    </Stack.Navigator>
  );
}
