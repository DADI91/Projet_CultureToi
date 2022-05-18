
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from "react";
 import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, TextInput } from "react-native";
 import { Button } from "react-native-elements/dist/buttons/Button";

 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

 interface LoginSelectScreenProps {
    navigation: {
      goBack: Function,
      navigate: Function,
      addListener: Function,
      dispatch: Function
    },
}


const MyTabs = ({navigation}) => {
    
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
          style={{backgroundColor: "blue"}}
          title="Login"
          onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}
 
 export default MyTabs;