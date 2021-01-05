import React,{Component} from 'react';
import {View,Text} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 import {dummyData,dummyData1} from '../../common/defaultvalue'

class Test1 extends Component{
  
  render(){
    //   console.log('dummyData ', $dummyData)
      console.log('dummyData JSON '+ JSON.stringify(dummyData))
      return(
        <View style={{flex:10,flexDirection:'column',borderWidth:1,padding:20}}>

                <View style={{flex:1,borderWidth:1,padding:20}}>

                {/* <Text>{JSON.stringify(dummyData)}</Text> */}
                </View>
                <View style={{flex:1,borderWidth:1}}>

                <Text>{JSON.stringify(dummyData)}</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',borderWidth:1,margin :20,}}>
                <View style={{flex:1,borderWidth:1}}>

<Text>{JSON.stringify(dummyData)}</Text>
</View>
<View style={{flex:1,borderWidth:1}}>

                <Text>{JSON.stringify(dummyData)}</Text>
                </View>
                <View style={{flex:1,borderWidth:1}}>

                <Text>{JSON.stringify(dummyData)}</Text>
                </View>
                </View>
                
        </View>
      )
  }
}
export default Test1;