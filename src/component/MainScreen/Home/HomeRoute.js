//This JS file is associated with the route (Navigation) for Home ICON.

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeContent from "./HomeContent";
import Second from "./Details";

const Stack = createStackNavigator();
const StackList = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeContent" component={HomeContent}/>
            <Stack.Screen name="Second" component={Second} />
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