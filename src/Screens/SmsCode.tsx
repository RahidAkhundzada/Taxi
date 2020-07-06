import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView
} from 'react-native';
import firebase from 'firebase';
import {observer} from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactNative';

import {CountryStore} from '../../Store/CountryStore';
import Modal1 from '../Modals/Modal1';

const firebaseConfig = {
  apiKey: "AIzaSyDZ0Vo9rSZFIfIqn_uyZIEsIxhvacKVKrA",
  authDomain: "taxi-441b9.firebaseapp.com",
  databaseURL: "https://taxi-441b9.firebaseio.com",
  projectId: "taxi-441b9",
  storageBucket: "taxi-441b9.appspot.com",
  messagingSenderId: "551065241187",
  appId: "1:551065241187:web:973bbf4b440830bb6d5a56",
  measurementId: "G-7C7YXPD6WW"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const SmsCode = observer(() => {
  const NewModal = useContext(CountryStore);

  const Modals = () => {
    return <Modal1 />;
  };


  let flag: any = NewModal.Country_Detail.flag;


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.Text1h}>Enter SMS Code</Text>
        {/* <Text style={styles.Text2h}>
          We will send a code to verify your mobile number
        </Text> */}
      </View>

      <View style={styles.TextInput}>
        

        <TextInput
          style={styles.NumberText}
          placeholder="Sms Code"
          keyboardType="phone-pad"
        />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <View style={{justifyContent: 'center'}}>
          <TouchableOpacity style={{marginLeft: '5%', marginBottom: '2%'}}>
           
          </TouchableOpacity>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                width: '90%',
                height: '50%',
                backgroundColor: 'tomato',
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>Contunue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>

      <Modals />
    </SafeAreaView>
  );
});
export default SmsCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Header: {
    width: '90%',
    marginLeft: '5%',
    marginTop: '3%',
  },
  Text1h: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  Text2h: {
    fontSize: 20,
    color: 'gray',
    marginTop: '1%',
  },
  FalgStyle: {
    height: 50,
    width: 50,
  },
  TextInput: {
    flexDirection: 'row',
    marginLeft: '5%',
    marginTop: '8%',
    alignItems: 'center',
  },
  NumberText: {
    borderColor: 'green',
  },
  Btn: {
    flexDirection: 'row',
  },
});
