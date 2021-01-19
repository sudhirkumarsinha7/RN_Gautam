// This file gives a brief implementation of transision between different screens.
//HomeRoute.js file has been used to implement Navigation using stack
// All the subsequent folders (Notifications, Profile, Settings) follow the same structures as Home Folder


import React, { Component } from 'react';
import { ImageBackground, ScrollView, View, Text, Button, TouchableOpacity,Platform } from 'react-native';
import { tankData } from '../../../common/defaultvalue';
import { buttons, btnStyle } from '../../../common/style'


var arr = tankData.data.assets
var output = arr.map(each => {
    return each.asset_id
})

class HomeContent extends Component {
    render() {
        return (

            <ScrollView style={{ flex: 1, }}>
                <ImageBackground style={{ height: 1000}}
                    source={require('../../../common/Images/space.png')}>
                    <Text style={{ color: 'white', alignSelf: 'center', padding: 10, fontSize: 22, fontWeight: 'bold',marginTop:Platform.OS=='ios'?40:10 }}>
                        Welcome to the Homepage
                    </Text>

                    <Text style={{ color: 'white', marginTop: 20, alignSelf: 'center', padding: 20, fontSize: 20 }}>
                        This page is associated with all the document which is useful to develop, Andriod Applications and iOS Applications.
                    </Text>

                    <View>
                        <TouchableOpacity
                            style={{
                                marginTop: 10, marginLeft: 120, marginRight: 120,
                                alignItems: 'center', borderRadius: 10,
                                backgroundColor: 'white', padding: 10
                            }}
                            onPress={() => { this.props.navigation.navigate('Redux') }}>
                            <Text style={{ fontSize: 20 }}>Redux</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                                style={{
                                    marginTop: 10, marginLeft: 120, marginRight: 120,
                                    alignItems: 'center', borderRadius: 10,
                                    backgroundColor: 'white', padding: 10
                                }}
                                onPress={() => { this.props.navigation.navigate('Javascript') }}>
                                <Text style={{ fontSize: 20 }}>JavaScript</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                                style={{
                                    marginTop: 10, marginLeft: 120, marginRight: 120,
                                    alignItems: 'center', borderRadius: 10,
                                    backgroundColor: 'white', paddingTop: 10, paddingBottom:10
                                }}
                                onPress={() => { this.props.navigation.navigate('RN')}}>  
                                 <Text style={{ fontSize: 17, }}>React-Native</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                    <TouchableOpacity
                                style={{
                                    marginTop: 10, marginLeft: 120, marginRight: 120,
                                    alignItems: 'center', borderRadius: 10,
                                    backgroundColor: 'white', padding: 10
                                }}
                                onPress={() => { this.props.navigation.navigate('ReactNav') }}> 
                                <Text style={{ fontSize: 13 }}>React Navigation</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </ScrollView>
        )
    }
}
export default HomeContent;