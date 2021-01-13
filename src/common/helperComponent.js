import React, { Component } from 'react';
import { Text, View } from 'react-native';


class Helper extends Component {
    render() {
        const { leftText, rightText } = this.props;
        return (

            <View style={{
                flexDirection: 'row', alignItems: 'center', marginTop: 10, padding: 7,
                marginLeft: 20
            }}>
                <Text
                    style={{
                        color: 'black',
                        fontSize: 17,
                        width: '45%',
                    }}>
                    {leftText}
                </Text>
                <Text
                    style={{
                        fontSize: 17,
                        color: 'black',
                    }}>
                    {rightText}
                </Text>
            </View>
        );
    }
}

export { Helper };
