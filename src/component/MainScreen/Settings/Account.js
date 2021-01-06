import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
class Account extends Component {
    render() {
        return (
            <View style={{ flex: 1, borderWidth: 5, padding: 20 }}>
                <Text style={{ alignSelf: 'center', padding: 10, fontSize: 20, fontWeight: 'bold', }}>
                    Account Settings
                </Text>
                <Text style={{ alignSelf: 'center', padding: 30, fontSize: 15 }}>
                        Secure your accont by adding Security Questions
                        Secure your accont by adding email id
                </Text>
                <Button title="Privacy Settings" onPress={() => { this.props.navigation.navigate('Privacy') }}></Button>
            </View>
        )
    }
}
export default Account;