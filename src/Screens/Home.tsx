/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {useRef} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
  StyleSheet,
  Modal,
} from 'react-native';
import MapView from 'react-native-maps';
import BottomDrawer from 'rn-bottom-drawer';
import {Width, Height} from '../Const/Consts';

const Home = () => {
  console.log(Height);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
    }).start();
  };

  const renderContent = () => {
    return (
      <View>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Image source={require('../Image/minus.png')} />
        </TouchableOpacity>

        <Text style={{marginLeft: (Width * 0.1) / 2}}>Nice to see you!</Text>
        <Text
          style={{
            fontSize: 25,
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
          <TextInput style={{width: '90%'}} />
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
              marginTop: 20,
              height: Height * 0.08,
              borderWidth: 0.5,
              borderColor: 'grey',
              justifyContent: 'center',
            }}>
            <Text style={{marginLeft: (Width * 0.1) / 2, fontSize: 16}}>
              Add destination leter
            </Text>
          </TouchableOpacity>
        </Animated.View>


      </View>
    );
  };

  return (
    <>
      <MapView
        style={{flex: 0.7}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <BottomDrawer
        containerHeight={Height * 0.8}
        offset={50}
        downDisplay={Height * 0.57}
        onExpanded={() => {
            fadeIn();
        }}
        onCollapsed={() => {
            fadeOut();
        }}
        startUp={false}>
        {renderContent()}
      </BottomDrawer>

    </>
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
    backgroundColor: 'powderblue',
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
