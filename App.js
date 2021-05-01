
import React from "react";

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