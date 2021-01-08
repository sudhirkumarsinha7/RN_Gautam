import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import Login from "./src/component/login";
// import {tankData} from "./src/common/defaultvalue";
import Route from "./src/component/MainScreen/BottomNavigator";


const App = () => {
  return (
    <Route />
  )
}
export default App;

// var a = tankData.data.assets
// var b = a.map(each=>{
//     return each.asset_id
// })
// export default class App extends Component {
//   render(){
  
//     return(
//       <ScrollView>
//         <Text>
//           {JSON.stringify(b)}
//         </Text>
//       </ScrollView>
//     )
//   }

// }
