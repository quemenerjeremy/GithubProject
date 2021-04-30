import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchUser from '../Views/SearchUser/SearchUser'

const SearchUserStackNavigator = createStackNavigator();

const SearchUserScreenNav = () => {
    return (
        <SearchUserStackNavigator.Navigator>
            <SearchUserStackNavigator.Screen
                    name="SearchUserStackScreen"
                    component={SearchUser}
                    options={{
                        headerShown: false
                    }}
            />
        </SearchUserStackNavigator.Navigator>
        
    )
}

export default SearchUserScreenNav