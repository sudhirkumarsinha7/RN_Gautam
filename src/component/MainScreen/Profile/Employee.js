import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
class Employee extends Component {
    render() {
        return (
            <View style={{ flex: 1, borderWidth: 5, padding: 20 }}>
                <Text style={{ alignSelf: 'center', padding: 10, fontSize: 20, fontWeight: 'bold', }}>
                    All Profiles
                </Text>
                <Text style={{ alignSelf: 'center', padding: 30, fontSize: 15 }}>
                        Gautam Prasad Gupta
                        Ashutosh Kumar Choudhary
                        Sudhir Ranjan
                        Mukul Srivastava
                </Text>
                <Button title="Selected Employees" onPress={() => { this.props.navigation.navigate('SelectedProfile') }}></Button>
            </View>
        )
    }
}
export default Employee;