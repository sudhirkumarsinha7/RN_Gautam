import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Privacy extends Component {
    render() {
        return (
            <View style={{ flex: 1, borderWidth: 5, padding: 10 }}>
                <Text style={{ alignSelf: 'center', padding: 10, fontSize: 20, fontWeight: 'bold', }}>
                    Privacy Settings
                </Text>
                <Text style={{ alignSelf: 'center', padding: 30, fontSize: 15 }}>
                        Show your profile to everyone.
                        Show your profile to selected persons
                </Text>
                <Button title="Account Settings" onPress={() => { this.props.navigation.goBack() }}></Button>
            </View>
        )
    }
}
export default Privacy;