import React,{Component} from 'react';
import {View,Text} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 

class reg extends Component{
  functionRadio = () => {
    var radio_props = [
        {label: 'Male', value: 0 },
        {label: 'Female', value: 1 }
        
      ];
    return (
      <View>

        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress ={(value) => {this.setState({value:value})}}
        />
      </View>
    ); 
  }
  render(){
      return(
      <View>
          {this.functionRadio()}
      </View>
      )
  }
}
export default reg;