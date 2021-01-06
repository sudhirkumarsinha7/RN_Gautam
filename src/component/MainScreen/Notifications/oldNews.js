import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class oldNews extends Component {
    render() {
        return (
            <View style={{ flex: 1, borderWidth: 5, padding: 10 }}>
                <Text style={{ alignSelf: 'center', padding: 10, fontSize: 20, fontWeight: 'bold', }}>
                    OLD NEWS SECTION
                </Text>
                <Text style={{ alignSelf: 'center', padding: 30, fontSize: 15 }}>
                    Mobile apps are rarely made up of a single screen. Managing the
                    presentation of, and transition between, multiple screens is
                    typically handled by what is known as a navigator. This guide
                    covers the various navigation components available in React Native.
                    If you are getting started with navigation, you will probably want
                    to use React Navigation. React Navigation provides a straightforward
                    navigation solution, with the ability to present common stack
                    navigation and tabbed navigation patterns on both Android and iOS.
                </Text>
                <Button title="Back to News" onPress={() => { this.props.navigation.goBack() }}></Button>
            </View>
        )
    }
}
export default oldNews;