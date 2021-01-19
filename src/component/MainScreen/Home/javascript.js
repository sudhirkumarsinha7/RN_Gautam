import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { WebView } from 'react-native-webview';

class JavaScript extends Component {
    // render() {
    //     return (
    //         <View style={{ flex: 1, borderWidth: 5, padding: 10 }}>

    //             <Text style={{ alignSelf: 'center', padding: 10, fontSize: 20, fontWeight: 'bold', }}>
    //                 Modern JavaScript
    //             </Text>

    //             <Button title="Back to Home" onPress={() => { this.props.navigation.goBack() }}></Button>

    //         </View>
    //     )
    // }
    render() {
        return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
      }
}
export default JavaScript;