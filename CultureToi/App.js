/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { PureComponent, } from 'react';
import { View, StatusBar, AppState, Text, TextInput, Image } from 'react-native';
import AppIndex from './app/screen/AppIndex';
import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


class App extends PureComponent {



  getActiveRoute = (navigationState) => {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return this.getActiveRoute(route);
    }
    return route;
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#000"
        }}
      >
        <AppIndex/>
      </View>
    );
  }
}





export default (App);

 
