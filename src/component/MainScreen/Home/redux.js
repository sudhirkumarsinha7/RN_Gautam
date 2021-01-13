import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Redux extends Component {
    render() {
        return (
            <View style={{ flex: 1, borderWidth: 5, padding: 10 }}>

                <Text style={{ alignSelf: 'center', padding: 10, fontSize: 20, fontWeight: 'bold', }}>
                    Redux Docs
                </Text>

                <Text style={{ alignSelf: 'center', padding: 30, fontSize: 15 }}>
                    Full Docs
                </Text>
                <Button title="Back to Home" onPress={() => { this.props.navigation.goBack() }}></Button>

            </View>
        )
    }
}
export default Redux;