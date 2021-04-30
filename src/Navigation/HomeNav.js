import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Views/Home/Home'

const HomeStackNavigator = createStackNavigator();

const HomeScreenNav = () => {
    return (
        <HomeStackNavigator.Navigator>
            <HomeStackNavigator.Screen
                    name="HomeStackScreen"
                    component={Home}
                    options={{
                        headerShown: false
                    }}
            />
        </HomeStackNavigator.Navigator>
    )
}

export default HomeScreenNav