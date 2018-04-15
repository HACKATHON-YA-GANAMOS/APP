import React, { Component } from 'react';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import {FileSystem} from "expo";

const pictureSize = 150;
export default class MainScreen extends Component {
  state = {
    loading: false,
    name: null,
    path: this.props.imagePath,
    url: this.props.url,
    directions: [],
    ingredients: [],
    nutricional: [],
  };

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
    console.log("\n\n\nACAAAAAAAAAAAAA\n\n");
    this.setState({ loading: true });
    let info = await this.postRequest(this.props.imagePath);
    info = JSON.parse(info);
    console.log(info["label"]);
    this.setState({
      name: info["label"],
      directions: info["other_data"]["directions"],
      ingredients: info["other_data"]["ingredients"],
      nutricional: info["other_data"]["nutricional"] ? info["other_data"]["nutricional"]: [],
      loading: false,
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (this.state.loading) {
      return (<Text>Loading ...</Text>)
    } else {
      return (
        <View style={styles.container}>
          <Image
            key={this.state.path}
            style={styles.picture}
            source={{
              uri: `${FileSystem.documentDirectory}photos/${this.state.path}`,
            }}
          />
          <Text>{this.state.name}</Text>
          <View style={styles.directions}>
            {this.state.directions.map( direction =>(
              <Text key={direction}>
                {direction}
              </Text>
            ))}
          </View>
          <View style={styles.ingredients}>
            {this.state.ingredients.map( ingredient =>(
              <Text key={ingredient}>
                {ingredient}
              </Text>
            ))}
          </View>
          <View style={styles.nutricional}>
            {this.state.nutricional.map( nut =>(
              <Text key={nut}>
                {nut}
              </Text>
            ))}
          </View>
        </View>
      );
    }
  }
}

const maxHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    margin: '5%',
    alignSelf: 'center',
    borderColor: '#000000',
  },
  nutricional: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    margin: '5%',
    alignSelf: 'center',
    borderColor: '#000000',
  },
  directions: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    margin: '5%',
    alignSelf: 'center',
    borderColor: '#000000',
  },
  ingredients: {
    width: '100%',
  },
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
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    resizeMode: 'contain',
  },
  pictureWrapper: {
    width: pictureSize,
    height: pictureSize,
    margin: 5,
  },
});
