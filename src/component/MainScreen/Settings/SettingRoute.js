//This JS file is associated with the route (Navigation) for Profile ICON.

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Account from "./Account";
import Privacy from "./Privacy";


const Stack = createStackNavigator();
const StackList = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Privacy" component={Privacy} />
        </Stack.Navigator>
    )
}
const Setting = () => {
    return (
        // <NavigationContainer>
            <StackList />
        // </NavigationContainer>
    );
}
export default Setting