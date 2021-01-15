import React , {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {Button, Icon, Text} from 'native-base';
import QRCodeScanner from 'react-native-qrcode-scanner';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

class BarCodeScanner extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  refreshCamera() {
    this.setState({});
  }

  render() {
    var {
      onSuccessScan,
      troubleShootCamera,
      scanner,
      stateUpdater,
      state,
    } = this.props;
    var notAuthorizedView = (
      <View
        style={{
          flex: 3,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomWidth: 0.5,
          paddingTop: 240,
          paddingBottom: 240,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
          }}>
          Camera not authorized
        </Text>
      </View>
    );
    return (
      <QRCodeScanner
        showMarker={true}
        onRead={(e) => onSuccessScan(e)}
        refreshCamera={() => this.refreshCamera()}
        ref={(node) => {
          scanner(node);
        }}
        cameraStyle={{width: WIDTH * 0.9, height: HEIGHT * 0.65}}
        cameraProps={{notAuthorizedView}}
        topContent={
          <View>
            <Button
              style={{flex: 1}}
              transparent
              onPress={() =>
                stateUpdater({shouldDisplayCamera: !state.shouldDisplayCamera})
              }>
            </Button>
            <Text style={{alignSelf:'center', fontSize:20, padding:20, color:'green'}}>QR / Barcode Scanner</Text>
          </View>
        }
        bottomContent={
          <View style={{...styles.padding5, ...styles.directionRow}}>
            <Text style={{color: 'grey'}}>Trouble Scanning the code? </Text>
            <TouchableOpacity
              transparent
              onPress={() => {
                troubleShootCamera();
              }}
              info>
              <Text style={{color: 'blue'}}>Click Here</Text>
            </TouchableOpacity>
          </View>
        }
      />
    );
  }
}

export default BarCodeScanner;

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  directionRow: {
    flexDirection: 'row',
    width:'80%'
  },
  topTextStyles: {
    flex: 5,
    fontSize: 22,
  },
});