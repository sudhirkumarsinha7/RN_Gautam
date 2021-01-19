//This JS file is associated with the route (Navigation) for Home ICON.

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeContent from "./HomeContent";
import RN from "./reactnative";
import Javascript from "./javascript";
import ReactNav from "./reactnav";
import Redux from "./redux";

const Stack = createStackNavigator();
const StackList = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeContent" component={HomeContent} options={{headerShown:false}}/>
            <Stack.Screen name="RN" component={RN} options={{headerShown:false}}/>
            <Stack.Screen name="Javascript" component={Javascript} options={{headerShown:false}} />
            <Stack.Screen name="ReactNav" component={ReactNav} options={{headerShown:false}}/>
            <Stack.Screen name="Redux" component={Redux} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}
const Run = () => {
    return (
        // <NavigationContainer>
            <StackList/>
        //  </NavigationContainer> 
    );
}
export default Run