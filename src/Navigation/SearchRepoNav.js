import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchRepositorie from '../Views/SearchRepositories/SearchRepositories'

const SearchRepoStackNavigator = createStackNavigator();

const SearchRepoScreenNav = () => {
    return (
        <SearchRepoStackNavigator.Navigator>
             <SearchRepoStackNavigator.Screen
                name="SearchRepoStackScreen"
                component={SearchRepositorie}
                options={{
                    headerShown: false
                }}
            />
        </SearchRepoStackNavigator.Navigator>
    )
}

export default SearchRepoScreenNav;