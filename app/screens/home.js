import OwnButton from '../components/button';
import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.background}>
        <Image source={require('../assets/images/logo.png')}
            style={styles.image}/>
        <Text style={styles.text}>Guess my FOOD!</Text>
        <OwnButton text={"Start"} green={true} navigation={this.props.navigation} link={'Camera'}/>
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
