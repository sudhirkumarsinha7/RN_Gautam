import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { styles,buttons } from '../../../common/style';
class SetUp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ padding: 10, fontSize: 20, fontWeight: 'bold', }}>
                    Welcome to the setup page.
                    
                </Text>
                <Text style={{ padding: 30, fontSize: 15 }}>
                1. Here You can set your enviornments for both Android and iOS.
                </Text>
                <Text style={{padding: 30, fontSize: 15 }}>
                2. You will also got to know about the different packages you need to develop an Andoid app and iOS App.

                </Text>
                <View style={buttons.primary}>
                    <Button title="Click Here for Android Setup " onPress={() => { this.props.navigation.navigate('androidsetup') }}/>
                </View>
                <View style={buttons.primary}>
                    <Button title="Click Here for iOS Setup " onPress={() => { this.props.navigation.navigate('Ios') }}/>
                </View>
            </View>
        )
    }
}
export default SetUp;