import React from 'react'
import PartyScreen from "../../Screens/PartyScreen";
import EditPartyMemberScreen from "../../Screens/EditPartyMemberScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function stackNavigation() {
  return (
      <Stack.Navigator initialRouteName="Party" headerMode="none">
        <Stack.Screen name="Party" component={PartyScreen} />
        <Stack.Screen
          name="EditPartyMember"
          component={EditPartyMemberScreen}
        />
      </Stack.Navigator>
  );
}
