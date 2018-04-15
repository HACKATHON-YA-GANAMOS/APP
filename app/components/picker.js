import React, { Component } from 'react';
import { StyleSheet, Image, View, TextInput } from 'react-native';
import ModalSelector from 'react-native-modal-selector'


export default class MyPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textInputValue: ''
    };
    this.onChange = this.onChange.bind(this)
  }

  onChange(option) {
    this.setState({textInputValue:option.label});
    this.props.callback(option.label);
  }

  render() {
    const textColor = this.props.black ? '#545c64': '#ffffff';
    const backgroundColor = this.props.black ? '#ffffff': '#159c8c';
    const borderColor = this.props.black ? '#ffffff' : '#545c64';
    const fontSize = this.props.fontSize || 20;
    const fontWeight = this.props.fontSize ? 'normal' : 'bold';
    return (
        <ModalSelector
          data={this.props.data}
          initValue={this.props.initValue}
          onChange={this.onChange}
          cancelText={"Cancelar"}
          sectionTextStyle={styles.sectionText}
          optionTextStyle={styles.optionText}
          optionContainerStyle={styles.optionContainer}
          cancelTextStyle={styles.sectionText}
          cancelContainerStyle={styles.optionContainer}>
          <View style={[styles.container, {backgroundColor:backgroundColor, borderColor:borderColor}]}>
            <TextInput
              style={[styles.textInput, {backgroundColor: backgroundColor, color: textColor, fontSize: fontSize, fontWeight: fontWeight}]}
              editable={false}
              placeholder={this.props.initValue}
              placeholderTextColor={textColor}
              selectionColor={textColor}
              value={this.state.textInputValue}/>
            <Image
              source={require('../assets/images/downArrow.png')}
              style={styles.image} />
          </View>
        </ModalSelector>
    );
  }
}



const styles = StyleSheet.create({
  textInput: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:"1%",
  },
  image: {
    width: "10%",
    height: "50%",
    resizeMode: 'contain',
  },
  container: {
    paddingHorizontal: "2%",
    paddingVertical: "6%",
    marginTop: "4%",
    borderWidth:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  sectionText: {
    color: '#159c8c',
    fontSize: 20,
    fontWeight: 'bold'
  },
  optionText: {
    color: '#545c64',
    fontSize: 15,
    fontWeight: 'bold',
  },
  optionContainer: {
    backgroundColor: '#ffffff'
  }
});
