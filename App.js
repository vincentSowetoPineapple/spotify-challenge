/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import type {Node} from 'react';
import FollowButtons from './src/components/FollowButton';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';


import HomeScreen from './src/components/HomeScreen';
import { createAppContainer } from 'react-navigation';

import NavContainer from './src/components/Navigation/NavContainer';
import { NavigationContainer, DefaultTheme, DarkTheme  } from '@react-navigation/native';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

 
  return (
    <NavigationContainer theme={MyTheme}>
       <NavContainer/>
   </NavigationContainer>
  //<HomeScreen/>
   
  );
};


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    background: 'green',
    card: 'rgb(255, 255, 255)',
    text: 'grey',
    border: 'green',
    notification: 'rgb(255, 69, 58)',
  },
};



export default App;
