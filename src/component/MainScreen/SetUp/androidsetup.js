import React, { Component } from 'react';
import { View, Text, Button , ScrollView, ImageBackground, TouchableOpacity} from 'react-native';

class androidsetup extends Component {
    render() {
        return (
            <ScrollView>
                    <View>
                    <Text style={{ alignSelf: 'center', padding: 10, fontSize: 20, 
                        fontWeight: 'bold',backgroundColor:'#adff2f', marginTop:Platform.OS=='ios'?40:10 }}>
                         Enviornment SetUp for Android
                    </Text>
                </View>
                <View>
                    <Text style={{ paddingTop: 20, fontSize: 20, fontWeight: 'bold' ,paddingLeft:10}}>
                        Prerequisites to set up enviornments
                    </Text>
                    <Text style={{ padding: 10, fontSize: 17, }}>
                        Download software’s{'\n\n'}
                        
                        1. Node.js (Version 8 or newer) — https://nodejs.org/en/download/{'\n\n'}
                        2. Chrome — https://www.google.com/chrome/{'\n\n'}
                        3. Visual Studio Code (you can use any other editor or IDE){'\n\n'}
                        4. Android Studio — Download and install the latest version of Android Studio for Windows from https://developer.android.com/studio/{'\n\n'}
                        5. Java Development Kit (JDK 8 or newer).{'\n'}
                        Download and install the latest version of Java SDK from http://www.oracle.com/technetwork/pt/java/javase/downloads/jdk8-downloads-2133151.html.{'\n\n'}
                        6. Download and install Python 2.7.15 from https://www.python.org/downloads/windows/{'\n\n'}
                        7. Intel x86 Emulator Accelerator (HAXM installer) — (haxm-windows_v7_6_1){'\n'}
                        https://github.com/intel/haxm/wiki/Installation-Instructions-on-Windows.{'\n\n'}
                        8. BOIS setting if need to run emulator (enable VT-x in BIOS)
                    </Text>
                    
                </View>
                <View style={{paddingLeft:10}}>
                    <Text style={{ paddingTop: 20, fontSize: 20, fontWeight: 'bold' }}>
                        Step 1: Open Android Studio
                    </Text>
                    <Text style={{ padding: 10, fontSize: 17, }}>
                        The Android Studio installs the latest Android SDK by default https://developer.android.com/studio
                    </Text>
                    <Text style={{ padding: 10, fontSize: 17, }}>
                        Once installed you can go to Tools {'>'} SDK Manager and choose the latest version.
                    </Text>
                    <ImageBackground style={{ height: 250, width:320,margin:15 }}
                        source={require('../../../common/Images/And1.png')}>
                    </ImageBackground>
                    <ImageBackground style={{ height: 250, width:320,margin:15 }}
                        source={require('../../../common/Images/And2.png')}>
                    </ImageBackground>
                    <ImageBackground style={{ height: 250, width:320,margin:15 }}
                        source={require('../../../common/Images/And3.png')}>
                    </ImageBackground>
                    <ImageBackground style={{ height: 250, width:320,margin:15 }}
                        source={require('../../../common/Images/And4.png')}>
                    </ImageBackground>
                </View>

                <View style={{paddingLeft:10}}>
                    <Text style={{ paddingTop: 20, fontSize: 20, fontWeight: 'bold' }}>
                        Step 2: Configure Enviornment Variables
                    </Text>
                    <Text style={{ paddingTop: 10,paddingLeft:10, fontSize: 17, }}>
                        a) Add the ANDROID_HOME variable:
                    </Text>
                    <Text style={{ paddingLeft: 20,paddingRight:15, fontSize: 17,backgroundColor:'gray' }}>
                        C:\Users\{'user_name'}\AppData\Local\Android\Sdk
                    </Text>
                    <ImageBackground style={{ height: 200, width:250,alignSelf:'center' }}
                        source={require('../../../common/Images/And5.png')}>
                    </ImageBackground>
                    <Text style={{ paddingTop: 10,paddingLeft:10, fontSize: 17, }}>
                        b) Add JAVA_HOME variable:
                    </Text>
                    <Text style={{ paddingLeft: 20,paddingRight:15, fontSize: 17,backgroundColor:'gray' }}>
                        C:\Program Files\Android\Android Studio\jre
                    </Text>

