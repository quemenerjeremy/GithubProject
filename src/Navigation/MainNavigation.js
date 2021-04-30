import React from 'react';
import { useSelector } from 'react-redux';

import BottomNavigation from './NavigationBottom';
import { getUserData } from '../Redux/Selectors';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigatorScreen from './NavigationStack';

const MainNavigation = () => {
    const userData = useSelector(getUserData)
    return (
        <NavigationContainer>
            {userData.login === null ? (
                <MainStackNavigatorScreen/>
            ): (
                <BottomNavigation/>
            )}
        </NavigationContainer>
    )
}

export default MainNavigation