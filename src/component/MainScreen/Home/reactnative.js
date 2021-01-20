import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class ReactNative extends Component {
    render() {
        return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
      }
}
export default ReactNative;