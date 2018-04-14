import React, { Component } from 'react';
import {StyleSheet, Text, TouchableOpacity } from 'react-native';
import {thirdColor} from './styles';

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
    if (this.props.green) {
      backgroundColor = thirdColor;
      color = '#ffffff';
    } else {
      backgroundColor = '#ffffff';
      color = thirdColor;
    }
    const button = { backgroundColor: backgroundColor, height: height, width: width };
    const text = { color: color };
    const  buttonStyle = StyleSheet.flatten([style.button, button]);
    const textStyle = StyleSheet.flatten([style.text, text]);
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
          <Text style={textStyle}>
            {this.props.text}
          </Text>
        </TouchableOpacity>
      );
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
});
