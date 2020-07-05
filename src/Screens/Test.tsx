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

class Test extends React.Component {
    renderDrawer = () => {
      return (
        <View>
          <Text>I am in the drawer!</Text>
        </View>
      );
    };
  
    render() {
      return (
        <View style={{flex: 1}}>
          <DrawerLayout
            drawerWidth={200}
            drawerPosition={DrawerLayout.positions.Right}
            drawerType='front'
            drawerBackgroundColor="#ddd"
            renderNavigationView={this.renderDrawer}>
            <View>
              <Text>
                Hello, it's me
              </Text>
            </View>
          </DrawerLayout>
        </View>
      );
    }
  }

  export default Test;