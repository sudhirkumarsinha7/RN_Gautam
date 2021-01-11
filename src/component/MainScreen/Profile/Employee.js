import React, { Component } from 'react';
import { View, Text, Button, TextInput, FlatList } from 'react-native';
import { tankData } from '../../../common/defaultvalue'

class Employee extends Component {

    eachItem(item) {
        return (

            <View style={{ borderWidth:1, padding:10}}>
                {/* <Text>{JSON.stringify(item)}</Text> */}
                <Text>{item.asset_id+''}</Text>

            </View>);
    }
    render() {
        return (
            <View >
                <Text style={{ alignSelf: 'center', padding: 10, fontSize: 20, fontWeight: 'bold', }}>
                    All Profiles
                </Text>


                <FlatList
                        data={tankData.data.assets}

                        renderItem={({item}) => (
                            this.eachItem(item)
                        )}
                        keyExtractor={(item) => item.asset_id}

                    />
            </View>
        )
    }
}
export default Employee;