import React, {useRef,useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
  StyleSheet,
  Modal,
  SafeAreaView,
  Keyboard,
  Platform
} from 'react-native';
import MapView , { PROVIDER_GOOGLE } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geolocation from '@react-native-community/geolocation';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';

import BottomDrawer from "rn-bottom-drawer";
import {Width, Height} from '../Const/Consts';

const Home = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const ViewRef=useRef()

  const [latitude, setlatitude] = useState(0)
  const [longitude, setlongitude] = useState(0)

  

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver:true
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver:true
    }).start();
  };
  
  const renderContent = () => {
    return (
      <View>
        <View ref={ViewRef}>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Image source={require('../Image/minus.png')} />
        </TouchableOpacity>
        </View>
        <Text style={{marginLeft: (Width * 0.1) / 2,fontSize:Width/25}}>Nice to see you!</Text>
        <Text
          style={{
            fontSize: Width /15,
            fontWeight: 'bold',
            marginLeft: (Width * 0.1) / 2,
          }}>
          Where are you going?
        </Text>
        
     <View
          style={{
            alignItems: 'center',
            marginLeft: (Width * 0.1) / 2,
            flexDirection: 'row',
            width: '90%',
            borderWidth: 0.5,
            borderColor: 'green',
            height: 40,
            borderRadius: 5,
            marginTop: 5,
          }}>
          <Image
            source={require('../Image/search.png')}
            style={{marginLeft: 2}}
          />
         

          <TextInput style={{width: '90%'}} 
          placeholder="Search destination"
          onFocus={()=>{}}
          />

        </View> 

        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim, // Bind opacity to animated value
            },
          ]}>
          <TouchableOpacity
            disabled={true}
            style={{
              marginTop: 25,
              height: Height * 0.08,
              borderWidth: 0.5,
              borderColor: 'grey',
              justifyContent: 'center',
            }}>
            <Text style={{marginLeft: (Width * 0.1) / 2, fontSize:Width/20}}>
              Add destination leter
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={true}
            style={{
              marginTop: 20,
              height: Height * 0.08,
              flexDirection: 'row',
            }}>
            <Image source={require('../Image/home.png')} />
            <Text style={{marginLeft: (Width * 0.1) / 2,  fontSize:Width/20}}>
              Add Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={false}
            style={{
              marginTop: 20,
              height: Height * 0.08,
              flexDirection: 'row',
            }}>
            <Image source={require('../Image/work.png')} />
            <Text style={{marginLeft: (Width * 0.1) / 2,  fontSize:Width/20}}>
              Add Work
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  };

  const COORDINATE1 = [35.67737855391474, 139.76531982421875];
const COORDINATE2 = [35.67514743608467, 139.76806640625];

  return (
  

      <SafeAreaView style={{flex:1}}>
        
        <MapView
        provider="google"
          style={{height: Height*0.7}}
          initialRegion={{
            latitude: 39.0341,
            longitude: 48.6589,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}/>
            
         
      
     <BottomDrawer
        
        containerHeight={Height * 0.8}
        offset={0}
        roundedEdges={true}
        downDisplay={Height * 0.55}
        onExpanded={() => {
          fadeIn();
        }}
        onCollapsed={() => {
          fadeOut();
        }}
        startUp={false}>
        {renderContent()}
      </BottomDrawer> 
      </SafeAreaView>
      
    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  fadingText: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 16,
  },
});

export default Home;
