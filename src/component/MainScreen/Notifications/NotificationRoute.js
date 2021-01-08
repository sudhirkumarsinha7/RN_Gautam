//This JS file is associated with the route (Navigation) for Notification ICON.

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import news from "./news";
import Second from "./oldNews";

const Stack = createStackNavigator();
const StackList1 = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="news" component={news} />
            <Stack.Screen name="Second" component={Second} />
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