import React, { Component } from 'react';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import {FileSystem} from "expo";

const pictureSize = 150;
export default class Row extends Component {
  state = {
    loading: false,
    name: null,
    path: this.props.imagePath,
    url: this.props.url,
  };
  pressFunction(navigation, link){
    return(
      () => {navigation.navigate(link, {path: this.state.path})}
    );
  }

  async postRequest(imagePath){
    const uri = `${this.state.url}`;
    let data = new FormData();
    data.append('picture', {uri: uri, name: imagePath, type: 'image/jpg'});
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data;',
      },
      body: data,
    };
    return await fetch("http://172.20.10.6:5002/recognition", config)
      .then((res) => {return res.json();})
      .then((data) => {
        //console.log(data);
        //console.log( JSON.stringify( data ) );
        return JSON.stringify( data );
      })
      .catch(err => {
        console.log(err);
      });
  }

  async fetchData() {
    this.setState({ loading: true });
    let info = await this.postRequest(this.props.imagePath);
    info = JSON.parse(info);
    console.log(info["label"]);
    this.setState({
      name: info["label"],
      loading: false,
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const onPress = this.props.onPress ? this.props.onPress : this.pressFunction(this.props.navigation, this.props.link);
    if (this.state.loading) {
      return (<Text>Loading ...</Text>)
    } else {
      return (
        <View style={styles.pictureWrapper}>
          <Image
            key={this.state.path}
            style={styles.picture}
            source={{
              uri: `${FileSystem.documentDirectory}photos/${this.state.path}`,
            }}
          />
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.textImage}>{this.state.name}</Text>
          </TouchableOpacity>
        </View>

      );
    }
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
  },

  picture: {
    // position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    resizeMode: 'contain',
    width: pictureSize,
    height: pictureSize,
  },
  pictureWrapper: {
    // width: Dimensions.get("window").width,
    // height: pictureSize,

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    borderColor: "#37474F",
  },
  textImage: {
    color: 'black',
    // paddingLeft: 0,
    fontSize: 40,
    paddingTop: 40,
    // textAlign: 'rigth',

  }
});
