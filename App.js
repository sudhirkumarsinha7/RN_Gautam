import React,{Component} from 'react';
import {Button, Text, View,TextInput,Alert} from 'react-native';
import Login from "./src/component/login";
import Regi from "./src/component/dropdowntest";

class App extends Component{
  render(){
    return(
      <View>
        <Regi/>
      </View>
        
    );
  }
}

export default App;