import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { FileSystem } from 'expo';
import OwnButton from '../components/button';
import { Icon } from 'react-native-elements'
const pictureSize = 150;

export default class GalleryScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Camera',
    tabBarIcon: () => <Icon name='rowing' />
  };
  state = {
    images: {},
    photos: [],
    uploaded: true,
  };

  _mounted = false;

  componentDidMount() {
    this._mounted = true;
    FileSystem.readDirectoryAsync(FileSystem.documentDirectory + 'photos').then(photos => {
      if (this._mounted) {
        this.setState({ photos });
        const urlo = `${FileSystem.documentDirectory}photos/${photos[0]}`;
        let data = new FormData();
        data.append('picture', {uri: urlo, name: 'selfie.jpg', type: 'image/jpg'});
        console.log(data);
        const config = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data;',
            'image': 'holi',
          },
          body: data,
        };
        fetch("http://172.20.3.81:5002/recognition", config)
          .then((res) => {return res.json();})
          .then((data) => {
            console.log(data);
            console.log( JSON.stringify( data ) );
            return JSON.stringify( data );
          })
          .catch(err => {
            console.log(err);
          });}
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

  async uploadfunction(){
    if (this._mounted){
      console.log(this.state);
      const urlo = `${FileSystem.documentDirectory}photos/${this.state.photos[0]}`;
      let data = new FormData();
      data.append('picture', {uri: urlo, name: 'selfie.jpg', type: 'image/jpg'});
      const config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data;',
          'image': 'holi',
        },
        body: data,
      };
      fetch("http://172.20.3.81:5002/recognition", config)
        .then((responseData) => {
          console.log(responseData);
        })
        .catch(err => {
          console.log(err);
        });
    }else {
      console.log(this.state.photos);
    }

  }
  render() {

    return (
      <View style={styles.container}>
        <OwnButton onPress={this.uploadfunction}/>
        <TouchableOpacity style={styles.backButton} onPress={this.props.onPress}>
          <Text>Back</Text>
        </TouchableOpacity>
        <ScrollView contentComponentStyle={{ flex: 1 }}>
          <View style={styles.pictures}>
            {this.state.photos.map(photoUri => (
              <View style={styles.pictureWrapper} key={photoUri}>
                <Image
                  key={photoUri}
                  style={styles.picture}
                  source={{
                    uri: `${FileSystem.documentDirectory}photos/${photoUri}`,
                  }}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
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
