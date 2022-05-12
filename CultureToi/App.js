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
import Home from './app/screen/home/Home'


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
        <AppIndex

          onNavigationStateChange={(prevState, currentState, action) => {
            const currentScreen = this.getActiveRoute(currentState);
            const prevScreen = this.getActiveRoute(prevState);
            this.setState({ statusbar: currentScreen.params.statusbar })
            // console.log("navigationstatechange: ", currentScreen, "prevstate: ", prevScreen)
            if (prevScreen.routeName !== currentScreen.routeName) {
              const statusTheme = currentScreen.params.statusbar;
              const pagefeed = currentScreen.params.pagefeed;
              if (statusTheme == "light-content") {
                StatusBar.setBarStyle(statusTheme)
                if (Platform.OS === "android") {

                  StatusBar.setBackgroundColor("black", true)
                }
              }
              if (statusTheme == "dark-content") {
                StatusBar.setBarStyle(statusTheme)
                if (Platform.OS === "android") {
                  StatusBar.setBackgroundColor("#FAFAFA", true)
                }
              }
              if (statusTheme == "dark-content2") {
                StatusBar.setBarStyle("dark-content")
                if (Platform.OS === "android") {
                  StatusBar.setBackgroundColor("white", true)
                }
              }
              // console.log(statusTheme)
              if (pagefeed) {
                if (pagefeed === 0) {
                  if (Platform.OS === "android") {
                    StatusBar.setBackgroundColor("black");
                  }
                  StatusBar.setBarStyle("light-content");
                } else if (pagefeed === 1) {
                  if (Platform.OS === "android") {
                    StatusBar.setBackgroundColor("#FAFAFA")
                  }
                  StatusBar.setBarStyle("dark-content")
                }
              }
            }

          }}
        />
      </View>
    );
  }
}





export default (App);

 
