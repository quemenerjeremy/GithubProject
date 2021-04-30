import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../Views/Connection/SiginIn'
import BottomNavigation from './NavigationBottom';

const MainStackNavigator = createStackNavigator();

const MainStackNavigatorScreen = () => {
    return (
        <MainStackNavigator.Navigator>
            <MainStackNavigator.Screen
                name="loginScreen"
                component={SignIn}
                options={{
                    headerShown: false
                }}
            />
            <MainStackNavigator.Screen
                name="HomeScreen"
                component={BottomNavigation}
                options={{
                    headerShown: false
                }}
            />
        </MainStackNavigator.Navigator>
    );
}




export default MainStackNavigatorScreen;