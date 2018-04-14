import React, { Component } from 'react';
import {StyleSheet, Text, View, Dimensions  } from 'react-native';


export default class Table extends Component {
  render() {
    const rows = [];
    let tempRow = [];
    let tempColumn = [];
    let index = 0;
    const color = this.props.black ?  '#545c64':'#ffffff';
    const borderColor = { borderColor: color };
    const textColor = { color: color };

    this.props.data.forEach((row) => {
      row.forEach((element) => {
        if (typeof element ==='string'){
          tempRow.push(
            <View key={index++} style={[styles.cell, borderColor]}>
              <Text style={[styles.text, textColor]}> {element} </Text>
            </View>
          );
        } else if (Array.isArray(element)) {
          element.forEach((information) => {
            tempColumn.push(
              <View key={index++} style={styles.insideColumn}>
                <Text style={[styles.text, textColor]}> {information} </Text>
              </View>);
          });
          tempRow.push(
            <View key={index++} style={[styles.cell, borderColor]}>
              <View children={tempColumn}/>
            </View>
          );
          tempColumn = [];
        }
      });
      rows.push(
        <View key={index++} children={tempRow} style={[styles.row, borderColor]} />
      );
      tempRow = [];
    });
    return (
      <View children={rows} style={[styles.column, borderColor]}/>
    );
  }
}

const maxHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  row: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ffffff',
  },
  column: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    margin: '5%',
    alignSelf: 'center',
    borderColor: '#ffffff',
  },
  insideColumn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 15,
    color: '#ffffff'
  },
  cell:{
    flex: 1,
    borderRightWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ffffff',
  }
});
