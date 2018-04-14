import OwnButton from '../components/button';
import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

export default class Start extends Component {
  render() {
    return (
      <View style={styles.background}>
        <Image source={require('../assets/images/logo.png')}
            style={styles.image}/>
        <Text style={styles.text}>El control de tu plantas en un solo click</Text>
        <OwnButton text={"Iniciar"} green={true} navigation={this.props.navigation} link={'Home'}/>
      </View>
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
