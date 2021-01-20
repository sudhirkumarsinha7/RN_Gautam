import React, { Component } from 'react';
import { View, Text, Button, TextInput, Platform, TouchableOpacity } from 'react-native';
class Account extends Component {
    constructor(props) {
        super(props);
        this.state = { Name: '', password: '' };
    }
    setName = (text) => {
        this.setState({ Name: text })
    }
    setPass = (text) => {
        this.setState({ password: text })
    }
    getName = () => {
        alert('Name: ' + this.state.Name + '\n' + 'Password: ' + this.state.password);
    }

    getString = () =>{
        let str1 = this.state.Name;
        let str2 = this.state.password;
        let str = '';
        var i,j;
        for(i = 0, j = 0; (i < str1.length) && (j < str2.length); i++, j++){
            str += str1[i]+'_'+str2[j]+'_';
            }
        alert(str);
    }


    render() {
        return (
            <View style={{ flex: 1, borderWidth: 0, padding: 0, alignSelf:'center', marginTop:Platform.OS=='ios'?40:10 }}>
                <Text style={{ alignSelf: 'center', padding: 10, fontSize: 20, fontWeight: 'bold', }}>
                    Account Settings
                </Text>
                <Text style={{  padding: 0, fontSize: 20 }}>
                    String Manipulation Implementation
                </Text>

                <Text style={{ paddingTop: 10, fontSize: 18 }}>
                    Text 1
                </Text>

                <TextInput style={{ borderWidth: 2, fontSize: 17 }}
                    value={this.state.Name}
                    onChangeText={text => this.setName(text)}

                />


                <Text style={{ paddingTop: 10, fontSize: 18 }}>
                    Text 2
                </Text>

                <TextInput style={{ borderWidth: 2, fontSize: 17 }}
                    value={this.state.password}
                    onChangeText={text => this.setPass(text)}
                />
                
                <View style={{padding:40}}>
                <Button title="Submit" onPress={this.getString} />
                </View>

                <View style={{padding:20}}>
                    <TouchableOpacity
                            style={{
                                alignSelf:'center', padding:10, borderRadius: 10, 
                                backgroundColor: 'green'
                                }}
                                onPress={() => { this.props.navigation.navigate('Privacy') }}
                        >
                        <Text style={{ fontSize: 16 ,color:'white', fontWeight:'bold', alignSelf:'center'}}>
                            Privacy Settings
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{padding:20}}>
                    <TouchableOpacity
                            style={{
                                alignSelf:'center', padding:10, borderRadius: 10, 
                                backgroundColor: 'orange'
                                }}
                                onPress={() => { this.props.navigation.navigate('Map') }}
                        >
                        <Text style={{ fontSize: 16 ,color:'white', fontWeight:'bold', alignSelf:'center'}}>
                            Google Map
                        </Text>
                    </TouchableOpacity>
                </View>
                
                
            </View>
        )
    }
}
export default Account;