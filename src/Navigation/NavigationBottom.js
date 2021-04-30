import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from './HomeNav';
import ProfilStackScreen from './ProfileNav';
import SearchRepositorieStackScreen from './SearchRepoNav';
import SearchUserStackScreen from './SearchUserNav';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomNav = createBottomTabNavigator();

const BottomNavigation = () => {
    return ( 
        <BottomNav.Navigator>
            <BottomNav.Screen
                name="HomeStackScreen"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons
                        name="home"
                        color={color}
                        size={size}
                      />
                    ),
                }}
            />
            {/* <BottomNav.Screen
                name="SearchRepoStackScreen"
                component={SearchRepositorieStackScreen}
                options={{
                    tabBarLabel: 'Search Repos',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons
                        name="magnify"
                        color={color}
                        size={size}
                      />
                    ),
                }}
            /> */}
            <BottomNav.Screen
                name="SearchUserStackScreen"
                component={SearchUserStackScreen}
                options={{
                    tabBarLabel: 'Search User',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons
                        name="magnify"
                        color={color}
                        size={size}
                      />
                    ),
                }}
            />
            <BottomNav.Screen
                name="ProfilStackScreen"
                component={ProfilStackScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons
                        name="account"
                        color={color}
                        size={size}
                      />
                    ),
                }}
            />
        </BottomNav.Navigator>
    )
}

export default BottomNavigation;