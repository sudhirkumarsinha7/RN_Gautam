import React from 'react';
import {StyleSheet,View} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default () => (
   <View style={styles.container}>
     <MapView
       //provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       initialRegion={{
        latitude: 17.4121531,
        longitude: 78.1278513,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
        }}
     >
     </MapView>
   </View>
);
