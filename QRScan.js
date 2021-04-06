import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import {Text, Linking, View, Alert} from 'react-native'
const QRScan = () => {

    const ifScanned=(e)=>{
        Linking.openURL(e.data).catch(err=> Alert.alert('Invalid QR Code',e.data))
      }

    return(
        <View>
            <QRCodeScanner
            onRead={ifScanned}
            permissionDialogMessage='Permission to access Camera'
            showMarker={true}
            //bottomContent={<Text style={{color:'#FFF'}}>Scan QR CODE</Text>}
            markerStyle={{borderRadius:10}}
            containerStyle={{backgroundColor:'#FFF'}}
            reactivateTimeout={10}
            reactivate={true}
            
            />
        </View>
    )
}
export default QRScan
