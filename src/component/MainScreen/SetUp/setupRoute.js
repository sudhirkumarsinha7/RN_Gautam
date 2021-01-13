//This JS file is associated with the route (Navigation) for Notification ICON.

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SetUp from "./SetUp";
import Ios from "./iosSetup";
import androidsetup from "./androidsetup";
import QRSetup from './QRSetup';

const Stack = createStackNavigator();
const StackList1 = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SetUp" component={SetUp} />
            <Stack.Screen name="Ios" component={Ios} />
            <Stack.Screen name="androidsetup" component={androidsetup}/>
            <Stack.Screen name="QRSetup" component={QRSetup}/>
        </Stack.Navigator>
    )
}
const Notification = () => {
    return (
    // <NavigationContainer>
        <StackList1 />
    // </NavigationContainer>
    );
}
export default Notification