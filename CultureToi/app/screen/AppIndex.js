import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators, CardStyleInterpolators } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeIndex from './home/Home';
import Login from './login/Login';



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
      
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default AppIndex;
