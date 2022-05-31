import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators, CardStyleInterpolators } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeIndex from './home/Home';
import Login from './login/Login';
import RegisterScreen1 from './login/RegisterScreen1';
import RegisterScreen2 from './login/RegisterScreen2';
import RegisterScreen3 from './login/RegisterScreen3';
import RegisterScreen4 from './login/RegisterScreen4';
import Profil from './User/profil';
import Header from './modale/header';
import Tab from './modale/tab';








const Stack = createStackNavigator();
const MyTransition = {
    gestureDirection: 'horizontal',
    transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}


function AppIndex() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={HomeIndex}
                    options={{
                        headerShown: false,
                        ...MyTransition,
                    }} 
                />
                <Stack.Screen name="Login" component={Login}
                    options={{
                        headerShown: false,
                        ...MyTransition,
                    }} 
                />
                <Stack.Screen name="Register1" component={RegisterScreen1}
                    options={{
                        headerShown: false,
                        ...MyTransition,
                    }} 
                />
                <Stack.Screen name="Register2" component={RegisterScreen2}
                    options={{
                        headerShown: false,
                        ...MyTransition,
                    }} 
                />
                <Stack.Screen name="Register3" component={RegisterScreen3}
                    options={{
                        headerShown: false,
                        ...MyTransition,
                    }} 
                />
                <Stack.Screen name="Register4" component={RegisterScreen4}
                    options={{
                        headerShown: false,
                        ...MyTransition,
                    }} 
                />
                 <Stack.Screen name="profil" component={Profil}
                    options={{
                        headerShown: false,
                        ...MyTransition,
                    }} 
                />
                <Stack.Screen name="Header" component={Header}
                    options={{
                        headerShown: false,
                        ...MyTransition,
                    }} 
                />
                <Stack.Screen name="Tab" component={Tab}
                    options={{
                        headerShown: false,
                        ...MyTransition,
                    }} 
                />
      
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default AppIndex;