                    <ImageBackground style={{ height: 220, width:250,alignSelf:'center',marginTop:10 }}
                        source={require('../../../common/Images/And6.png')}>
                    </ImageBackground>
                    <Text style={{ paddingTop: 10,paddingLeft:10, fontSize: 17, }}>
                        c) Make sure you add on Path variable the path for Java SDK and Android platform-tools:
                    </Text>
                    <Text style={{ paddingLeft: 20,paddingRight:15, fontSize: 17,backgroundColor:'gray' }}>
                        C:\Users\{'user_name'}\AppData\Local\Android\Sdk\platform-tools {'\n\n'}C:\Program Files\Java\jdk-14.0.1\bin
                    </Text>
                    <Text style={{ paddingTop: 20, fontSize: 20, fontWeight: 'bold' }}>
                        Preparing the Emulator Android - 
                    </Text>
                    <Text style={{ paddingTop: 0,paddingLeft:10, fontSize: 17, }}>
                        Configuring AVD Manager{'\n\n'}
                        Running your app on a simulator or virtual device{'\n\n'}
                        a) Open android studio and AVD manager with below steps
                    </Text>
                    <ImageBackground style={{ height: 80, width:320,margin:15 }}
                        source={require('../../../common/Images/And7.png')}>
                    </ImageBackground>
                    <ImageBackground style={{ height: 65, width:320,margin:15 }}
                        source={require('../../../common/Images/And8.png')}>
                    </ImageBackground>
                    <Text style={{ paddingTop: 0,paddingLeft:10, fontSize: 17, }}>
                        If everything is set up correctly, you should see your Android emulator shortly.
                    </Text>
                    <ImageBackground style={{ height: 300, width:160,margin:15,alignSelf:'center' }}
                        source={require('../../../common/Images/ANd9.png')}>
                    </ImageBackground>
                    <Text style={{ paddingTop: 20, fontSize: 20, fontWeight: 'bold' }}>
                        How to enable VT-X in BIOS for Android Emulator
                    </Text>

                    <Text style={{ paddingTop: 0,paddingLeft:10, fontSize: 17, }}>
                        Make sure to run an emulator you have VT-x in BIOS setting enable as per laptop configuration.
                        {'\n'}How to enable VT-x in BIOS for x86 windows to run the emulator{'\n\n'}
                        Follow these steps to fix your problem:{'\n\n'}
                        1. Restart your computer{'\n\n'}
                        2. Open BIOS ( search for your Manufacture computer type on the internet) or press (possibly some variation, but give these a try first){'\n\n'}
                        3. Use the arrow keys to choose the configuration and then search for Virtual technology — sometimes called Intel VTx.{'\n\n'}
                        4. Enable it{'\n\n'}
                        5. Exit and save the changes in configuration{'\n\n'}
                    </Text>
                </View>
                <View style={{paddingLeft:10}}>
                    <Text style={{ paddingTop: 20, fontSize: 20, fontWeight: 'bold' }}>
                        Step 3: Install create-react-native-app
                    </Text>
                    <Text style={{ paddingTop: 0,paddingLeft:10, fontSize: 17, }}>
                    After installing NodeJS and NPM successfully in your system.
                    {'\n\n'}a) Open the terminal
                    </Text>
                    <Text style={{ paddingTop: 10,paddingLeft:10, fontSize: 17,color:'white',backgroundColor:'black' , margin:10,}}>
                        C:\xampp\hotdocs\projects\react-native{'>'}
                    </Text>
                    <Text style={{ paddingTop: 10,paddingLeft:10, fontSize: 17 , }}>
                        b) you can proceed with the installation of create-react-native-app (globally as shown below)
                    </Text>
                    <Text style={{ paddingTop: 10,paddingLeft:10, fontSize: 17,backgroundColor:'gray' , margin:10,}}>
                        $ npm install -g create-react-native-app 
                    </Text>
                    <Text style={{ paddingTop: 10,paddingLeft:10, fontSize: 17 , }}>
                    c) again run below command “MyReactNative1 is your folder name ” and choose default new app
                    </Text>
                    <Text style={{ paddingTop: 10,paddingLeft:10, fontSize: 17,backgroundColor:'gray' , margin:10,}}>
                        create-react-native-app MyReactNative1
                    </Text>
                    <ImageBackground style={{ height: 100, width:360, marginLeft:20}}
                        source={require('../../../common/Images/And10.png')}>
                    </ImageBackground>
                    <Text style={{ paddingTop: 10,paddingLeft:10, fontSize: 17 , }}>
                        After selected default new app, it will install all javascript, project dependencies and project is ready.
                    </Text>
                    <ImageBackground style={{ height: 100, width:320,marginLeft:20}}
                        source={require('../../../common/Images/And11.png')}>
                    </ImageBackground>
                    <Text style={{ paddingTop: 10,paddingLeft:10, fontSize: 17 , }}>
                        After executing the above command, a folder with specifies name is created with the following contents.
                    </Text>
                    <ImageBackground style={{ height: 100, width:320,marginLeft:20}}
                        source={require('../../../common/Images/And12.png')}>
                    </ImageBackground>
                    <Text style={{ paddingTop: 10,paddingLeft:10, fontSize: 17 , }}>
                    To start the application below commands inside your React Native project folder:
                    </Text>
                    <Text style={{ padding: 10, fontSize: 17,backgroundColor:'gray' , margin:10,}}>
                        yarn run android 
                    </Text>
                    <ImageBackground style={{ height: 100, width:320,marginLeft:20}}
                        source={require('../../../common/Images/And13.png')}>
                    </ImageBackground>
                    <Text style={{ paddingTop: 10,paddingLeft:10, fontSize: 17 , }}>
                    If everything is set up correctly, you should see your new app running in your Android emulator shortly.
                    </Text>
                    <ImageBackground style={{ height: 500, width:320,margin:15 }}
                        source={require('../../../common/Images/And14.png')}>
                    </ImageBackground>
                </View>
                <View style={{padding:20}}>
                <TouchableOpacity
                            style={{
                                alignSelf:'center', padding:10, borderRadius: 10, 
                                backgroundColor: 'green'
                                }}
                                onPress={() => { this.props.navigation.goBack() }}
                    >
                        <Text style={{ fontSize: 16 ,color:'white', fontWeight:'bold', alignSelf:'center'}}>
                            Back to SetUp Page
                        </Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>


        )
    }
}
export default androidsetup;