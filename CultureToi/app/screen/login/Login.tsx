import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, TextInput } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import SelectDropdown from 'react-native-select-dropdown'

interface LoginSelectScreenProps {
  navigation: {
    goBack: Function,
    navigate: Function,
    addListener: Function,
    dispatch: Function
  },
  doLogout: (() => void)
  currentLanguage: string,
}
  
const Login = (props: LoginSelectScreenProps) => {
   
   





    return(
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#4682B4'}}>
            <View>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Button
                      title="Go to Details... again"
                      onPress={() => props.navigation.navigate('Home')}
                  />
                </View>
            </View>

        </SafeAreaView>
    );
};



export default Login ;

const styles = StyleSheet.create({
    base: {
        width: 150,
        height: 30,
        backgroundColor: "#CECECE",
        marginTop: 20,
        marginLeft: 0,
        borderRadius: 5,
        borderWidth: 7,
        borderColor: "#CECECE" ,
      },



      devise1: {
        width: 150,
        height: 30,
        backgroundColor: "#CECECE",
        marginTop: 20,
        marginRight: 20,
        borderRadius: 5,
        borderWidth: 7,
        borderColor: "#CECECE",
      },
    

  
    base2: {
      margin : 75,
      marginLeft : -40, 
      backgroundColor: "gray", 
      width: 150,
      height: 50
    },
    
    
    container1: {
        marginTop: -150, 
        flexDirection: "row", 
        justifyContent: 'center',  
        width: 350
     },

     container2: {
        marginTop: 40, 
        flexDirection: "row",
        justifyContent: 'center',  
        width: 350
        
      },

     item: {
       backgroundColor: "#f9c2ff",
       padding: 20,
       marginVertical: 8
     },
     header: {
       fontSize: 32,
       backgroundColor: "#fff"
     },
     title: {
       fontSize: 24
     }
   });