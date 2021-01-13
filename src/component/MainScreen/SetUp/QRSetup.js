import { Row } from "native-base";
import react from "react";
import React, {Component} from 'react';
import {Text,View, TextInput, TouchableOpacity} from 'react-native';
import { styles,buttons,heading, textinput } from '../../../common/style';
import Modal from 'react-native-modal';


class QRSetup extends Component{
    constructor(props) {
        super(props);
        this.state = { text1:'',
                        photp:false
        };
    }
    setText=(text)=>{
        this.setState({ text1: text })
    }
    getText=()=>{

    }
    onClick = () => {
        this.setState({
            photo: (!this.state.photo)
        });
    };
    render(){
        return(
            <View>
                <Text style={{
                    fontWeight:'bold', alignSelf:'center', fontSize:20
                }}>
                    QR Code Scanner Trial
                </Text>
                <View style={{flexDirection:'row', flext:1,paddingTop:20,paddingLeft:15}}>
                    <View style={{flext:0.5,}}>
                        <Text style={{fontSize:20, marginTop:6}}>
                            Code
                        </Text>
                    </View>
                    <View style={{flext:0.5,marginLeft:10,marginTop:2.5, width:'45%',height:'70%'}}>
                        <TextInput style={{padding:10,borderWidth:2, textDecorationColor:'red'}}
                            placeholder="Enter QR Code " 
                            onChangeText={text => this.setText(text)}
                            value={this.state.text1}
                        />
                    </View>

                    <View style={{flext:0.5,marginLeft:10, width:'45%',}}>
                        <TouchableOpacity
                            style={{borderRadius: 10, backgroundColor: 'black', padding: 10, width:'40%'}}
                            onPress={this.onClick}>
                            <Text style={{ fontSize: 16 ,color:'white', fontWeight:'bold', alignSelf:'center'}}>Scan</Text>
                        </TouchableOpacity>
                            
                            
                        <Modal isVisible={this.state.photo} style={{
                            backgroundColor: 'white', maxHeight: 200, marginTop: 290}}>

                        </Modal> 
                    </View>



               
                </View>
            </View>
        )
    }
}

export default QRSetup;