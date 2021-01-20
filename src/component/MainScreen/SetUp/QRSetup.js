import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, Button, FlatList } from 'react-native';
import { styles, buttons, heading, textinput } from '../../../common/style';
import Modal from 'react-native-modal';
import { RNCamera } from 'react-native-camera';
import BarCodeScanner from './BarCode';
import {Helper} from '../../../common/helperComponent'

class QRSetup extends Component {
    constructor(props) {
        super(props);
        this.state = { text1: '', photp: false };
        this.onClearClicked = this.onClearClicked.bind(this);
        this.updateState = this.updateState.bind(this);
        this.onSuccessScan = this.onSuccessScan.bind(this);
        this.troubleShootCamera = this.troubleShootCamera.bind(this);
        this.loadScannerRef = this.loadScannerRef.bind(this);
        this.stateUpdater = this.stateUpdater.bind(this);
        this.state = {
            shouldDisplayCamera: false,
            data: [],
            city: '',
            cityName: '',
            isLoading: false,
            list: [],
        };
    }
    // componentDidMount() {
    //     this.getCity();
    // }
    // getCity = async () => {
    //     let listData = await AsyncStorage.getItem(global.globalCityList)
    //     let cityData = JSON.parse(listData)
    //     console.log('QrScanner listData- ', listData)
    //     console.log('cityData - ', cityData)

    //     //  this.setState({list: cityData})
    // }
    // getcityList = async () => {
    //     let listData = await AsyncStorage.getItem(global.globalCityList)
    //     let cityData = JSON.parse(listData)
    //     return <View>
    //         <Text>{JSON.stringify(cityData)}</Text>
    //     </View>
    // }

    //Setting up text
    setText = (text) => {
        this.setState({ city: text })
    }
    getText = () => {
        <View>
            <Text>
                {this.state.text1}

            </Text>
        </View>

    }
    onClick = () => {
        this.setState({
            photo: (!this.state.photo)
        });
    }

    onClearClicked() {
        this.setState({
            name: '',
            id: '',
            location: {},
        });
    }
    updateState(key, value) {
        this.setState({ [key]: value });
    }
    onClickCameraToScanCode() {
        this.setState({ shouldDisplayCamera: true });
    }
    onSuccessScan(scannedData) {
        if (scannedData && scannedData.data) {
            this.setState({
                cityName: scannedData.data,
                shouldDisplayCamera: false,
            });
        } else if (scannedData && scannedData.data === '') {
            alert('Invalid QR Code.');
        } else {
            this.scanner.reactivate();
        }
    }

