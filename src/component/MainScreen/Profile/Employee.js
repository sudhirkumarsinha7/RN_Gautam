import React, { Component } from 'react';
import { View, Text, Button, TextInput, FlatList } from 'react-native';
import { tankData1 } from '../../../common/defaultvalue'
import { buttons } from '../../../common/style';
import {Helper} from '../../../common/helperComponent'
import { color } from 'react-native-reanimated';

class Employee extends Component {

    eachItem(item) {
        return (

            <View style={{borderColor:'green', borderWidth: 1, padding: 10, margin:5, borderRadius:10 }}>
                <Helper
                leftText={'Name :'}
                rightText={item.name}
                isWidth ={'20%'}
                />
                <Helper
                leftText={'Add :'}
                rightText={item.properties.values.address}
                isWidth ={'20%'}

                />

            </View>
            );
    }
    render() {
        return (
            <View >
                <Text style={{ alignSelf: 'center', padding: 10, fontSize: 20, fontWeight: 'bold', }}>
                    List
                </Text>


                <FlatList
                    data={tankData1.results}
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