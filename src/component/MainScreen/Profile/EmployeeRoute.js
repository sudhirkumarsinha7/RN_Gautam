//This JS file is associated with the route (Navigation) for Profile ICON.

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Employee from "./Employee";
import login from "./login";
import reg from "./reg.js";
import profileDetails from "./profileDetails";


const Stack = createStackNavigator();
const StackList = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="login" component={login} options={{headerShown:false}}/>
            <Stack.Screen name="reg" component={reg} options={{headerShown:false}}/>
            <Stack.Screen name="Employee" component={Employee} options={{headerShown:false}}/> 
            <Stack.Screen name="Profile" component={profileDetails} options={{headerShown:false}}/> 

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