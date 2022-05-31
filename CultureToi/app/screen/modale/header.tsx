
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState, useEffect } from "react";
 import { StyleSheet, Text, View, SafeAreaView, TextInput, Image} from "react-native";
 import { Button } from "react-native-elements/dist/buttons/Button";
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import firebase from '@react-native-firebase/app';
 import firestore from '@react-native-firebase/firestore';
import { TouchableOpacity } from "react-native-gesture-handler";




const header = () => {
    
  return (

        <View style={{ width: 390, height: 100, flexDirection: "row", marginTop: -50, borderColor: "#C4C4C4", borderBottomWidth: 2}}>

            <Text style={{marginLeft: 34, fontSize:18 ,marginTop: 60, fontWeight:"600"}}>{"Culture&Moi"}</Text>

            <TouchableOpacity style={{marginTop: 60, marginLeft: 100}} >
                <Image
                    style={{ width:26 , height:26}}
                    source={require('../../ressource/images/messager.png')}
                />
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop: 60, marginLeft: 24}} >
                <Image
                    style={{ width:26 , height:26}}
                    source={require('../../ressource/images/editer.png')}
                />
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop: 60, marginLeft: 24}} >
                <Image
                    style={{ width:26 , height:26}}
                    source={require('../../ressource/images/qr-code.png')}
                />
            </TouchableOpacity>

        </View>
  );
}

 
 export default header;