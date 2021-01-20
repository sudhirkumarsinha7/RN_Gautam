import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class ReactNav extends Component {
    render() {
        return <WebView source={{ uri: 'https://reactnavigation.org/docs/getting-started/' }} />;
      }
}
export default ReactNav;