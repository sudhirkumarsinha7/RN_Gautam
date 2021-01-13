/**
 * profileDetails.js
 * @author: Gautam Gupta
 * Created On: 12- Mar- 2021
 * This file is associated with the screen which shows
 * s profile in Drawer Navigation
 */

import React, { Component } from 'react';
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { textinput, heading, styles, imageStyle } from '../../../common/style';
import { Helper } from '../../../common/helperComponent';
import Modal from 'react-native-modal'

class profileDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: false,
        };
    }
    onClick = () => {
        this.setState({
            photo: (!this.state.photo)
        });
    };
    alertFun = () => {
        alert('Not Implemented Yet')
    }

    render() {
        return (
            <View>

                <View style={{ backgroundColor: '#008b8b', }}>
                    <Text style={heading.heading2}>
                        Your Profile
                </Text>
                    <View>
                        <Image style={imageStyle.profileImage}
                            source={require('../../../common/Images/MyPic.png')} />
                    </View>
                    <View>
                        <TouchableOpacity
                            style={{
                                marginTop: 10, marginLeft: 120, marginRight: 120,
                                alignItems: 'center', borderRadius: 100,
                                backgroundColor: 'red', padding: 10
                            }}
                            onPress={this.onClick}
                        >
                            <Text style={{ fontWeight: 'bold' }}>Update</Text>
                        </TouchableOpacity>

                        <Modal isVisible={this.state.photo} style={{
                            backgroundColor: 'white', maxHeight: 200, marginTop: 290
                        }}>
                            <View style={{ backgroundColor: 'white' }}>
                                <Text style={{ alignSelf: 'center' }}>
                                    Change Image
                                </Text>
                                <TouchableOpacity
                                    style={{
                                        marginTop: 50, marginLeft: 20, marginRight: 220,
                                        alignItems: 'center', borderRadius: 100,
                                        backgroundColor: '#008b8b', padding: 10
                                    }}
                                    onPress={this.alertFun}                                >
                                    <Text style={{ fontWeight: 'bold', color: 'white' }}>Camera</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{
                                        marginTop: -37, marginLeft: 200, marginRight: 20,
                                        alignItems: 'center', borderRadius: 100,
                                        backgroundColor: '#8b008b', padding: 10
                                    }}
                                    onPress={this.alertFun}
                                >
                                    <Text style={{ fontWeight: 'bold', color: 'white' }}>Gallery</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{
                                        marginTop: 10, marginLeft: 120, marginRight: 120,
                                        alignItems: 'center', borderRadius: 100,
                                        backgroundColor: 'black', padding: 10
                                    }}
                                    onPress={this.onClick}
                                >
                                    <Text style={{ fontWeight: 'bold', color: 'white' }}>Cancel</Text>
                                </TouchableOpacity>

                            </View>
                        </Modal>
                    </View>
                </View>

                <View style={{
                    backgroundColor: '#5f9ea0',
                    borderWidth: 2, marginTop: 10, borderRadius: 20,
                }}>
                    <Helper
                        leftText={'Name'}
                        rightText={'Gautam Prasad Gupta'}
                    />
                    <Helper
                        leftText={'Designation'}
                        rightText={'Software Developer'}
                    />
                    <Helper
                        leftText={'Department'}
                        rightText={'Development'}
                    />
                    <Helper
                        leftText={'Mobile'}
                        rightText={'9693271971'}
                    />
                </View>
                <View style={{ marginLeft: 120, marginTop: 20, marginRight: 120 }}>
                    <Button title="Employee List" />
                </View>
            </View>
        );
    }
}
export default profileDetails;