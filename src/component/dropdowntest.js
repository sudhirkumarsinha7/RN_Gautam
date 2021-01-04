import React,{Component} from 'react';
import {View,Text} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

class Drop extends Component{
    render(){
        this.state ={
           country : 'uk' 
        }

        return(
            <View>
                <Text style = {{
                    fontSize : 20,
                    textAlign : 'center',
                    margin : 20
                }}>
                    Drop Down Test            
                </Text>
                
                <DropDownPicker
                items={[
                    {label: 'USA', value: 'usa'},
                    {label: 'India', value: 'ind'},
                    {label: 'UK', value: 'uk'}
                    
                ]}
                defaultValue={this.state.country}
                containerStyle={{height: 40, width : 100}}

                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => this.setState({
                    country: item.value
                })}
            />
            </View>
        )
    }
}

export default Drop;