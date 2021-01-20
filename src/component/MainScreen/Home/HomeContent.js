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
                <ImageBackground style={{ height: 1500}}
                    source={require('../../../common/Images/space.png')}>
                    <Text style={{ color: 'white', alignSelf: 'center', padding: 10, fontSize: 22, fontWeight: 'bold',marginTop:Platform.OS=='ios'?40:10 }}>
                        Introduction to React-Native
                    </Text>

                    <Text style={{ color: 'white', marginTop: 20, padding: 10, fontSize: 17 }}>
                        React Native makes it possible to make native iOS and Android mobile apps without needing to know any iOS or Android programming - just JavaScript!

                    </Text>
                    <View>
                        <Text style={{ color: 'white', alignSelf: 'center', padding: 10, fontSize: 20, fontWeight: 'bold', }}>
                            Prerequisites to start React Native
                        </Text>
                        <Text style={{ color: 'white', marginTop: 10, padding: 10, fontSize: 17 }}>
                            In order to take advantage React-Native, you should have the following experience.

                            {'\n\n'}JavaScript - Some previous JavaScript programming knowledge is required, since we won't have time to start learning programming from scratch.
                            {'\n\n'}HTML/CSS - Basic understanding of how to make a web page. React Native doesn't actually use HTML or CSS, but the concepts are very similar to how React Native works, and having some experience with these will make the course a lot more rewarding.                          
                        </Text>
                    </View>

                    <View>
                        <Text style={{ color: 'white', alignSelf: 'center', padding: 10, fontSize: 20, fontWeight: 'bold', }}>
                            Tools
                        </Text>
                        <Text style={{ color: 'white', marginTop: 10, padding: 10, fontSize: 17 }}>
                            For React Native Application Development, you'll need

                            {'\n\n'}1. A Macbook OR a Windows or Linux laptop.{'\n'}
                            2. An iPhone OR an Android smartphone.{'\n'}
                            3. Before React Native, please make sure you have the following software installed on your computer:{'\n\n'}

                            -- Node.js 6.x or later {'\n'}
                            -- Make sure you know how to open your "Command Line" or "Terminal" and type node -v. You should see the your Node.js version printed in the terminal. {'\n'}
                            -- A text editor that can be used to edit JavaScript, for example Atom, VS Code, Sublime Text. {'\n'}
                            -- If you don't have a preference, I recommend Atom, but any text editor will do! {'\n'}
                            -- You should also install the Expo app on your phone (iOS App Store | Android Play Store)

                            {'\n\n'}Optionally, you can install the following on your laptop:{'\n'}

                            Create React Native App (with npm install -g create-react-native-app)
                       
                        </Text>
                    </View>

                    <View style={{padding:10,}}>
                        <Text style={{ color: 'white', alignSelf: 'center', padding: 10, fontSize: 20, fontWeight: 'bold', }}>
                            Important Documents Links
                        </Text>
                        <TouchableOpacity
                                style={{
                                    alignItems: 'center', borderRadius: 10,
                                    backgroundColor: 'white', marginLeft:80,
                                    marginRight:80
                                }}
                                onPress={() => { this.props.navigation.navigate('RN')}}>  
                                 <Text style={{ fontSize: 20,padding:10 }}>React-Native</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{padding:10, }}>
                        <TouchableOpacity
                                style={{
                                    alignItems: 'center', borderRadius: 10,
                                    backgroundColor: 'white', marginLeft:80,
                                    marginRight:80
                                }}
                                onPress={() => { this.props.navigation.navigate('Javascript') }}>
                                <Text style={{ fontSize: 20 ,padding:10}}>JavaScript</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{padding:10, }}>
                    <TouchableOpacity
                                style={{
                                    alignItems: 'center', borderRadius: 10,
                                    backgroundColor: 'white', marginLeft:80,
                                    marginRight:80
                                }}
                                onPress={() => { this.props.navigation.navigate('ReactNav') }}> 
                                <Text style={{ fontSize: 20 ,padding:10}}>React Navigation</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{padding:10,}}>
                        <TouchableOpacity
                            style={{
                                alignItems: 'center', borderRadius: 10,
                                backgroundColor: 'white', marginLeft:80,
                                marginRight:80
                            }}
                            onPress={() => { this.props.navigation.navigate('Redux') }}>
                            <Text style={{ fontSize: 20,padding:10 }}>Redux</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </ScrollView>
        )
    }
}
export default HomeContent;