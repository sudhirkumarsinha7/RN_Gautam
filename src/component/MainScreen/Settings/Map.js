// import React from 'react';
// import {StyleSheet,View} from 'react-native';
// import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
// const styles = StyleSheet.create({
//  container: {
//    ...StyleSheet.absoluteFillObject,
//    width: 400,
//    justifyContent: 'flex-end',
//    alignItems: 'center',
//  },
//  map: {
//    ...StyleSheet.absoluteFillObject,
//  },
// });

// export default () => (
//    <View style={styles.container}>
//      <MapView
//        style={styles.map}
//        initialRegion={{
//         latitude: 17.4121531,
//         longitude: 78.1278513,
//         latitudeDelta: 0.2,
//         longitudeDelta: 0.2,
//         }}
//      >
//      </MapView>
//      <MapView>
//        <Marker
//           coordinate={{
//             latitude:17.4295865,
//             longitude:78.368776
//             }}
//           title = "IB"
//           pinColor ='red'>
//        </Marker>
//      </MapView>
//    </View>
// );


import React, { Component } from 'react';  
import { StyleSheet, View } from 'react-native';  
import MapView from 'react-native-maps';  
import { Marker } from 'react-native-maps';  
import { tankData1 } from "../../../common/defaultvalue";
  
export default class App extends Component {  
  render() {  
    return (  
      <View style={styles.MainContainer}>  
  
        <MapView  
          style={styles.mapStyle}  
          showsUserLocation={false}  
          zoomEnabled={true}  
          zoomControlEnabled={true}  
          initialRegion={{  
            latitude: 17.4295865,   
            longitude: 78.368776 ,  
            latitudeDelta: 0.0922,  
            longitudeDelta: 0.0421,  
          }}>  
          {(tankData1.results).map((each)=>{
          return <Marker  
          coordinate={{ latitude: each.geoloc.coordinates[0], longitude: each.geoloc.coordinates[1] }}  
          title={each.name}  
          description={each.properties.values.address}  
          />  
            })}
  
          <Marker  
            coordinate={{ latitude: 17.4295865, longitude: 78.368776 }}  
            title={"Ideabytes"}  
            description={"Ideabytes CS "}  
          />  
        </MapView>  
          
      </View>  
    );  
  }  
}  
  
const styles = StyleSheet.create({  
  MainContainer: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
    alignItems: 'center',  
    justifyContent: 'flex-end',  
  },  
  mapStyle: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
  },  
});  