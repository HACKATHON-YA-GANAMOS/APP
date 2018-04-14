import React, { Component } from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements'
//import CombinedButton from 'react-native-combined-button';


export default class OwnButton extends Component {
  pressFunction(navigation, link){
    return(
      () => {navigation.navigate(link);}
    );
  }
  render() {
    const height = this.props.height || "10%";
    const width = this.props.width || "70%";
    const onPress = this.props.onPress ? this.props.onPress : this.pressFunction(this.props.navigation, this.props.link);
    let backgroundColor;
    let color;
    let imagePath;
    if (this.props.green) {
      backgroundColor = '#159c8c';
      color = '#ffffff';
    } else {
      backgroundColor = '#ffffff';
      color = '#159c8c';
    }
    const button = { backgroundColor: backgroundColor, height: height, width: width };
    const text = { color: color };
    const  buttonStyle = StyleSheet.flatten([style.button, button]);
    const textStyle = StyleSheet.flatten([style.text, text]);
    if (this.props.back && this.props.green) {
      return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
          <Image source={require('../assets/images/whiteBackArrow.png')} style={style.image}
                 resizeMethod={"resize"} />
        </TouchableOpacity>
      );
    } else if (this.props.back) {
      return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
          <Image source={require('../assets/images/greenBackArrow.png')} style={style.image}/>
        </TouchableOpacity>
      );
    }else {
      return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
          <Text style={textStyle}>
            {this.props.text}
          </Text>
        </TouchableOpacity>
      );
    }
  }
}

const style = StyleSheet.create({
  button: {
    flexDirection: "row",
    padding: "6%",
    marginTop: "4%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    position:'absolute',
  },
  image: {
    resizeMode: "contain",
    flex: 1,
    width: '100%',
    position:'absolute',
  }
});
