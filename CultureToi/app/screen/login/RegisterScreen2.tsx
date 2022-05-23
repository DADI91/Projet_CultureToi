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
  route: any

}
  
const Login = (props: LoginSelectScreenProps) => {
   
   
  const [Code, onChangeCode] = useState<string>("");


  const [colorEye, setColorEye] = useState<boolean>(false);
  const [errCode, setErrCode] = useState<string>("#FFFFFF");
  const [msgErrCode, setMsgErrCode] = useState<boolean>(false);

  const [valideSaisie, setValideSaisie] = useState<boolean>(undefined);


  const [passwordInvisible, setPasswordVisible] = useState<boolean>(true);

  const [CodeVerification, setCodeVerification] = useState<string>("91130");


  
  const params = props.route

  const data= props.route.params.Email    

  const onPressEye = () => {
    setColorEye(!colorEye)
    setPasswordVisible(!passwordInvisible)

  };




  const onPressDejaInscrit = () => {
    props.navigation.navigate('Login')


  };

  useEffect(()=>{

    if(Code === "" ){
        setErrCode("#F96A72")
        setValideSaisie(true)
        return
    }else{
        setErrCode("#FFFFFF")
        setValideSaisie(false)
    }



  },[Code, CodeVerification])

  const onPressSuivant = () => {

 
    if(valideSaisie === !true){
        if(Code !== CodeVerification ){
            setErrCode("#F96A72")
            setValideSaisie(true)
            setMsgErrCode(true)
            return
        }else{
            setErrCode("green")
            setValideSaisie(false)
            setMsgErrCode(false)
            props.navigation.navigate('Register3')

        }

        return
    }




  };



    return(
        <SafeAreaView style={{flex: 1 ,alignItems: 'center', justifyContent: 'center', backgroundColor: '#4682B4'}}>
            <View  style={{marginTop: 0}}>


              <View  style={ [styles.StyleText1] }>
                <Text style={{fontFamily: 'IowanOldStyle-Bold', justifyContent: 'center', fontSize: 36, color: '#FFFFFF', height: 50, marginTop: -410 }}> {"Culture&Moi"} </Text>
                
              </View>

              <View style={{marginTop: 0, minHeight: 90}}>

                <Text style={{fontFamily: 'IowanOldStyle-Bold', fontSize: 18, color: '#FFFFFF', marginTop: -10 , textDecorationLine: 'underline'}}> {"Confirmez votre adresse mail !"} </Text>
                <Text style={{fontFamily: 'IowanOldStyle-Bold', fontSize: 13, color: '#FFFFFF', marginTop: 10}}> {"Un code a été envoyé à " + data}  </Text>

              </View>



              <View style={ [styles.StyleText2] }>
                <View style={{backgroundColor: "#FFFFFF", width: 335, height: 45, marginTop: -17, borderRadius: 30, borderWidth: 3, borderColor: errCode }}>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeCode}
                    value={Code}
                    placeholder="Code"
                  />                  
                </View>


              </View>

              <View style={{marginTop: 1, alignItems: "center",  maxHeight: 50 }}>
                <TouchableOpacity onPress={() => onPressSuivant()}>

                  <View style={{backgroundColor: "#969696", width: 307, height: 45, marginTop: 5, borderRadius: 10, alignItems: "center" }}>
                    
                    <Text style={{fontFamily: 'IowanOldStyle-Bold', fontSize: 18, color: '#FFFFFF', marginTop: 10 }}> {"Suivant"} </Text>

                  </View>

                </TouchableOpacity>

                <View style={{ width:330, height: 20, marginTop: 10, alignItems: "center", opacity: msgErrCode ? 1 : 0}}>
                    
                    <Text style={{fontFamily: 'IowanOldStyle-Bold', fontSize: 13, color: '#F96A72', marginTop: 0 }}> {"Le code de verification est incorrecte ! "} </Text>

                </View>


                <View style={{ width:180, height: 13, borderColor: '#FFFFFF', borderWidth: 3, borderRadius: 20, marginTop: 197, flexDirection: "row", alignItems: "center"}}>
                    
                    <View style={{ width:88, height: 9, backgroundColor: '#FFFFFF', borderRadius: 20}}>

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
      maxHeight: 80,
      height: 150, 
      marginTop: 0,
      },

    StyleText2: {
      alignItems: 'center',
      height: 50, 
      marginTop: 0,
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