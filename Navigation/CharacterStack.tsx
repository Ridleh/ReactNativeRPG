import React from "react";
import CharacterScreen from '../Screens/CharacterScreen';
import InventoryScreen from '../Screens/InventoryScreen';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function CharacterStack(){
    return(
        <Stack.Navigator
        headerMode='none'>
            <Stack.Screen name = 'Character' component={CharacterScreen}/>
            <Stack.Screen name = 'Inventory' component={InventoryScreen}/>
        </Stack.Navigator>
    );
}
