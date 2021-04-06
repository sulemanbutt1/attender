/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
import React,{useState} from 'react';
import QRScan from './QRScan'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './Home'

const App = () => {


  const Stack =createStackNavigator()
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{title:'Attender'}}/>
        <Stack.Screen name="QR Scanner" component={QRScan}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};




export default App;
