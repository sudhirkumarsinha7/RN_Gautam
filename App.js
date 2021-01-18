import React, { Component } from 'react';
import { Text, ScrollView, } from 'react-native';
import Login from "./src/component/login";
// import {tankData} from "./src/common/defaultvalue";
import Route from "./src/component/MainScreen/BottomNavigator";
// import Route from "./src/component/MainScreen/SetUp/QRCode"

import AsyncStorage from "@react-native-async-storage/async-storage";



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    global.globalCityList = 'globalCityList';

  }
  render() {

    return (
      <Route />
    )
  }
}
export default App;

