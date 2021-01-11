import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
class news extends Component {
    render() {
        return (
            <View style={{ flex: 1, borderWidth: 5, padding: 20 }}>
                <Text style={{ alignSelf: 'center', padding: 10, fontSize: 20, fontWeight: 'bold', }}>
                    Headlines of the Day
                </Text>
                <Text style={{ alignSelf: 'center', padding: 30, fontSize: 15 }}>
                    Getting packages from the registry
                    Searching for and choosing packages to download
                    Downloading and installing packages locally
                    Downloading and installing packages globally
                    Resolving EACCES permissions errors when installing packages globally
                    Updating packages downloaded from the registry
                    Using npm packages in your projects
                    Using deprecated packages
                    Uninstalling packages and dependencies
                </Text>
                <Button title="Old News" onPress={() => { this.props.navigation.navigate('old') }}></Button>
            </View>
        )
    }
}
export default news;