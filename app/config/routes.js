import React, {Component} from 'react';
import {View, Text, Dimensions} from "react-native";
import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from '../screens/home';
import SavedFoods from '../screens/savedFoods';
import CameraW from '../screens/camera';
import CameraRoll from '../screens/recipeScreen';
import BottomNavigation, { Tab, NavigationComponent } from 'react-native-material-bottom-navigation';
import { Icon } from 'react-native-elements'
import { home } from 'react-icons-kit/icomoon/home';
import Ingredientes from "../screens/ingredients";

const newStack = StackNavigator({
  Home: { screen: Home },
  Details: { screen: CameraRoll },
});


const stackNavigator = TabNavigator(
  {
    SavedFoods: {
      screen: SavedFoods,
    },
    Camera: {
      screen: CameraW,
    },
    Home: {
      screen: newStack,
    },
    CameraRoll: {
      screen: CameraRoll,
    },
    Ingredientes: {
      screen: Ingredientes,
    },
  },
  {
    tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      bottomNavigationOptions: {
        labelColor: 'white',
        rippleColor: 'white',
        tabs: {
          Home: {
            barBackgroundColor: '#37474F',
          },
          SavedFoods: {
            barBackgroundColor: '#00796B',
          },
          Camera: {
            barBackgroundColor: '#5D4037',
          },
        },
      },
    },
  },
);
export default stackNavigator;