    troubleShootCamera() {
        // eslint-disable-next-line no-constant-condition
        if (true) {
            // permission granted
            Alert.alert(
                'Troubleshooting Camera',
                'Troubleshooting completed, Please hold the device steadily and try again.',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false },
            );
        }
        if (this.codeScannerRef && this.codeScannerRef) {
            // todo: called RNCamera refresh function
        }
        this.scanner && this.scanner.reactivate();
    }
    loadScannerRef(node) {
        this.scanner = node;
    }
    stateUpdater(newState) {
        this.setState(newState);
    }

    //Set update function for Fetch
    getSetCityName(city) {
        
        this.setState({ cityName: city });
    }
    getCurrentcity = (city) => {
        let { isLoading, list } = this.state;
        this.setState({ isLoading: true });
        let cityList = list;
        console.log('city', city);

        let url =
            'https://api.openweathermap.org/data/2.5/weather?q=' +
            city +
            '&appid=e75f3d4627ca4fed0759a3605e2e27bd';
        fetch(url,
            { 'method': 'GET' })
            .then((res) => res.json())
            .then((responseData) => {
                console.log('responseData ', responseData);
                this.setState({ isLoading: false });
                let data = {
                    cityName: city, temp: responseData.main.temp
                }
                console.log('responseData data', data);
                console.log('responseData cityList before', list);

                cityList = cityList.push(data)
                console.log('responseData cityList after', cityList);
                // this.setState({ list: list })


                // AsyncStorage.setItem(global.globalCityList, JSON.stringify(cityList))
            })
            .catch((error) => {
                this.setState({ isLoading: false });
                console.log(error);
            });
    };
    eachItem(item) {
        return (

            <View style={{borderColor:'green', borderWidth: 1, padding: 10, margin:5, borderRadius:10 }}>
                <Helper
                leftText={'City :'}
                rightText={item.cityName}
                />
                <Helper
                leftText={'Temperature :'}
                rightText={Math.round(item.temp - 273)}
                />
            </View>
            );
    }




    render() {
        var { shouldDisplayCamera, qrcode } = this.state;

        return (
            <View style={{marginTop:Platform.OS=='ios'?40:10}}>
                <Text style={{
                    fontWeight: 'bold', alignSelf: 'center', fontSize: 20, backgroundColor:'#7fffd4'
                }}>
                    QR Code Scanner
                </Text>
                <View style={{ flexDirection: 'row', flext: 1, paddingTop: 20, paddingLeft: 15 }}>
                    <View style={{ flext: 0.5, }}>
                        <Text style={{ fontSize: 20, marginTop: 6 }}>
                            Code
                        </Text>
                    </View>
                    <View style={{ flext: 0.5, marginLeft: 10, marginTop: 2.5, width: '45%', height: '70%' }}>
                        <TextInput style={{ padding: 10, borderWidth: 2, textDecorationColor: 'red' }}
                            placeholder="Enter QR Code "
                            onChangeText={text => this.setState({ cityName: text })}
                            value={this.state.cityName}
                        />
                    </View>

                    <View style={{ flext: 0.5, marginLeft: 10, width: '45%', }}>

                        <TouchableOpacity style={{ borderRadius: 10, backgroundColor: 'black', padding: 0, width: '40%' }}
                            onPress={() => this.onClickCameraToScanCode()}>
                            <View>
                                <View style={{ alignItems: 'center', padding: 10 }}>
                                    <Text style={{ color: 'white' }}> Scan </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        {shouldDisplayCamera && (
                            <Modal
                                animationType="slide"
                                transparent={false}
                                visible={shouldDisplayCamera} 
                                onRequestClose={() => {
                                    this.setState({ shouldDisplayCamera: !shouldDisplayCamera });
                                }}>
                                <BarCodeScanner
                                    onSuccessScan={this.onSuccessScan}
                                    troubleShootCamera={this.troubleShootCamera}
                                    ref={(codeScannerRef) => {
                                        this.codeScannerRef = codeScannerRef;
                                    }}
                                    scanner={this.loadScannerRef}
                                    stateUpdater={this.stateUpdater}
                                    state={this.state}
                                />
                            </Modal>
                        )}
                    </View>
                </View>
                {qrcode && <Text>{'QRcode   ' + this.state.qrcode + ' ' + this.state.getText}</Text>}
                <View style={{ marginTop: 30, alignSelf: 'center', padding: 20 }}>
                    <View style={{padding:20}}>
                        <Button title="Find Temperature" onPress={() => { this.getCurrentcity(this.state.cityName) }}></Button>
                    </View>
                    {/* <View>
                        <Text>{JSON.stringify(this.state.list)}</Text>
                    </View> */}
                </View>
                <View>

                <FlatList
                    data={this.state.list}
                    renderItem={({ item }) => (
                        this.eachItem(item)
                    )}
                    keyExtractor={(item) => item.cityName}
                />
                </View>
                <View style={{padding:20}}>
                    <TouchableOpacity
                            style={{
                                alignSelf:'center', padding:10, borderRadius: 10, 
                                backgroundColor: 'green'
                                }}
                                onPress={() => { this.props.navigation.goBack() }}
                        >
                        <Text style={{ fontSize: 16 ,color:'white', fontWeight:'bold', alignSelf:'center'}}>
                            Back to SetUp Page
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default QRSetup;