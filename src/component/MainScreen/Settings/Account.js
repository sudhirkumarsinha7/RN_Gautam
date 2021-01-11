import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
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
            <View style={{ flex: 1, borderWidth: 5, padding: 20 }}>
                <Text style={{ alignSelf: 'center', padding: 10, fontSize: 20, fontWeight: 'bold', }}>
                    Account Settings
                </Text>
                <Text style={{ alignSelf: 'center', padding: 20, fontSize: 20 }}>
                    String Manipulation Implementation
                </Text>

                <Text style={{ paddingTop: 10, fontSize: 18 }}>
                    Name
                </Text>

                <TextInput style={{ borderWidth: 2, fontSize: 17 }}
                    value={this.state.Name}
                    onChangeText={text => this.setName(text)}

                />


                <Text style={{ paddingTop: 10, fontSize: 18 }}>
                    Password
                </Text>

                <TextInput style={{ borderWidth: 2, fontSize: 17 }}
                    value={this.state.password}
                    onChangeText={text => this.setPass(text)}
                />

                <Button title="Submit" onPress={this.getString} />


                
                <Button title="Privacy Settings" onPress={() => { this.props.navigation.navigate('Privacy') }}></Button>
            </View>
        )
    }
}
export default Account;