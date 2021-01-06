import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class SelectedProfile extends Component {
    render() {
        return (
            <View style={{ flex: 1, borderWidth: 5, padding: 10 }}>
                <Text style={{ alignSelf: 'center', padding: 10, fontSize: 20, fontWeight: 'bold', }}>
                    Profile selected for Hackathon'20.
                </Text>
                <Text style={{ alignSelf: 'center', padding: 30, fontSize: 15 }}>
                        dksljfhgiusydfgsuy
                        akfhdgahufjahwefg
                        ajhwgfjhagwfwfekf
                        wjefhghjwefjwefgjhkwef
                        wjkeruwejfgjhawfjhgasdfjhg
                        gahdfuyafjavj
                </Text>
                <Button title="Back to Profile Home" onPress={() => { this.props.navigation.goBack() }}></Button>
            </View>
        )
    }
}
export default SelectedProfile;