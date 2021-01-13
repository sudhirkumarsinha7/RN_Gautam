import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./Home/HomeRoute";
import Info from "./SetUp/setupRoute";
import Profile from "./Profile/EmployeeRoute";
import Settings from "./Settings/SettingRoute";
import * as React from 'react';


const Tab = createBottomTabNavigator();
const customTabBarStyle = {
    activeTintColor: 'white',
    inactiveTintColor: 'gray',
    style: {backgroundColor: '#800000' , 
    
    }, 
}

const TabList = () => {
    return (
        <Tab.Navigator 
        initialRouteName="Home"
        tabBarOptions={customTabBarStyle}>

            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="SetUp" component={Info} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Settings" component={Settings} />

        </Tab.Navigator>
    );
}


const fun = () => {
    return (
        <NavigationContainer>
            <TabList />
        </NavigationContainer>
    )
}

export default fun;



