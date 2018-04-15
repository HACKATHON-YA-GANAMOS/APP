import OwnButton from '../components/button';
import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'

import {FileSystem} from "expo";

export default class Recipes extends Component {
  static navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: () => <Icon name='search' type='fontawesome' />
  };
  render() {
    const { params } = this.props.navigation.state;
    const recipes = !params ? "Photo_100": params.recipes;
    console.log(recipes);
    return (
      <View style={styles.column}>
        <Text style={{fontWeight: 'bold'}}>Name:</Text>
            <Text>
            {recipes["name"]}
            </Text>
        <Text style={{fontWeight: 'bold'}}>Directions:</Text>
        <View style={styles.column}>
          {recipes["recipe"]["directions"].map((dire=>(
            <Text>
              {dire}
            </Text>
          )))}
        </View>

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
  column: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "95%",
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
