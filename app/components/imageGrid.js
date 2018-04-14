import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import GridView from 'react-native-super-grid';
import images from '../assets/images/box/index'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class ImageGrid extends Component {
  pressFunction(navigation, link){
    return(
      (item) => {navigation.navigate(link);}
    );
  }
  render() {
    // Taken from https://flatuicolors.com/
    const onPress = this.props.onPress ? this.props.onPress : this.pressFunction(this.props.navigation, this.props.link);
    return (
      <GridView
        itemDimension={windowWidth * 0.4}
        items={this.props.items}
        style={styles.gridView}
        renderItem={item => (
          <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
            <View>
              <View style={styles.imageContainer} transform={[{translateY: windowHeight*0.06}]}>
                <Image source={images[item.number]} style={styles.image}/>
              </View>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDate}>{item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }
}


const styles = StyleSheet.create({
  gridView: {
    paddingTop: "5%",
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: "2%",
    height: windowHeight * 0.2,
    width: windowWidth * 0.4,
  },
  itemName: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
    backgroundColor: '#545c6480',
  },
  itemDate: {
    fontWeight: '600',
    fontSize: 12,
    color: '#ffffff',
    backgroundColor: '#545c6480'
  },
  image: {
    resizeMode: "stretch",
    height: Dimensions.get('window').height * 0.2,
    width: Dimensions.get('window').width * 0.4,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#545c64'
  },
  imageContainer: {
    alignItems: 'center'
  }
});
