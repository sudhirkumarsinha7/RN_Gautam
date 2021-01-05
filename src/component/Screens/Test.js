import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 

class Test extends Component{
  
  render(){
      return(
      <View>
         <Button title="tes1" onPress={()=>{this.props.navigation.navigate('Test1')}}></Button>
         <Button title="Test2" onPress={()=>{this.props.navigation.navigate('Test3')}}></Button>
         <Button title="Test3" onPress={()=>{this.props.navigation.navigate('Test3')}}></Button>
         <Button title="Test4" onPress={()=>{this.props.navigation.navigate('Test4')}}></Button>
         <Button title="Test5" onPress={()=>{this.props.navigation.navigate('Test5')}}></Button>
      </View>
      )
  }
}
export default Test;