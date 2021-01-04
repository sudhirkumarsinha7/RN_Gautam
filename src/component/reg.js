import React,{Component} from 'react';
import {TextInput, Linking, Button, View, Text,TouchableOpacity, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm from 'react-native-simple-radio-button';

class Reg extends Component{
    constructor(props) {
        super(props);
        this.state = {
            check: false, check1 : false,radioSelected: 1,value :0,
            country : 'uk'
        }
      }
      getUser = () =>{
        alert('Registered Sucessfully');
      }
      getCancel = () =>{
        alert('Cancelled');
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
          <ScrollView>
    
            <RadioForm
              radio_props={radio_props}
              initial={0}
              onPress ={(value) => {this.setState({value:value})}} style = {{
                marginLeft :40, marginTop:8
              }}
            />
          </ScrollView>
        ); 
      }
      
  render(){

    return(
      <ScrollView >
        <Text style = {{
          alignSelf:'center',
          fontSize : 30,
          marginTop : 25
          
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
          }}>Full Name
          </Text>

          <TextInput
            style = {{
              paddingHorizontal : 20,
              paddingVertical : 3,
              marginLeft : 10,
              marginRight:10,
              borderWidth : 2,
              borderColor : "#00716F",
             
            }}
             placeholder = ""
          />

            <Text style = {{
              marginTop : 10,
              fontSize : 20,
              marginLeft : 10,
              marginRight : 10
              }}>Password
            </Text>
              <Text>
                {this.props.Gautam}
              </Text>
          <TextInput
            style = {{
             
              paddingHorizontal : 20,
              paddingVertical : 3,
              marginLeft : 10,
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
              style = {{marginLeft : 30, marginTop : 10,fontSize : 20}}
           />
            <Text style = {{marginLeft : 70, marginTop : -27,fontSize : 15}} >Software Engineering</Text>

            <CheckBox
              value = { this.state.check1 }
              onChange = { this.checkBox_Test1 }
              style = {{marginLeft : 30, marginTop : 15,fontSize : 20}}
           />
            <Text style = {{marginLeft : 70, marginTop : -27,fontSize : 15, marginBottom : 10}} >Software Tester</Text>
            
            </View>


            <View>
            
             <Text style = {{
                    fontSize : 20,
                    marginLeft : 25,
                    marginTop : 15
                }}>
                    Select Country            
                </Text>
                
                <DropDownPicker style={{marginLeft:20, marginTop: 10}}

                items={[
                    {label: 'USA', value: 'usa'},
                    {label: 'India', value: 'ind'},
                    {label: 'UK', value: 'uk'},
                ]}
                defaultValue={this.state.country}
                containerStyle={{height: 40, width : 150}}
                style={{marginLeft:25, marginTop: 10}}

                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: 'white'}}
                onChangeItem={item => this.setState({
                    country: item.value
                })}
            />

            <View>
            <Text style = {{
                  marginTop : 10,
                  fontSize : 20,
                  marginLeft : 25
              }}>Gender 
              </Text>
            
             {this.functionRadio()}

            </View>
            <View style = {{marginTop : 30, marginLeft: 100, marginRight : 100}}>
              <Button
                title="Register" 
                onPress = { this.getUser}
              />
            </View>
            
            <View style = {{marginTop : 15, marginBottom:10, marginLeft: 100, marginRight : 100}}>
              <Button
                title="Cancel" 
                onPress = { this.getCancel}
              />
            </View>

            </View>
        </View>

      </ScrollView>
    );
  }
}
export default Reg;