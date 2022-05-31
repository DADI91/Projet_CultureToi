
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState, useEffect } from "react";
 import { StyleSheet, Text, View, SafeAreaView, TextInput, Image} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";


interface LoginSelectScreenProps {
    navigation: {
      navigate: Function,
    },
  }


const tab = (props: LoginSelectScreenProps) => {

    const onPressProfil  = (page) => {
        
        props.navigation.navigate((page))

    }
    
  return (

    <View style={{ width: 390, height: 76, alignItems: "center", marginBottom: -35, backgroundColor:"#4682B4"}}>

        <View style={{ width: 249, height: 30, marginTop: 20, justifyContent:"space-between", flexDirection: "row"}}>

            <TouchableOpacity  >
                <Image
                    style={{ width:30 , height:30}}
                    source={require('../../ressource/images/Map_48.png')}
                />
            </TouchableOpacity>

            <TouchableOpacity  >
                <Image
                    style={{ width:26 , height:26}}
                    source={require('../../ressource/images/Home.png')}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onPressProfil('profil')} >
                <Image
                    style={{ width:30 , height:30}}
                    source={require('../../ressource/images/User.png')}
                />
            </TouchableOpacity>



        </View>


    </View>
  );
}

 
 export default tab;