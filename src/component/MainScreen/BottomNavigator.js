import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./Home/HomeRoute";
import Info from "./Notifications/NotificationRoute";
import Profile from "./Profile/EmployeeRoute";
import Settings from "./Settings/SettingRoute";
import * as React from 'react';


const Tab = createBottomTabNavigator();

const TabList = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            labelStyle: {
                fontSize: 15,
                marginBottom: 20,
                padding: 0,
                backgroundColor:'yellow'
              },
        }}>
            <Tab.Screen name="Home" component={Home} options={{color:'red'}}/>
            <Tab.Screen name="Notifications" component={Info} />

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



