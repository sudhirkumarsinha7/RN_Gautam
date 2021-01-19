import React, { Component } from 'react';
import { ScrollView,View, Text, Button } from 'react-native';

class iosSetup extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, padding: 10 }}>
                <View>
                    <Text style={{ alignSelf: 'center', padding: 10, fontSize: 25, fontWeight: 'bold' }}>
                        SetUp Enviornment for iOS
                    </Text>
                </View>
                <View>
                    <Text style={{ paddingTop: 20, fontSize: 20, fontWeight: 'bold' }}>
                        Step 1: Install npm and node.js
                    </Text>
                    <Text style={{ padding: 10, fontSize: 17, }}>
                         Go to the node.js website (https://nodejs.org/en/)and install node.js. npm is distributed with Node.js which means that when you download Node.js, you automatically get npm installed on your computer.
                    </Text>
                    <Text style={{ padding: 10, fontSize: 17, }}>
                            npm is a package manger for JavaScript programming language, and the default package manager for Node.js Javascript runtime environment.
                    </Text>
                </View>


                <View>
                    <Text style={{ paddingTop: 20, fontSize: 20, fontWeight: 'bold' }}>
                        Step 2: Install Homebrew
                    </Text>
                    <Text style={{ padding: 10, fontSize: 17, }}>
                        Open your terminal and run the following code to install Homebrew −
                    </Text>
                    <Text style={{ paddingLeft: 20, fontSize: 17, backgroundColor:'gray'}}>
                        /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
                    </Text>
                    <Text style={{ padding: 10, fontSize: 17, }}>
                        If for some reason copying and pasting the above didn’t work, please go directly to the website and copy and paste the command/code from there.
                    </Text>
                </View>
                <View>
                    <Text style={{ paddingTop: 20, fontSize: 20, fontWeight: 'bold' }}>
                        Step 3: Install Watchman
                    </Text>
                    <Text style={{ padding: 10, fontSize: 17, }}>
                        Run the following code to install Watchman.
                    </Text>
                    <Text style={{ paddingLeft: 20, fontSize: 17, backgroundColor:'gray'}}>
                        brew install watchman
                    </Text>
                </View>


                <View>
                    <Text style={{ paddingTop: 20, fontSize: 20, fontWeight: 'bold' }}>
                        Step 4: Install React Native
                    </Text>
                    <Text style={{ padding: 10, fontSize: 17, }}>
                            Now, run the following code to install React Native.
                    </Text>
                    <Text style={{ paddingLeft: 20, fontSize: 17,backgroundColor:'gray' }}>
                        sudo npm install -g react-native-cli
                    </Text>
                </View>


                <View>
                    <Text style={{ paddingTop: 20, fontSize: 20, fontWeight: 'bold' }}>
                        Step 5: Install Android Studio
                    </Text>
                    <Text style={{ padding: 10, fontSize: 17, }}>
                            You can use this link to install https://developer.android.com/studio/install 
                    </Text>
                    
                </View>


                <View>
                    <Text style={{ paddingTop: 20, fontSize: 20, fontWeight: 'bold' }}>
                        Step 6: Install XCode
                    </Text>
                    <Text style={{ padding: 10, fontSize: 17, }}>
                        You can use this link to install https://developer.android.com/studio/install
                    </Text>
                    
                </View>


                <View>
                    <Text style={{ paddingTop: 20, fontSize: 20, fontWeight: 'bold' }}>
                        Step 7: Create First App
                    </Text>
                    <Text style={{ padding: 10, fontSize: 17, }}>
                            We will initialize our first app by running the code given below in the terminal from the folder where we want to create the app (in our case Desktop).
                    </Text>
                    <Text style={{ paddingLeft: 20, fontSize: 17,backgroundColor:'gray' }}>
                        cd Desktop react-native init reactTutorialApp
                    </Text>
                </View>


                <View>
                    <Text style={{ paddingTop: 20, fontSize: 20, fontWeight: 'bold' }}>
                        Step 8: Run React Native Packager
                    </Text>
                    <Text style={{ padding: 10, fontSize: 17, }}>
                        First, we need to open the app folder in terminal.
                    </Text>
                    <Text style={{ paddingLeft: 20, fontSize: 17,backgroundColor:'gray' }}>
                        cd reactTutorialApp
                    </Text>
                    <Text style={{ padding: 10, fontSize: 17, }}>
                        Now, we can run the packager.
                    </Text>
                    <Text style={{ paddingLeft: 20, fontSize: 17,backgroundColor:'gray' }}>
                        react-native start
                    </Text>
                </View>

                <Button title="Back to SetUp" onPress={() => { this.props.navigation.navigate('SetUp') }}></Button>
            </ScrollView>
        )
    }
}
export default iosSetup;