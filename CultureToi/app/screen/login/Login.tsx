import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, TextInput, AppRegistry, Image, TouchableOpacity} from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";


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
   
   
  const [user, onChangeUser] = useState<string>("");
  const [password, onChangePassword] = useState<string>("");

  const [colorEye, setColorEye] = useState<boolean>(false);
  const [passwordInvisible, setPasswordVisible] = useState<boolean>(true);



  const onPressEye = () => {
    setColorEye(!colorEye)
    setPasswordVisible(!passwordInvisible)

  };

  const onPressMDP = () => {


  };


  const onPressPasInscrit = () => {

    props.navigation.navigate('Register1',{
      user1 : user,
      password1: password
    })

  };

  const onPressConnexion = () => {


  };

  const onPressConnexionGoogle = () => {


  };


    return(
        <SafeAreaView style={{flex: 1 ,alignItems: 'center', justifyContent: 'center', backgroundColor: '#4682B4'}}>
            <View  style={{marginTop: 350}}>

              <View style={{marginLeft: -20, marginTop: -330, justifyContent: 'flex-start',  maxHeight: 35, maxWidth: 90 }}>
                <Button
                    title="< Retour"
                    onPress={() => props.navigation.navigate('Home')}
                />
              </View>

              <View  style={styles.StyleText1}>
                <Text style={{fontFamily: 'IowanOldStyle-Bold', justifyContent: 'center', fontSize: 36, color: '#FFFFFF', height: 50, }}> {"Culture&Moi"} </Text>
                
                <Text style={{fontFamily: 'IowanOldStyle-Bold', fontSize: 30, color: '#FFFFFF', height: 50, marginTop: 25}}> {"Connexion"} </Text>
              </View>

              <View style={ styles.StyleText2 }>
                <View style={{backgroundColor: "#FFFFFF", width: 335, height: 45, marginTop: 5, borderRadius: 30 }}>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeUser}
                    value={user}
                    placeholder="User"
                  />                  
                </View>

                <View style={{backgroundColor: "#FFFFFF", width: 335, height: 45, marginTop: 25, borderRadius: 30, flexDirection: "row", alignItems: "center" }}>
                  <TextInput
                    secureTextEntry={passwordInvisible}
                    style={styles.inputPassword}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Password"
                  />
                  <TouchableOpacity onPress={() => onPressEye()}>
                    <Image
                      style={{ width:30 , height:20, tintColor: colorEye ? "black" : "gray"}}
                      source={require('../../ressource/images/eye.png')}
                    />
                    </TouchableOpacity>
                  
                </View>

                <TouchableOpacity onPress={() => onPressMDP()}>
                  <Text style={{fontFamily: 'IowanOldStyle-Bold', fontSize: 13, color: '#FFFFFF', height: 50, marginTop: 25, textDecorationLine: 'underline'}}> {"Mot de passe oublié ?"} </Text>
                </TouchableOpacity>
              </View>

              <View style={{marginTop: 50, alignItems: "center"}}>
                <TouchableOpacity onPress={() => onPressConnexion()}>

                  <View style={{backgroundColor: "#969696", width: 330, height: 45, marginTop: 0, borderRadius: 10, alignItems: "center" }}>
                    
                    <Text style={{fontFamily: 'IowanOldStyle-Bold', fontSize: 18, color: '#FFFFFF', marginTop: 10 }}> {"Connexion"} </Text>

                  </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => onPressConnexionGoogle()}>

                  <View style={{backgroundColor: "#FFFFFF", width: 282, height: 41, marginTop: 45, borderRadius: 10, flexDirection: "row", alignItems: "center" }}>
                    <Image
                        style={{ width:30 , height:30 ,marginLeft: 20}}
                        source={require('../../ressource/images/logo_google.png')}
                    />
                    <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft: 10}}> {"Se connecter avec Google"} </Text>

                  </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => onPressPasInscrit()}>

                  <Text style={{fontFamily: 'IowanOldStyle-Bold', fontSize: 13, color: '#FFFFFF', height: 50, marginTop: 130 , textDecorationLine: 'underline'}}> {"Pas encore inscrit ? Cliquez ici"} </Text>

                </TouchableOpacity>

              </View>


            </View>

        </SafeAreaView>
    );
};



export default Login ;

const styles = StyleSheet.create({
    StyleText1: {
      alignItems: 'center',
      justifyContent: 'center', 
      height: 150, 
      marginTop: 25,
      },

    StyleText2: {
      alignItems: 'center',
      height: 170, 
      marginTop: 35,
      //backgroundColor:"red"
      },

    input: {
      height: 45,
      width: 315,
      marginLeft: 15,
      borderWidth: 0,
      padding: 10,
    },
    
    inputPassword: {
      height: 45,
      width: 280,
      marginLeft: 15,
      borderWidth: 0,
      padding: 10,
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