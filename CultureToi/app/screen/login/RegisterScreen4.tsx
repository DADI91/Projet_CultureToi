import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, RefreshControl, Image, SegmentedControlIOSBase} from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import DatePicker from 'react-native-datepicker';
import { Tile } from "react-native-elements";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';



interface LoginSelectScreenProps {
  navigation: {
    goBack: Function,
    navigate: Function,
    addListener: Function,
    dispatch: Function
  },
  currentLanguage: string,
  route: any,

}



  
const Login = (props: LoginSelectScreenProps) => {
   

  const [interet2, setInterer] = useState<Array<any>>([]);

  const [interet1, setInterer1] = useState<Array<any>>([{title: "Musique"},
                    {title: "Danse"},
                    {title: "Théâtre"},
                    {title: "Cuisine"},
                    {title: "Sculpture"},
                    {title: "Poterie"},
                    {title: "Écriture"},
                    {title: "Couture"},
                    {title: "Cinéma"},
                    {title: "Mode"},
                    {title: "Photographie"},
                    {title: "Musée"},
                    {title: "Art"},

                  ]);

  const [refreshing, setRefreshing] = useState(false);
  const [msgErrCode, setMsgErrCode] = useState<boolean>(false);



  const onPressItem = (addItems) => {
    var index = interet1.findIndex(obj => obj.title === addItems)
    var obj = {title: addItems}


    interet2.push(obj)
    interet1.splice(index, 1)
    setInterer(interet2)
    onRefresh()
  



  }

  const onPressItem2 = (addItems, setSelectItems) => {
      var index = interet2.findIndex(obj => obj.title === addItems)
      var obj = {title: addItems}

      interet1.push(obj)
      interet2.splice(index, 1)
      setInterer(interet2)
      setSelectItems(false)

      onRefresh()
      console.log(interet2)
  }

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  



  const Item1 = ({ title }) => {

    const [selectItems, setSelectItems] = useState<boolean>(undefined);

    return(
    <View>
        
        <TouchableOpacity style={{backgroundColor: "#4682B4", height: 20, maxWidth: 150, alignContent: "center", borderRadius: 5, marginLeft:5, flexDirection: "row", alignItems:"center"}}  onPress={() => onPressItem2(title, setSelectItems)}>

          <Text style={{marginLeft:5, textAlign:"left", color: "#FFFFFF", fontSize: 13}}>{title}</Text>

          <Image
              style={{ width:15 , height:15, marginLeft: 5, marginRight: 3}}
              source={require('../../ressource/images/close_icon.png')}
          />
        </TouchableOpacity>

    </View>
  )};

  const Item2 = ({ title }) => {


      
    return(
    <View>
        <TouchableOpacity  style={{backgroundColor: "#FFFFFF", height: 20, maxWidth: 150, alignContent: "center", borderRadius: 5, marginLeft:10, marginTop:10, flexDirection: "row", alignItems:"center"}} onPress={() => onPressItem(title)}>

          <Text style={{marginLeft:5, textAlign:"left", color: "#4682B4", fontSize: 13}}>{title}</Text>

          <Image
              style={{ width:15 , height:15, marginLeft: 5, marginRight: 3}}
              source={require('../../ressource/images/check1.jpeg')}
          />
        </TouchableOpacity>

    </View>)

  };






  const onPressSuivant = () => {

    
    if(interet2.length >= 3){

      firebase.auth()
      .createUserWithEmailAndPassword(props.route.params.email, props.route.params.password)
      .then(() => {
          
          console.log('User account created & signed in!');

          let User = firebase.auth().currentUser
          firestore()
          .collection("user").doc(User!.uid).set({
            userName: props.route.params.user,
            email: props.route.params.email,
            nom: props.route.params.nom,
            prenom: props.route.params.prenom,
            dateNaissance: props.route.params.DateNaissance,
            pays: props.route.params.pays,
            interet: interet2
  
        })
        .then(() => {
            console.log("Document successfully written!");

            props.navigation.navigate(('profil'))
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
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



    }else{
      setMsgErrCode(true)
      wait(3000).then(() => setMsgErrCode(false));

    }

    

    



  };


  const renderItem1 = ({ item }) => (
    <Item1 title={item.title} />
  );
  const renderItem2 = ({ item }) => (
    <Item2 title={item.title} />
  );

    return(
        <SafeAreaView style={{flex: 1 ,alignItems: 'center', justifyContent: 'center', backgroundColor: '#4682B4'}}>
            <View  style={{marginTop: 130}}>


            <View  style={styles.StyleText1}>
                <Text style={{fontFamily: 'IowanOldStyle-Bold', justifyContent: 'center', fontSize: 36, color: '#FFFFFF', height: 50,  marginTop: -50 }}> {"Culture&Moi"} </Text>
            </View>

                
                <View style={{marginTop: 50, height: 70, width: 315, backgroundColor: "#FFFFFF", borderRadius: 20}}>
                    
                    <Text style={{fontFamily: 'IowanOldStyle-Bold', justifyContent: 'center', fontSize: 13, height: 50,  marginTop: 5, marginLeft: 10 }}> {"Centres d’intérêt"} </Text>

                    <FlatList
                        horizontal
                        style={{        
                            width: 300,
                            marginTop: -35,
                            marginLeft: 5,
                            maxHeight:200,
                            }}
                        contentContainerStyle={styles.list}
                        data={interet2}
                        renderItem={renderItem1}
                        keyExtractor={item => item.title}
                    />

                </View>

                <View style={{marginTop: 0, width: 315, alignItems: "stretch"}}>
                    

                    <FlatList
                      
                        style={{        
                            width: 300,
                            marginLeft: 5,
                            height:170,
                            }}
                        contentContainerStyle={styles.list}
                        data={interet1}
                        renderItem={renderItem2}
                        keyExtractor={item => item.title}
                    />

                </View>

                
   

              <View style={{marginTop: 0, alignItems: "center"}}>
                <TouchableOpacity onPress={() => onPressSuivant()}>

                  <View style={{backgroundColor: "#969696", width: 307, height: 45, marginTop: 30, borderRadius: 10, alignItems: "center" }}>
                    
                    <Text style={{fontFamily: 'IowanOldStyle-Bold', fontSize: 18, color: '#FFFFFF', marginTop: 10 }}> {"Suivant"} </Text>

                  </View>

                </TouchableOpacity>

                <View style={{ width:330, height: 20, marginTop: 10, alignItems: "center", opacity: msgErrCode ? 1 : 0}}>
                    
                    <Text style={{fontFamily: 'IowanOldStyle-Bold', fontSize: 13, color: '#F96A72', marginTop: 0 }}> {"il faut au minimun 3 inttérêts ! "} </Text>

                </View>





                <View style={{ width:180, height: 13, borderColor: '#FFFFFF', borderWidth: 3, borderRadius: 20, marginTop: 190, flexDirection: "row", alignItems: "center" }}>
                    
                    <View style={{ width:176, height: 9, backgroundColor: '#FFFFFF', borderRadius: 20}}>

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

    list: {
      justifyContent: 'center',

      marginTop:20,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    list1: {
      marginTop: 15,
      flexWrap:"wrap",

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
    


     header: {
       fontSize: 32,
       backgroundColor: "#fff"
     },
     title: {
       fontSize: 24
     }
   });

function getAuth() {
  throw new Error("Function not implemented.");
}
