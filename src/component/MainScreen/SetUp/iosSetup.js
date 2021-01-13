import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class iosSetup extends Component {
    render() {
        return (
            <View style={{ flex: 1, borderWidth: 5, padding: 10 }}>
                <Text style={{ alignSelf: 'center', padding: 10, fontSize: 20, fontWeight: 'bold' }}>
                    IOS NEWS SECTION
                </Text>
                <Text style={{ alignSelf: 'center', padding: 30, fontSize: 15 }}>
                    IOS SetUp

                </Text>
                <Button title="Back to SetUp" onPress={() => { this.props.navigation.navigate('SetUp') }}></Button>
            </View>
        )
    }
}
export default iosSetup;