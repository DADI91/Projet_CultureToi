import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, TextInput, AppRegistry, Image, TouchableOpacity, Animated} from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import DatePicker from 'react-native-datepicker';


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
   
   
  const [nom, onChangeNom] = useState<string>("");
  const [prenom, onChangePrenom] = useState<string>("");
  const [DateNaissance, setDateNaissance] = useState<string>();
  const [pays, setPays] = useState<string>("France");


  const [colorEye, setColorEye] = useState<boolean>(false);
  const [errNom, setErrNom] = useState<string>("#FFFFFF");
  const [errPrenom, setErrPrenom] = useState<string>("#FFFFFF");
  const [errDateNaissance, setErrDateNaissance] = useState<string>("#FFFFFF");
  const [errPays, setErrPays] = useState<string>("#FFFFFF");

  const [valideSaisie, setValideSaisie] = useState<boolean>(undefined);
  const dateNow = new Date();
  const ageMin = 18;



  const [passwordInvisible, setPasswordVisible] = useState<boolean>(true);

  /*
  const params = props.route

  console.log(params)
*/
  const onPressEye = () => {
    setColorEye(!colorEye)
    setPasswordVisible(!passwordInvisible)

  };








  useEffect(()=>{

    if(nom === "" ){
        setErrNom("#F96A72")
        setValideSaisie(true)
        return
    }else{
        setErrNom("#FFFFFF")
        setValideSaisie(false)
    }
    if(prenom === ""){
        setErrPrenom("#F96A72")
        setValideSaisie(true)
        return

    }else{
        setErrPrenom("#FFFFFF")
        setValideSaisie(false)

    }
    if(DateNaissance == ""){
        setErrDateNaissance("#F96A72")
        setValideSaisie(true)
        return

    }else{
        setErrDateNaissance("#FFFFFF")
        setValideSaisie(false)

    }
    if(pays == ""){
        setErrPays("#F96A72")
        setValideSaisie(true)
        return

    }else{
        setErrPays("#FFFFFF")
        setValideSaisie(false)

    }


  },[nom, prenom, DateNaissance])

  const onPressSuivant = () => {

 
    if(valideSaisie === !true){
       //suivant
       props.navigation.navigate('Register4')

        return
    }





  };



    return(
        <SafeAreaView style={{flex: 1 ,alignItems: 'center', justifyContent: 'center', backgroundColor: '#4682B4'}}>
            <View  style={{marginTop: 150}}>


            <View  style={styles.StyleText1}>
                <Text style={{fontFamily: 'IowanOldStyle-Bold', justifyContent: 'center', fontSize: 36, color: '#FFFFFF', height: 50,  marginTop: -100 }}> {"Culture&Moi"} </Text>
            </View>

              <View style={ styles.StyleText2 }>
                <View style={{backgroundColor: "#FFFFFF", width: 335, height: 45, marginTop: -30, borderRadius: 30, borderWidth: 3, borderColor: errNom }}>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeNom}
                    value={nom}
                    placeholder="Nom"
                  />                  
                </View>

                <View style={{backgroundColor: "#FFFFFF", width: 335, height: 45, marginTop: 25, borderRadius: 30, flexDirection: "row", alignItems: "center", borderWidth: 3, borderColor: errPrenom  }}>
                  <TextInput
                    style={{        
                        height: 45,
                        width: 280,
                        marginLeft: 15,
                        borderColor: "",
                        borderWidth: 0,
                        padding: 10}}

                    onChangeText={onChangePrenom}
                    value={prenom}
                    placeholder="Prenom"
                  />
                  
                </View>

                <View style={{backgroundColor: "#FFFFFF", width: 335, height: 45, marginTop: 25, borderRadius: 30, flexDirection: "row", alignItems: "center", borderWidth: 3, borderColor: errDateNaissance }}>
                    <DatePicker
                        style={styles.datePickerStyle}
                        date={DateNaissance} // Initial date from state
                        mode="date" // The enum of date, datetime and time
                        placeholder="Date de naissance"
                        format="DD-MM-YYYY"
                        minDate="01-01-1900"
                        maxDate={(dateNow.getDate() + "-" + dateNow.getMonth()+ "-" + (dateNow.getFullYear() - ageMin)).toString()}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                              position: 'absolute',
                              right: -5,
                              top: 5,
                              marginLeft: 0,
                            },
                            dateInput: {
                              borderColor : "gray",
                              alignItems: "flex-start",
                              borderWidth: 0,
                              borderBottomWidth: 1,
                            },
                            placeholderText: {
                              fontSize: 17,
                              color: "gray"
                            },
                            dateText: {
                              fontSize: 17,
                            },
                            Animated: {
                                toValue: { x: 0, y: 0 },
                                useNativeDriver: true,
                            }
                          }}
                        
                        onDateChange={(DateNaissance) => {
                            setDateNaissance(DateNaissance);
                        }}
                    />

                </View>

                <View style={{backgroundColor: "#FFFFFF", width: 335, height: 45, marginTop: 25, borderRadius: 30, flexDirection: "row", alignItems: "center", borderWidth: 3, borderColor: errPays  }}>
                  <TextInput
                    style={{        
                        height: 45,
                        width: 280,
                        marginLeft: 15,
                        borderColor: "",
                        borderWidth: 0,
                        padding: 10}}

                    onChangeText={setPays}
                    value={pays}
                    placeholder="Pays"
                  />
                  
                </View>

              </View>

              <View style={{marginTop: 50, alignItems: "center"}}>
                <TouchableOpacity onPress={() => onPressSuivant()}>

                  <View style={{backgroundColor: "#969696", width: 307, height: 45, marginTop: 30, borderRadius: 10, alignItems: "center" }}>
                    
                    <Text style={{fontFamily: 'IowanOldStyle-Bold', fontSize: 18, color: '#FFFFFF', marginTop: 10 }}> {"Suivant"} </Text>

                  </View>

                </TouchableOpacity>




                <View style={{ width:180, height: 13, borderColor: '#FFFFFF', borderWidth: 3, borderRadius: 20, marginTop: 190, flexDirection: "row", alignItems: "center" }}>
                    
                    <View style={{ width:132, height: 9, backgroundColor: '#FFFFFF', borderRadius: 20}}>

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

    datePickerStyle: {
        width: 300,
        marginTop: 0,
        marginLeft: 15,
        borderWidth: 0
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