import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import OwnButton from '../components/button';
import { FileSystem } from 'expo';
import Row from '../components/row';
//import Table from '../components/table';
const pictureSize = 150;
export default class Home extends Component {
  _mounted = false;

  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: () => <Icon name='work' type='MaterialCommunityIcons' />
  };

  constructor(props){
    super(props);
    this.state = {
      images: {},
      photos: [],
      data: [],
      uploaded: true,
    };
  }

  componentDidMount() {
    this._mounted = true;
    const tempData = [];
    let dynamicUrl;
    FileSystem.readDirectoryAsync(FileSystem.documentDirectory + 'photos').then(photos => {
      if (this._mounted) {
        console.log(FileSystem.documentDirectory);
        photos.forEach((potho)=>{
          dynamicUrl = FileSystem.documentDirectory + "photos/" + potho;
          //console.log("photo: " + potho);
          //tempData.push(<Text>{FileSystem.documentDirectory + "photos/" + potho}</Text>);
          tempData.push(<Row imagePath={potho} key={potho} url={dynamicUrl}/>);
        });
      }
    }).then(()=>{
      this.setState({
        data: tempData
      });
    });

  }


  componentWillUnmount() {
    this._mounted = false;
  }

  getImageDimensions = ({ width, height }) => {
    if (width > height) {
      const scaledHeight = pictureSize * height / width;
      return {
        width: pictureSize,
        height: scaledHeight,

        scaleX: pictureSize / width,
        scaleY: scaledHeight / height,

        offsetX: 0,
        offsetY: (pictureSize - scaledHeight) / 2,
      };
    } else {
      const scaledWidth = pictureSize * width / height;
      return {
        width: scaledWidth,
        height: pictureSize,

        scaleX: scaledWidth / width,
        scaleY: pictureSize / height,

        offsetX: (pictureSize - scaledWidth) / 2,
        offsetY: 0,
      };
    }
  };


  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.data}
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  pictures: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
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
  backButton: {
    padding: 20,
    marginBottom: 4,
    backgroundColor: 'indianred',
  },
});
