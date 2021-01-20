import React, { Component } from 'react';
import { TextInput, Button, View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm from 'react-native-simple-radio-button';
import { textinput } from '../../../common/style';

class Reg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false, check1: false, radioSelected: 1, value: 0,
            country: 'uk'
        }
    }
    getUser = () => {
        alert('Registered Sucessfully');
    }
    getCancel = () => {
        alert('Cancelled');
    }

    checkBox_Test = (id) => {
        this.setState((prevState) => ({ check: !prevState.check }));
    }
    checkBox_Test1 = (id) => {
        this.setState((prevState) => ({ check1: !prevState.check1 }));
    }

    functionRadio = () => {
        var radio_props = [
            { label: 'Male', value: 0, },
            { label: 'Female', value: 1 }
        ];
        return (
            <ScrollView>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    onPress={(value) => { this.setState({ value: value }) }} style={{
                        marginLeft: 40, marginTop: 8,
                    }}
                    labelColor={'white'}
                />
            </ScrollView>
        );
    }

    render() {

        return (
            <ScrollView >
                <ImageBackground style={{ height: 1000 }}
                    source={require('../../../common/Images/ideabytes.png')}>
                    <Text style={{
                        alignSelf: 'center',
                        fontSize: 30,
                        color: 'white', fontWeight: 'bold',
                        marginTop: 25

                    }}>Register
                    </Text>

                    <Text style={{
                        alignSelf: 'center',
                        fontSize: 15,
                        color: 'orange', fontWeight: 'bold',

                    }}>Please fill this form to create an account.
                </Text>

                    <View style={{ marginTop: 30, marginLeft: 15 }}>
                        <Text style={{
                            fontSize: 20,
                            marginLeft: 10,
                            color: 'white', fontWeight: 'bold',

                        }}>Full Name
                    </Text>

                        <TextInput
                            style={textinput.textinput1}
                            placeholder="Enter Your Name "
                            placeholderTextColor="white" />

                        <Text style={{
                            marginTop: 10,
                            fontSize: 20,
                            marginLeft: 10,
                            color: 'white', fontWeight: 'bold',

                        }}>Password
                    </Text>
                        {/* <Text>
                        {this.props.Gautam}
                    </Text> */}
                        <TextInput
                            style={textinput.textinput1}
                            placeholder="Enter Password "
                            placeholderTextColor="white"
                        />

                        <Text style={{
                            marginTop: 10,
                            fontSize: 20,
                            marginLeft: 10,
                            color: 'white', fontWeight: 'bold',

                        }}>Email ID
                    </Text>

                        <TextInput
                            style={textinput.textinput1}
                            placeholder="Enter Email-ID "
                            placeholderTextColor="white"
                        />

                        <Text style={{
                            marginTop: 10,
                            fontSize: 20,
                            marginLeft: 10,
                            color: 'white', fontWeight: 'bold',

                        }}>Mobile Number
                    </Text>

                        <TextInput
                            style={textinput.textinput1}
                            placeholder="Enter Mobile Number "
                            placeholderTextColor="white"
                        />
                    </View>

                    <View>
                        <Text style={{
                            marginTop: 10,
                            fontSize: 20,
                            marginLeft: 25,
                            color: 'white', fontWeight: 'bold',

                        }}>Intersted In :
                    </Text>

                        <View>
                            <CheckBox
                                value={this.state.check}
                                onChange={this.checkBox_Test}
                                style={{ marginLeft: 30, marginTop: 10, fontSize: 20 }}
                            />
                            <Text style={{ marginLeft: 70, marginTop: -27, fontSize: 15, color: 'white', }} >Software Engineering</Text>

                            <CheckBox
                                value={this.state.check1}
                                onChange={this.checkBox_Test1}
                                style={{ marginLeft: 30, marginTop: 15, fontSize: 20 }}
                            />
                            <Text style={{ marginLeft: 70, marginTop: -27, fontSize: 15, marginBottom: 10, color: 'white', }} >Software Tester</Text>

                        </View>

                        <View>
                            <Text style={{
                                fontSize: 20,
                                marginLeft: 25,
                                marginTop: 15,
                                color: 'white', fontWeight: 'bold',
                            }}>
                                Select Country
                        </Text>

                            <DropDownPicker style={{ marginLeft: 20, marginTop: 10 }}

                                items={[
                                    { label: 'USA', value: 'usa' },
                                    { label: 'India', value: 'ind' },
                                    { label: 'UK', value: 'uk' },
                                ]}
                                defaultValue={this.state.country}
                                containerStyle={{ height: 40, width: 150 }}
                                style={{ marginLeft: 25, marginTop: 10 }}

                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                dropDownStyle={{ backgroundColor: 'white' }}
                                onChangeItem={item => this.setState({
                                    country: item.value
                                })}
                            />

                            <View>
                                <Text style={{
                                    marginTop: 10,
                                    fontSize: 20,
                                    marginLeft: 25,
                                    color: 'white', fontWeight: 'bold',

                                }}>Gender
                            </Text>

                                {this.functionRadio()}

                            </View>
                            <View style={{ marginTop: 30, marginLeft: 100, marginRight: 100 }}>
                                <Button
                                    title="Register"
                                    onPress={this.getUser}
                                />
                            </View>

                            <View style={{ marginTop: 15, marginBottom: 10, marginLeft: 100, marginRight: 100 }}>
                                <Button
                                    title="Cancel"
                                    onPress={this.getCancel}
                                    color="#F44335"
                                />
                            </View>

                        </View>
                    </View>

                    <View style={{ padding: 20 }}>
                        <TouchableOpacity
                            style={{
                                alignSelf: 'center', padding: 10, borderRadius: 10,
                                backgroundColor: 'green'
                            }}
                            onPress={() => { this.props.navigation.goBack() }}
                        >
                            <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>
                                Back to Login Page
                        </Text>
                        </TouchableOpacity>

                    </View>

                </ImageBackground>
            </ScrollView>
        );
    }
}
export default Reg;