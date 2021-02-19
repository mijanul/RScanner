/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image
} from 'react-native';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SplashScreen from './src/screens/SplashScreen';
import MainHome from "./src/screens/MainContainer";
import Scanner from "./src/screens/Scanner";
import Upload from './src/screens/Upload';
import Login from './src/screens/Login';
import LoginQuick from './src/screens/LoginQuick';
import HomeView from './src/screens/HomeView';
import CameraLike from './src/screens/CameraLike';


const AppNavigator = createStackNavigator({
  Home: {
    screen: SplashScreen,
  },
  MainHome : {
    screen : MainHome
  },
  Scanner: {
    screen: Scanner
  },
  Upload: {
    screen: Upload
  },
  Login: {
    screen: Login
  },
  LoginQuick: {
    screen: LoginQuick
  },
  HomeView: {
    screen: HomeView
  },
  Camera : {
    screen: CameraLike
  }
}, 
{
  //Add this property to hide the navigation bar at top from all the screens 
  defaultNavigationOptions: {
    headerShown: false
  },
},
{
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);


// const AppNavigator = createStackNavigator({
//   SplashScreen: {
//     screen: SplashScreen
//   },
//   Main: {
//     screen: MainScreen
//   },
//   Scanner: {
//     screen: Scanner
//   },
//   Login: {
//     screen: Login
//   },
//   AllMenu: {
//     screen: AllMenu
//   },
//   LoginQuick: {
//     screen: LoginQuick
//   },
//   Upload: {
//     screen: Upload
//   },
//   Share: {
//     screen: ShareWithMe
//   },
//   TagView: {
//     screen: TagView
//   },
//   Account: {
//     screen: AccountSettings
//   },
//   Refer: {
//     screen: Refer
//   },
//   HomeView: {
//     screen: HomeView
//   },
//   MainContainer: {
//     screen: MainContainer
//   }
// }, 
// {
//   //Add this property to hide the navigation bar at top from all the screens 
//   defaultNavigationOptions: {
//     headerShown: false
//   },
// },
// {
//     initialRouteName: 'SplashScreen',
// });

// export default createAppContainer(AppNavigator);