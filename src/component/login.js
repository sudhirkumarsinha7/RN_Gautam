import React,{Component} from 'react';
import {Button, Text, View,TextInput,Alert} from 'react-native';

class log extends Component {
  constructor(props) {
    super(props);
    this.state = {userID: '', password: ''};
  }
  setUser = (text) =>{
      this.setState({userID:text})
  }
  setPass = (text) =>{
    this.setState({password:text})
  } 

  getUser = () =>{
    alert('Your User ID is: '+this.state.userID + '\n'+ 'Your password is: '+this.state.password)
  }
  getReg=()=> {
    this.setState({userID:'',password:''})
    alert('Cancelled Successfully')
  }
  render(){
  return (
    <View>
      <Text style = {{
        fontSize : 30,
         alignSelf: "center"
      }}>Ideabytes
      </Text>

      <Text style = {{
       alignSelf: "center",
        color : "orange",
        margin : 5
      }}>Innovation is Business
      </Text>


      <View 
      style = {{
        marginTop : 50
      }}>
      <Text style = {{fontSize : 20,
          }}>  User ID </Text>
        <TextInput
          style = {{
          paddingHorizontal : 10,
          margin:10,
          borderWidth : 1.5,
          borderColor : "#00716F",
          borderRadius : 23,
          paddingVertical : 3,
          fontSize : 15
          }}
          placeholder="Enter User ID "
          value = {this.state.userID}
          onChangeText={text => this.setUser(text)}
        />
      </View>
      <View 
          style = {{
            marginTop : 20
          }}>
          
          <Text style = {{fontSize : 20,
              }}>  Password </Text>
            <TextInput
              style = {{
              paddingHorizontal : 10,
              margin:10,
              borderWidth : 1.5,
              borderColor : "#00716F",
              borderRadius : 23,
              paddingVertical : 3,
              fontSize : 15
              }}
              placeholder="Enter Password "
              onChangeText={text => this.setPass(text)}
              value = {this.state.password}
            />
      </View>
      <View
       style = {{
        marginTop : 50,
        marginLeft : 30,
        marginRight : 180,
          }}
          >
          <Button
            title="Log in" 
            onPress = { this.getUser}
          />
      </View>

      <View
      style = {{
      marginTop : -35,
      marginLeft : 180,
      marginRight : 50,
      }}>
          <Button onPress={()=>this.getReg()}
            title="Cancel" 
            color="#F44335"
          />
      </View>
    </View>
  );
  }
}

export default log;