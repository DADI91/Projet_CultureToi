import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, TextInput, AppRegistry, Image, TouchableOpacity} from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';


interface LoginSelectScreenProps {
  navigation: {
    goBack: Function,
    navigate: Function,
    addListener: Function,
    dispatch: Function
  },
  doLogout: (() => void)
  currentLanguage: string,
  route: any

}
  
const Login = (props: LoginSelectScreenProps) => {
   
   
  const [user, onChangeUser] = useState<string>("");
  const [Email, onChangeEmail] = useState<string>("");
  const [password, onChangePassword] = useState<string>("");

  const [colorEye, setColorEye] = useState<boolean>(false);
  const [errUser, setErrUser] = useState<string>("#FFFFFF");
  const [errEmail, setErrEmail] = useState<string>("#FFFFFF");
  const [errPassword, setErrPassword] = useState<string>("#FFFFFF");
  const [valideSaisie, setValideSaisie] = useState<boolean>(undefined);
  const [confirm, setConfirm] = useState(null);


  const [passwordInvisible, setPasswordVisible] = useState<boolean>(true);

  /*
  const params = props.route

  console.log(params)
*/
  const onPressEye = () => {
    setColorEye(!colorEye)
    setPasswordVisible(!passwordInvisible)

  };






   const onPressDejaInscrit = async () => {
    props.navigation.navigate('Login')
    /*
    firebase.auth()
        .createUserWithEmailAndPassword('waliddadi91@gmail.com', '1111111')
        .then(() => {
            console.log('User account created & signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            }

            console.error(error);
        });
    */
            
        

    

  };

  useEffect(()=>{

    if(user === "" ){
        setErrUser("#F96A72")
        setValideSaisie(true)
        return
    }else{
        setErrUser("#FFFFFF")
        setValideSaisie(false)
    }
    if(Email === ""){
        setErrEmail("#F96A72")
        setValideSaisie(true)
        return

    }else{
        setErrEmail("#FFFFFF")
        setValideSaisie(false)

    }
    if(password.length < 8 ){
        setErrPassword("#F96A72")
        setValideSaisie(true)
        return

    }else{
        setErrPassword("#FFFFFF")
        setValideSaisie(false)

    }

  },[user, Email, password])

  const onPressInscription = () => {

 
    if(valideSaisie === !true){
       //suivant
       props.navigation.navigate('Register3',{User: user ,Email : Email, password: password })

        return
    }




  };



    return(
        <SafeAreaView style={{flex: 1 ,alignItems: 'center', justifyContent: 'center', backgroundColor: '#4682B4'}}>
            <View  style={{marginTop: 150}}>


              <View  style={styles.StyleText1}>
                <Text style={{fontFamily: 'IowanOldStyle-Bold', justifyContent: 'center', fontSize: 36, color: '#FFFFFF', height: 50, }}> {"Culture&Moi"} </Text>
                
                <Text style={{fontFamily: 'IowanOldStyle-Bold', fontSize: 30, color: '#FFFFFF', height: 50, marginTop: 48}}> {"Inscription"} </Text>
              </View>

              <View style={ styles.StyleText2 }>
                <View style={{backgroundColor: "#FFFFFF", width: 335, height: 45, marginTop: 5, borderRadius: 30, borderWidth: 3, borderColor: errUser }}>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeUser}
                    value={user}
                    placeholder="User"
                  />                  
                </View>

                <View style={{backgroundColor: "#FFFFFF", width: 335, height: 45, marginTop: 25, borderRadius: 30, flexDirection: "row", alignItems: "center", borderWidth: 3, borderColor: errEmail  }}>
                  <TextInput
                    style={{        
                        height: 45,
                        width: 280,
                        marginLeft: 15,
                        borderColor: "",
                        borderWidth: 0,
                        padding: 10}}

                    onChangeText={onChangeEmail}
                    value={Email}
                    placeholder="Email"
                  />
                  
                </View>

                <View style={{backgroundColor: "#FFFFFF", width: 335, height: 45, marginTop: 25, borderRadius: 30, flexDirection: "row", alignItems: "center", borderWidth: 3, borderColor: errPassword }}>
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

              </View>

              <View style={{marginTop: 50, alignItems: "center"}}>
                <TouchableOpacity onPress={() => onPressInscription()}>

                  <View style={{backgroundColor: "#969696", width: 330, height: 45, marginTop: 0, borderRadius: 10, alignItems: "center" }}>
                    
                    <Text style={{fontFamily: 'IowanOldStyle-Bold', fontSize: 18, color: '#FFFFFF', marginTop: 10 }}> {"Inscription"} </Text>

                  </View>

                </TouchableOpacity>


                <TouchableOpacity onPress={() => onPressDejaInscrit()}>

                  <Text style={{fontFamily: 'IowanOldStyle-Bold', fontSize: 13, color: '#FFFFFF', height: 50, marginTop: 26 , textDecorationLine: 'underline'}}> {"Déja inscrit ? Cliquez ici"} </Text>

                </TouchableOpacity>

                <View style={{ width:180, height: 13, borderColor: '#FFFFFF', borderWidth: 3, borderRadius: 20, marginTop: 150, flexDirection: "row", alignItems: "center" }}>
                    
                    <View style={{ width:44, height: 9, backgroundColor: '#FFFFFF', borderRadius: 20}}>

                    </View>

                </View>

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
      marginTop: -100,
      },

    StyleText2: {
      alignItems: 'center',
      height: 170, 
      marginTop: 48,
      //backgroundColor:"red"
      },

    input: {
      height: 45,
      width: 315,
      marginLeft: 15,
      borderWidth: 0,
      padding: 10,
    },

    inputEmail: {
        height: 45,
        width: 280,
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