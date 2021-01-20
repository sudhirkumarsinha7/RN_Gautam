import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { WebView } from 'react-native-webview';

class JavaScript extends Component {
    render() {
        return <WebView source={{ uri: 'https://javascript.info/' }} />;
      }
}
export default JavaScript;