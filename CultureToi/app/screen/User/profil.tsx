
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

import Header from "../modale/header"
import Tab from "../modale/tab"


 interface LoginSelectScreenProps {
    navigation: {
      goBack: Function,
      navigate: Function,
      addListener: Function,
      dispatch: Function
    },
}


const profil = (props: LoginSelectScreenProps) => {

    const [user, onChangeUser] = useState<string>("");
    const [descption, onChangeDescption] = useState<string>("");


    useEffect(()=>{
        let UserID = firebase.auth().currentUser
        console.log(UserID!.uid)
        const subscriber = firebase.firestore()
        .collection('user')
        .doc(UserID!.uid)
        .onSnapshot(documentSnapshot => {
            console.log('User data: ', documentSnapshot.data());
            onChangeUser(documentSnapshot.data().userName)
            onChangeDescption(documentSnapshot.data().descption)
        });



        // Stop listening for updates when no longer required
        return () => subscriber();  


    
    
    },[user])

    if(descption == undefined){
        onChangeDescption("Lorem ipsum dolor sit amet, consectetur adipiscing ...")
    }

    function onPressTest  (page)  {
      props.navigation.navigate(page)
    }

    
  return (
    <SafeAreaView style={{flex: 1,alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF'}}>

        <Header/>

        <View style={{flex: 1,width: 390, height: 650,  alignItems: 'center'}}>
            
            <View style={{ width: 339, height: 96 , marginTop: 20, flexDirection: "row", alignItems:"center"}}>
                <Image
                    style={{ width:96 , height:96, borderRadius: 50, backgroundColor: "#C4C4C4"}}
                    source={require('../../ressource/images/User_96.png')}
                />
                
                <View style={{ marginLeft: 15,width: 226 , height:65}}>

                    <Text style={{fontSize:22 , fontWeight:"600"}}>{user}</Text>

                    <Text style={{ width: 240, marginTop: 9,fontSize:12 }}>{descption}</Text>


                </View>


            </View>
            
            <View style={{backgroundColor: "#C4C4C4", opacity: 0.5, marginTop: 34, width: 281, height: 2}}  />

        </View>


        <Tab navigation={{
              navigate: onPressTest
          }} />

    </SafeAreaView>
  );
}

 
 export default profil;