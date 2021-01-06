import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./Home/HomeRoute";
//import Notification from "./Notification/NotificationRoute";
import Profile from "./Profile/EmployeeRoute";
import Settings from "./Settings/SettingRoute";
import * as React from 'react';


const Tab = createBottomTabNavigator();

const TabList = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            {/* <Tab.Screen name="Notification" component={Notification} /> */}
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Settings" component={Settings} />

        </Tab.Navigator>
    );
}


const fun = () => {
    return(
        <NavigationContainer>
            <TabList/>
        </NavigationContainer>
            
    )

}

export default fun;



