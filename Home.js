import React,{useState,useEffect} from 'react'
import { Button, View, StyleSheet, Text, ScrollView} from 'react-native';
import GeoLocation from '@react-native-community/geolocation'
import Geocoder from 'react-native-geocoding'


const Home = ({navigation}) =>
{


    //console.warn('Home Runs here')
    const [lat,setlat] = useState(0)
    const [long,setlong] = useState(0)
    const [islatlong,setislatlong] = useState(false)
    const [address,setaddress] = useState('')
    //Geocoder.init(apikey)
    const latlong = ()=>
    {
        GeoLocation.getCurrentPosition(data => 
            {
        setlat(data.coords.latitude)
        setlong(data.coords.longitude)
        setislatlong(!islatlong)
        })
    }
    // Geocoder.from(lat,long)
    //     .then(json=>{
    //         json.results[0].address_components.forEach((value,index)=>{
    //             setaddress(json.results[0].formatted_address)
    //         })
    //     })
    return(

        <View style={styles.container}>
            <Button onPress={()=>navigation.navigate('QR Scanner')} title="Scan QR Code"/>
            <Text/>
            <Button title={islatlong?'Hide Location': 'Show Location'} onPress={()=>latlong()} ></Button>
            <Text/>
            <Text style={{fontSize:20,fontWeight:'bold'}}>{islatlong?`Latitude:  "${lat}"\nLongitude:  "${long}"`:' '}</Text>
            <Text style={{fontSize:20,fontWeight:'bold'}}>{islatlong?`Formatted Address:  "${address}"`:' '}</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    }
  })

  export default Home