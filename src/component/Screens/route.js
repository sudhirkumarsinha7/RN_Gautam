// In Route.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Test from './Test'
import Test1 from './Test1'
import Test3 from './Test3'
import Test4 from './Test4'
import Test5 from './Test5'

const Stack = createStackNavigator();
const StackList =()=>{
    return <Stack.Navigator>
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Test1" component={Test1} />
        <Stack.Screen name="Test3" component={Test3} />
        <Stack.Screen name="Test4" component={Test4} />
        <Stack.Screen name="Test5" component={Test5} />
      </Stack.Navigator>
}
const Route=()=> {
  return (
    <NavigationContainer>
      <StackList/>
    </NavigationContainer>
  );
}

export default Route;