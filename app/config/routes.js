import React from 'react';
import {View, Text, Dimensions} from "react-native";
import { StackNavigator } from 'react-navigation';
import Home from '../screens/home';
import SavedFoods from '../screens/savedFoods';
import CameraW from '../screens/camera';
// import Component from '../screens/<filePath>';

const maxWidth = Dimensions.get('window').width;
const maxHeight = Dimensions.get('window').height;

const stackNavigator = StackNavigator({
  Home: {
    screen: Home,
  },
  SavedFoods: {
    screen: SavedFoods,
  },
  Camera: {
    screen: CameraW,
  },
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#ffffff',
      height: maxHeight * 0.15,
    },
    headerTintColor: '#159c8c',
  },
});

export default stackNavigator;