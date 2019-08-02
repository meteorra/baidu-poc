/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, Button, TouchableHighlight} from 'react-native';
import { MapView, MapTypes, Geolocation, Overlay } from 'react-native-baidu-map';
const {height, width} = Dimensions.get('window');

type Props = {};
export default class App extends Component<Props> {
  state = {
  };

  render() {
    const { infoWindowProps } = this.state;

    return (
  
      <View style={styles.container}>

         <TouchableHighlight onPress={()=>Geolocation.reverseGeoCode(22.546045,113.960453).
            then(data => {
              console.warn('reverseGeoCode',data);
            })
            .catch(e =>{
              console.warn(e, 'error');
            }) }>
          <Text style={styles.bigBlue}
               >Click to get address from latitude and Longitude</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={()=>Geolocation.geocode("深圳市","威新软件园").
            then(data => {
              console.warn('geocode',data);
            })
            .catch(e =>{
              console.warn(e, 'error');
            }) }>
          <Text style={styles.red}
               >Click to get latitude and Longitude from address</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={()=>Geolocation.getCurrentPosition().
            then(data => {
              console.warn('getCurrentPosition:',data);
            })
            .catch(e =>{
              console.warn(e, 'error');
            }) }>
          <Text style={styles.red}
               >Click to get current location</Text>
          </TouchableHighlight>

        
        <MapView 
          width={width} 
          height={400} 
          zoom={18}
          trafficEnabled={true}
          zoomControlsVisible={true}
          mapType={MapTypes.SATELLITE}
          center={{ longitude: 113.960453, latitude: 22.546045 }}
           
        >
        </MapView>

        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  red: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
  }
});