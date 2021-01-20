import React, { Component } from 'react';
import { Button, Text, View, TextInput, Alert, Platform,ImageBackground } from 'react-native';
import { buttons, textinput } from '../../../common/style';

class log extends Component {
    constructor(props) {
        super(props);
        this.state = { userID: '', password: '' };
    }
    setUser = (text) => {
        this.setState({ userID: text })
    }
    setPass = (text) => {
        this.setState({ password: text })
    }

    getUser = () => {
        alert('Your User ID is: ' + this.state.userID + '\n' + 'Your password is: ' + this.state.password)
    }
    getReg = () => {
        this.setState({ userID: '', password: '' })
        alert('Cancelled Successfully')
    }
    render() {
        return (
            <View>
                <ImageBackground style={{height:800}}
                    source={require('../../../common/Images/ideabytes.png')}>

                <Text style={{
                    fontSize: 30,
                    alignSelf: "center", color:'white',marginTop:Platform.OS=="ios"?40:10
                    }}>Ideabytes
                </Text>

                <Text style={{
                    alignSelf: "center",
                    color: "orange",
                    margin: 5
                    }}>Innovation is Business
                </Text>


                <View
                    style={{
                        marginTop: 50,
                    }}>
                    <Text style={{
                        fontSize: 20,color:'white',fontWeight:'bold'
                    }}>  User ID </Text>
                    <TextInput
                        style={
                            textinput.textinput1}
                        placeholder="Enter User ID "
                        placeholderTextColor="white" 

                        value={this.state.userID}
                        onChangeText={text => this.setUser(text)}
                    />
                </View>
                <View
                    style={{
                        marginTop: 20
                    }}>

                    <Text style={{
                        fontSize: 20,color:'white',fontWeight:'bold'
                    }}>  Password </Text>
                    <TextInput
                        style={textinput.textinput1}
                        placeholder="Enter Password "
                        placeholderTextColor="white" 
                        onChangeText={text => this.setPass(text)}
                        value={this.state.password}
                    />
                </View>
                <View
                    style={{
                        marginTop: 50,
                        marginLeft: 30,
                        marginRight: 180,
                    }}
                >
                    <Button
                        title="Log in"
                        onPress={this.getUser}
                    />
                </View>

                <View
                    style={{
                        marginTop: -35,
                        marginLeft: 180,
                        marginRight: 50,
                    }}>
                    <Button onPress={() => this.getReg()}
                        title="Cancel"
                        color="#F44335"
                    />
                </View>
                <View style={buttons.primary}>
                    <Button color="#8b0000" title="Click Here to Register" onPress={() => { this.props.navigation.navigate('reg') }}></Button>

                </View>

                <View style={buttons.primary}>
                    <Button color="#1e90ff" title="Flat List Implementation" onPress={() => { this.props.navigation.navigate('Employee') }}></Button>

                </View>

                <View style={buttons.primary}>
                    <Button color="#1e90ff" title="Employee Details" onPress={() => { this.props.navigation.navigate('Profile') }}></Button>

                </View>

                </ImageBackground>
                
            </View>
        );
    }
}

export default log;