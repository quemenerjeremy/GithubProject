import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from './HomeNav';
import ProfilStackScreen from './ProfileNav';
import SearchUserStackScreen from './SearchUserNav';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomNav = createBottomTabNavigator();

const BottomNavigation = () => {
    return ( 
        <BottomNav.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'HomeStackScreen') {
              iconName ='home'
            } else if (route.name === 'SearchUserStackScreen') {
              iconName = 'magnify';
            } else if (route.name === 'ProfilStackScreen') {
              iconName ='account';
            }

            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#F07167',
          inactiveTintColor: '#EAE6E5',
          showLabel: false,
          style: {
                borderRadius:21, 
                backgroundColor:"#4F5D75",
                height: 55, 
                position:'absolute',
                shadowRadius: 20,
                shadowColor: '#000000',
                shadowOpacity: 1,
                width: 300,
                marginLeft: 40, 
                marginBottom: 10
          }
        }}
        >
            <BottomNav.Screen
                name="HomeStackScreen"
                component={HomeStackScreen}
            />
            <BottomNav.Screen
                name="SearchUserStackScreen"
                component={SearchUserStackScreen}
            />
            <BottomNav.Screen
                name="ProfilStackScreen"
                component={ProfilStackScreen}
            />
        </BottomNav.Navigator>
    )
}

export default BottomNavigation;

