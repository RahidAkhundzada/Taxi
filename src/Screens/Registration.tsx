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
import {observer} from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactNative';

import {CountryStore} from '../../Store/CountryStore';
import Modal1 from '../Modals/Modal1';

const Registration = observer(() => {
  const NewModal = useContext(CountryStore);

  const Modals = () => {
    return <Modal1 />;
  };


  let flag: any = NewModal.Country_Detail.flag;


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.Text1h}>Enter your number</Text>
        <Text style={styles.Text2h}>
          We will send a code to verify your mobile number
        </Text>
      </View>

      <View style={styles.TextInput}>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => NewModal.ModalOpen()}>

          <Image source={flag} />

          <Image
            source={require('../Image/down.png')}
            style={{width: 10, height: 10, margin: '1%'}}
          />

          <Text>{NewModal.Country_Detail.alpha3Code}</Text>
          <Text style={{marginLeft: 5, color: 'red'}}>
            +{NewModal.Country_Detail.callingCodes}
          </Text>
        </TouchableOpacity>

        <TextInput
          style={styles.NumberText}
          placeholder="Phone Number"
          keyboardType="phone-pad"
        />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <View style={{justifyContent: 'center'}}>
          <TouchableOpacity style={{marginLeft: '5%', marginBottom: '2%'}}>
            <Text style={{color: 'tomato'}}>Login with Facebook</Text>
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
export default Registration;

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
