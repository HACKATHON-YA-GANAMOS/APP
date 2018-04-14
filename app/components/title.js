import React, { Component } from 'react';
import {StyleSheet, Image, Text, View, Dimensions} from "react-native";

const maxWidth = Dimensions.get('window').width;
const maxHeight = Dimensions.get('window').height;

export default class Title extends Component {
  render() {
    let textSize = this.props.textSize || 35;
    let textColor;
    let green;
    if (this.props.textColor && this.props.textColor === 'white') {
      textColor = '#ffffff';
      green = true;
    } else {
      textColor = '#545c64';
      green = false;
    }
    const textStyle = {
      color: textColor,
      fontSize: textSize,
      fontWeight: 'bold',
    };
    if (this.props.logo) {
      return (
        <View style={styles.topView} >
          <Text style={textStyle}> {this.props.text} </Text>
          <Image source={require('../assets/images/logo.png')} style={styles.image}/>
        </View>
      );
    } else {
      return (
        <View style={styles.topView} >
          <Text style={textStyle}> {this.props.text} </Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  image: {
    width: "20%",
    height: "100%",
    resizeMode: 'contain',
  },
  topView: {
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    position: "absolute",
    width: maxWidth * 0.75,
  },
});


