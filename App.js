import React,{Component} from 'react';
import {Button, Text, View,TextInput,ScrollView} from 'react-native';
import Login from "./src/component/login";
import Regi from "./src/component/reg";

class App extends Component{
  render(){
    return(
      <ScrollView>
        <Regi
        Gautam = {'Gupta'}/>
        <Regi
        Gautam = {'Gupta'}/>
      </ScrollView>
        
    );
  }
}

export default App;