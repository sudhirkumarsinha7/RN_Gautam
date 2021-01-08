// This file gives a brief implementation of transision between different screens.
//HomeRoute.js file has been used to implement Navigation using stack
// All the subsequent folders (Notifications, Profile, Settings) follow the same structures as Home Folder


import React, { Component } from 'react';
import { ScrollView,View, Text, Button } from 'react-native';
import { tankData } from '../../../common/defaultvalue';


var arr = tankData.data.assets
var output = arr.map(each => {
    return each.asset_id
})

class HomeContent extends Component {
    render() {
        return (
            <View style={{ flex: 1, borderWidth: 5, padding: 20 }}>

                <Text style={{ alignSelf: 'center', padding: 10, fontSize: 20, fontWeight: 'bold', }}>
                    Welcome to the Homepage
                </Text>

                <Text style={{ alignSelf: 'center', padding: 30, fontSize: 15 }}>
                    React Native is an open source framework for building Android and iOS applications using React
                    and the app platform’s native capabilities. With React Native, you use JavaScript to access
                    your platform’s APIs as well as to describe the appearance .
                </Text>
                <Button title="Learn More" onPress={() => { this.props.navigation.navigate('Second') }}></Button>

                <ScrollView style={{flex:2, borderWidth: 5, padding: 20}}> 
                    <Text>
                        {'Asset-IDs fetched with JSON File using "map" function \n\n'+ JSON.stringify(output)}
                    </Text>
                </ScrollView>


            </View>
        )
    }
}
export default HomeContent;