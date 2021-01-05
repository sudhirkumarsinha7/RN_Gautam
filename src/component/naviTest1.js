import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

class naviTest1 extends Component{
    show=()=>{
       this.props.navigation.navigate('S2');
    }
    render(){
        return(
            <View>
                <Text>
                    Screen 1
                </Text>
                <Button title="show" onPress={this.show}></Button>
            </View>
        )
    }
}

export default naviTest1;