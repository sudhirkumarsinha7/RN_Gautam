import React,{Component} from 'react';
import {TextInput, StyleSheet, Button, View, Text, Alert,TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

class Reg extends Component{
    constructor(props) {
        super(props);
        this.state = {
            check: false, check1 : false,radioSelected: 1,value :0
        }
      }
      checkBox_Test = (id) => {
        this.setState((prevState) => ({ check: !prevState.check }));
      }
      checkBox_Test1 = (id) => {
        this.setState((prevState) => ({ check1: !prevState.check1 }));
      }

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
              onPress ={(value) => {this.setState({value:value})}} style = {{
                marginLeft :25
              }}
              //formHorizontal = {false}
            />
          </View>
        ); 
      }




      
  render(){

    return(
      <View >
        <Text style = {{
          alignSelf:'center',
          fontSize : 30,
          
        }}>Register
        </Text>

        <Text style = {{
          alignSelf:'center',
          fontSize : 15,
        }}>Please fill in this form to create an account.
        </Text>

        <View style = {{marginTop : 30, marginLeft : 15}}>
          <Text style = {{
          fontSize : 20,
          marginLeft : 10
          }}>First Name
          </Text>

          <TextInput
            style = {{
              paddingHorizontal : 20,
              paddingVertical : 3,
              marginLeft : 10,
              marginRight:210,
              borderWidth : 2,
              borderColor : "#00716F",
             
            }}
             placeholder = ""
          />

            <Text style = {{
              marginTop : -64.5,
              fontSize : 20,
              marginLeft : 200,
              marginRight : 10
              }}>Last Name
            </Text>

          <TextInput
            style = {{
             
              paddingHorizontal : 20,
              paddingVertical : 3,
              marginLeft : 200,
              marginRight:10,
              borderWidth : 2,
              borderColor : "#00716F"
            }}
          />

          <Text style = {{
            marginTop : 10,
            fontSize : 20,
          
            marginLeft : 10
          }}>Email ID
          </Text>

          <TextInput
            style = {{
              paddingHorizontal : 20,
              paddingVertical : 3,
              marginLeft : 10,
              marginRight:8,
              borderWidth : 2,
              borderColor : "#00716F",
             
            }}
          />

        <Text style = {{
            marginTop : 10,
            fontSize : 20,
            
            marginLeft : 10
          }}>Mobile Number
        </Text>

        <TextInput
            style = {{
              paddingHorizontal : 20,
              paddingVertical : 3,
              marginLeft : 10,
              marginRight:8,
              borderWidth : 2,
              borderColor : "#00716F",
             
            }}
        />
        </View>

        <View>    
            <Text style = {{
                marginTop : 10,
                fontSize : 20,
                marginLeft : 25
            }}>Intersted In : 
            </Text>
            
            <View>
           <CheckBox
              value = { this.state.check }
              onChange = { this.checkBox_Test }
              style = {{marginLeft : 20, marginTop : 0,fontSize : 20}}
           />
            <Text style = {{marginLeft : 50, marginTop : -30,fontSize : 20}} >Software Engineering</Text>

            <CheckBox
              value = { this.state.check1 }
              onChange = { this.checkBox_Test1 }
              style = {{marginLeft : 20, marginTop : 0,fontSize : 20}}
           />
            <Text style = {{marginLeft : 50, marginTop : -30,fontSize : 20}} >Software Tester</Text>
            
            </View>


            <View>
              <Text style = {{
                  marginTop : 10,
                  fontSize : 20,
                  marginLeft : 25
              }}>Gender 
              </Text>
            
             {this.functionRadio()}



            </View>


        </View>

      </View>
    );
  }
}
export default Reg;