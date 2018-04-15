import OwnButton from '../components/button';
import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'

export default class SavedFoods extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: () => <Icon name='work' type='fontawesome' />
  };
    render() {
        return (
            <View style={styles.background}>
                <Image source={require('../assets/images/logo8.png')}
                       style={styles.image}/>
                <Text style={styles.text}>Guess my food</Text>
                <OwnButton style={styles.buttons} green={true} text={"Start"} navigation={this.props.navigation} link={'Camera'}/>
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
        fontSize: 25,
        marginTop: '3%',
        marginBottom: '15%',
        fontWeight: 'bold',

    },
    image: {
        flex: 1/4,
        width: '90%',
        height: '40%',
        resizeMode: 'contain'
    },
    buttons: {
      backgroundColor: '#37474F',
    }
});
