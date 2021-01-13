import React, { Component } from 'react';
import { View, Text, Button, TextInput, FlatList } from 'react-native';
import { tankData } from '../../../common/defaultvalue'
import { buttons } from '../../../common/style';

class Employee extends Component {

    eachItem(item) {
        return (

            <View style={{ borderWidth: 1, padding: 10 }}>
                <Text>{item.asset_id + ''}</Text>

            </View>);
    }
    render() {
        return (
            <View >
                <Text style={{ alignSelf: 'center', padding: 10, fontSize: 20, fontWeight: 'bold', }}>
                    All Profiles
                </Text>

                <Text style={{ alignSelf: 'center', padding: 10, fontSize: 17 }}>
                    These are the asset_id which have been fetched with the JSON file.
                </Text>

                <FlatList
                    data={tankData.data.assets}
                    renderItem={({ item }) => (
                        this.eachItem(item)
                    )}
                    keyExtractor={(item) => item.asset_id}

                />
                <View style={buttons.primary}>
                    <Button color="#8b0000" title="Go Back to Login Page" onPress={() => { this.props.navigation.goBack() }}></Button>

                </View>

            </View>
        )
    }
}
export default Employee;