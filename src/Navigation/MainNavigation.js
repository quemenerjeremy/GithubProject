import React from 'react';
import { useSelector } from 'react-redux';

import BottomNavigation from './NavigationBottom';
import { getUserData } from '../Redux/Selectors';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigatorScreen from './NavigationStack';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';

const MainNavigation = () => {
    const userData = useSelector(getUserData)
    const scheme = useColorScheme()
    const MyDarkTheme = {
        dark: true,
        colors: {
            primary: "#DBD4D2",
            background: "#001B2E",
            text:'#F07167'
        }
    }
    const MyDefaultTheme = {
        dark: true,
        colors: {
            primary: "#DBD4D2",
            background: "#EAE6E5",
            text:'#F07167'
        }
    }
    return (
        <NavigationContainer theme={scheme === "dark" ? MyDarkTheme : MyDefaultTheme}>
            {userData.login === null ? (
                <MainStackNavigatorScreen/>
            ): (
                <BottomNavigation/>
            )}
        </NavigationContainer>
    )
}

export default MainNavigation