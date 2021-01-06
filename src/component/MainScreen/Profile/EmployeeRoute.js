//This JS file is associated with the route (Navigation) for Profile ICON.

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Employee from "./Employee";
import SelectedProfile from "./SelectedProfile";

const Stack = createStackNavigator();
const StackList = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Employee" component={Employee} />
            <Stack.Screen name="SelectedProfile" component={SelectedProfile} />
        </Stack.Navigator>
    )
}
const EmpRun = () => {
    return (
        // <NavigationContainer>
            <StackList />
        // </NavigationContainer>
    );
}
export default EmpRun