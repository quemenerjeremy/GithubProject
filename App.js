
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNavigator from "./src/Navigation/NavigationBottom";
import HomeScreenNav from './src/Navigation/HomeNav'

import { Provider } from 'react-redux';
import Store from './src/Redux/ConfigureStore';
import MainNavigation from "./src/Navigation/MainNavigation";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
          <MainNavigation/>
      </Provider>
    )
  }
}