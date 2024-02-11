import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens';
import { decode, encode } from 'base-64';

import 'firebase/auth';
import 'firebase/firestore';
import 'react-native-gesture-handler';
import {firebase} from './src/firebase/config';
import Navigation from './Navigation/navigation';
import OptionsSelection from './src/screens/OptionsSelection/OptionSelection.js';



if (!global.btoa) { global.btoa = encode; }
if (!global.atob) { global.atob = decode; }

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <>
    <Navigation/>
   
    </>
  );
  

}