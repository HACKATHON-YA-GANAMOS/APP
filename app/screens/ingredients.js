import React, { Component } from 'react';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import {FileSystem} from "expo";
import MyPicker from '../components/picker';
import OwnButton from "../components/button";
let index;
const pictureSize = 150;
export default class Ingredientes extends Component {
  state = {
    data: [
      { key: index++, label: '16523' },
      { key: index++, label: '16525' },
      { key: index++, label: '16535' },
      { key: index++, label: '16565' },
      { key: index++, label: '16570' },
      { key: index++, label: '16522' },
      { key: index++, label: '16526' },
      { key: index++, label: '16536' },
      { key: index++, label: '16539' },
      { key: index++, label: '16545' },
      { key: index++, label: '16562' },
      { key: index++, label: '16571' },
      { key: index++, label: '16585' }
    ],
    i1: "spice",
    i2: "spice",
    i3: "spice",
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

  async postRequest(){
    const sendData = {i1: this.state.i1,
                      i2: this.state.i2,
                      i3: this.state.i3};
    let data = new FormData();
    data.append('json',  JSON.stringify(sendData));
    const config = {
      method: 'POST',
      body: data,
    };
    return await fetch("http://172.20.10.6:5002/tagfilter", config)
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

  async sendData() {
    let info = await this.postRequest();
    info = JSON.parse(info);
    this.props.navigation.navigate("RecipesList", {recipes: info});
  }

  render() {
    const onPress = this.props.onPress ? this.props.onPress : this.pressFunction(this.props.navigation, this.props.link);
    if (this.state.loading) {
      return (<Text>Loading ...</Text>)
    } else {
      return (
        <View style={styles.pictureWrapper}>
          <MyPicker data={this.state.data} initValue={"Select your ingredient"} callback={option=>this.setState({i1: option})}/>
          <MyPicker data={this.state.data} initValue={"Select your ingredient"} callback={option=>this.setState({i2: option})}/>
          <MyPicker data={this.state.data} initValue={"Select your ingredient"} callback={option=>this.setState({i3: option})}/>
          <OwnButton text={"Search"} green={true} onPress={()=>{}} />
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
