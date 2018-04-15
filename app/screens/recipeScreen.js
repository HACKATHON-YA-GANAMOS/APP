import OwnButton from '../components/button';
import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'

import MainScreen from './recipe';
import {FileSystem} from "expo";

export default class CameraRoll extends Component {
  static navigationOptions = {
    tabBarLabel: 'My dishes',
    tabBarIcon: () => <Icon name='bookmark' type='fontawesome' />
  };
  render() {
    const { params } = this.props.navigation.state;
    const potho = !params ? "Photo_100": params.path;
    const dynamicUrl = FileSystem.documentDirectory + "photos/" + potho;
    return (
      <MainScreen imagePath={potho} key={potho} url={dynamicUrl}/>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#545c64',
    fontSize: 15,
    marginTop: '3%',
    marginBottom: '15%',

  },
  image: {
    flex: 1/4,
    width: '90%',
    height: '40%',
    resizeMode: 'contain'
  }
});
