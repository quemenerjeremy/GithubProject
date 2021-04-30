import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../Views/Profile/Profile'


const ProfileStackNavigator = createStackNavigator();

const ProfileScreenNav = () => {
    return (
        <ProfileStackNavigator.Navigator>
            <ProfileStackNavigator.Screen
                    name="ProfilStackScreen"
                    component={Profile}
                    options={{
                        headerShown: false
                    }}
            />
        </ProfileStackNavigator.Navigator>
        
    )
}

export default ProfileScreenNav