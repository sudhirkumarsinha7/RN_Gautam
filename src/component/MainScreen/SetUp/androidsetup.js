import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class androidsetup extends Component {
    render() {
        return (
            <View style={{ flex: 1, borderWidth: 5, padding: 10 }}>
                <Text style={{ alignSelf: 'center', padding: 10, fontSize: 20, fontWeight: 'bold', }}>
                    Welcome to Android SECTION
                </Text>
                <Text style={{ alignSelf: 'center', padding: 30, fontSize: 15 }}>
                    Android Setup 

                </Text>
                <Button title="Back to Set Up" onPress={() => { this.props.navigation.navigate('SetUp')}}></Button>
            </View>
        )
    }
}
export default androidsetup;