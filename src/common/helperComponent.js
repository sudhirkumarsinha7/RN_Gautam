import React, { Component } from 'react';
import { Text, View } from 'react-native';


class Helper extends Component {
    render() {
        const { leftText, rightText,isWidth=null } = this.props;
        return (

            <View style={{
                flexDirection: 'row', alignItems: 'center', marginTop: 0, padding: 0,
                marginLeft: 20
            }}>
                <Text
                    style={{
                        color: 'black',
                        fontSize: 15,
                        width: isWidth?isWidth:'45%',
                    }}>
                    {leftText}
                </Text>
                <View>
                <Text
                    style={{
                        fontSize: 15,
                        color: 'black',
                    }}
                    multiline={true}>
                    {rightText}
                </Text>
                </View>
            </View>
        );
    }
}

export { Helper };
