import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Privacy extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 10 }}>
                <Text style={{ alignSelf: 'center', padding: 10, fontSize: 20, fontWeight: 'bold', marginTop:Platform.OS=='ios'?40:10 }}>
                    Privacy Settings
                </Text>
                <Text style={{ alignSelf: 'center', padding: 20, fontSize: 15 }}>
                    Find settings {'&'} make changes{'\n'}
                    1. On your computer, go to Gmail. {'\n'}
                    2. In the top right, click Settings Settings and then See all settings. {'\n'}
                    3 At the top, choose a settings page, such as General, Labels, or Inbox. 
                    Make your changes.{'\n'}
                    4. After you're done with each page, click Save Changes at the bottom.
                </Text>
                <View style={{padding:20}}>
                    <TouchableOpacity
                            style={{
                                alignSelf:'center', padding:10, borderRadius: 10, 
                                backgroundColor: 'orange'
                                }}
                                onPress={() => { this.props.navigation.goBack() }}
                        >
                        <Text style={{ fontSize: 16 ,color:'white', fontWeight:'bold', alignSelf:'center'}}>
                            Back to Settings
                        </Text>
                    </TouchableOpacity>
                </View>
           
           
            </View>
        )
    }
}
export default Privacy;