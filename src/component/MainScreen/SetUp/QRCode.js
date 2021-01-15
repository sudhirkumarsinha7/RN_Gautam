import React, {Component} from 'react';
import {View, Modal, TouchableOpacity, Alert, Text} from 'react-native';
import BarCodeScanner from './BarCode';
import {Icon,} from 'native-base';
class qrCodeScanner extends Component {
  constructor(props) {
    super(props);
    this.onClearClicked = this.onClearClicked.bind(this);
    this.updateState = this.updateState.bind(this);
    this.onSuccessScan = this.onSuccessScan.bind(this);
    this.troubleShootCamera = this.troubleShootCamera.bind(this);
    this.loadScannerRef = this.loadScannerRef.bind(this);
    this.stateUpdater = this.stateUpdater.bind(this);
    this.state = {
      shouldDisplayCamera: false,
    };
  }
  onClearClicked() {
    this.setState({
      name: '',
      id: '',
      location: {},
    });
  }
  updateState(key, value) {
    this.setState({[key]: value});
  }
  onClickCameraToScanCode() {
    this.setState({shouldDisplayCamera: true});
  }
  onSuccessScan(scannedData) {
    if (scannedData && scannedData.data) {
      this.setState({
        qrcode: scannedData.data,
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
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
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
  render() {
    var {shouldDisplayCamera, qrcode} = this.state;
    return (
      <View style={{flext:0.5, width:'55%',}}>
        <TouchableOpacity style={{borderRadius: 10, backgroundColor: 'black', padding: 0, width:'30%'}}
        onPress={() => this.onClickCameraToScanCode()}>
          <View>
            <View style={{alignItems:'center', padding:10}}>
              <Text style={{color:'white'}}> Scan </Text>
            </View>
          </View>
        </TouchableOpacity>
        {shouldDisplayCamera && (
          <Modal
            animationType="slide"
            transparent={false}
            visible={shouldDisplayCamera} // todo: useless prop: remove after checking
            onRequestClose={() => {
              this.setState({shouldDisplayCamera: !shouldDisplayCamera});
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
        {qrcode && <Text>{'QRcode   ' + this.state.qrcode}</Text>}
      </View>
    );
  }
}

export default qrCodeScanner;