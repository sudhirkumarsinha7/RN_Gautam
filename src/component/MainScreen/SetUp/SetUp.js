import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles,buttons } from '../../../common/style';
import Modal from 'react-native-modal'

class SetUp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>

                <Text style={{ padding: 10, fontSize: 20, fontWeight: 'bold', alignSelf:'center', color:'red'}}>
                    Welcome to the setup page.
                </Text>
                <Text style={{ padding: 30, fontSize: 15 }}>
                    1. Here You can set your enviornments for both Android and iOS.
                </Text>
                <Text style={{padding: 30, fontSize: 15 }}>
                    2. You will also got to know about the different packages you need to develop an Andoid app and iOS App.
                </Text>

                </View>

                <View style={buttons.primary}>
                <TouchableOpacity
                            style={{
                                alignSelf:'center', padding:10, borderRadius: 10, 
                                backgroundColor: 'green'
                                }}
                                onPress={() => { this.props.navigation.navigate('androidsetup') }}
                    >
                        <Text style={{ fontSize: 16 ,color:'white', fontWeight:'bold', alignSelf:'center'}}>
                            Android SetUp
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={buttons.primary}>
                <TouchableOpacity
                            style={{
                                alignSelf:'center', padding:10, borderRadius: 10, 
                                backgroundColor: 'green'
                                }}
                                onPress={() => { this.props.navigation.navigate('Ios') }}                    >
                        <Text style={{ fontSize: 16 ,color:'white', fontWeight:'bold', alignSelf:'center'}}>
                            iOS SetUp
                        </Text>
                    </TouchableOpacity>
                </View>
                
                <View>
                <TouchableOpacity
                            style={{
                                marginTop: 20, alignSelf:'center',
                                borderRadius: 10, 
                                backgroundColor: 'black', padding: 10, width:'30%'
                            }}
                            onPress={() => { this.props.navigation.navigate('QRSetup') }}>
                        <Text style={{ fontSize: 16 ,color:'white', fontWeight:'bold', alignSelf:'center'}}>QRSetup</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default SetUp;