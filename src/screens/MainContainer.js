
import React, { Component } from 'react';
import { AppRegistry, Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeView from "./HomeView";
import MenuView from "./MenuView";
import ShareWithMe from './ShareWithMe';
import TagView from './TagView';
import Refer from './Refer';
import BusinessView from './BusinessView';
import AccountSettings from './AccountSettings';
import HelpView from './HelpView';


const DrawerNavigator = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: {
    //Title
    screen: HomeView,
  },
  Screen2: {
    screen: ShareWithMe,
  },
  Screen3: {
    screen: ShareWithMe,
  },
  Screen4: {
    screen: TagView,
  },
  Screen5: {
    screen: Refer
  },
  Screen6: {
    screen: ShareWithMe
  },
  Screen7: {
    screen: ShareWithMe
  },
  Screen8: {
    screen: BusinessView
  },
  Screen9: {
    screen: AccountSettings
  },
  Screen10: {
    screen: HelpView
  },

},
{
  	contentComponent: MenuView,
});

export default (DrawerNavigator);