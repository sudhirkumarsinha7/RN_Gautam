import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./Home/HomeRoute";
import Info from "./SetUp/setupRoute";
import Profile from "./Profile/EmployeeRoute";
import Settings from "./Settings/SettingRoute";
import * as React from 'react';
// import VectorIcon from 'react-native-vector-icons/Ionicons'



const Tab = createBottomTabNavigator();
const customTabBarStyle = {
    activeTintColor: 'white',
    inactiveTintColor: 'black',
    style: {backgroundColor: '#800000' , 
    
    }, 
}

const TabList = () => {
    return (
        <Tab.Navigator 
        // initialRouteName="Home"
        // tabBarOptions={customTabBarStyle}
        // screenOptions={({ route }) => ({
        //     tabBarIcon: ({ focused, color, size }) => {
        //       let iconName;
  
        //       if (route.name === 'Home') {
        //         iconName = focused ? 'home' : 'home';
        //       } else if (route.name === 'SetUp') {
        //         iconName = focused ? 'md-map-sharp' : 'md-map-sharp';
        //       }else if (route.name === 'Profile') {
        //         iconName = focused ? 'md-cart-sharp' : 'md-cart-sharp';
        //       }else if (route.name === 'Settings') {
        //         iconName = focused ? 'settings' : 'settings';
        //       }
        //       // You can return any component that you like here!
        //       return <VectorIcon name={iconName} size={size} color={color} />;
        //     },
        //   })}
          tabBarOptions={{
            labelStyle:{
                fontWeight:'bold',
                fontSize:15,
                marginBottom:15
            },
            activeTintColor: 'white',
            inactiveBackgroundColor : 'white',
            activeBackgroundColor : '#1e90ff'
  
          }}
          >

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



