import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  FlatList,
    Keyboard,
    SafeAreaView
} from 'react-native';
import {observer} from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactNative';

import {CountryStore} from '../../Store/CountryStore';
import {Width, Height} from '../Const/Consts';
import {Data} from '../Const/Data2';

const Modal1 = observer(() => {
  const NewModal = useContext(CountryStore);
  const [dataSource, setdataSource] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    SearchbyName('');
  }, []);

  const SearchbyName = (text: any) => {
    const newData: any = Data.filter((item: any) => {
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setdataSource(newData);
    setText(text);
  };

  const renderItem = (item: any) => {
      ////let link:string=require(`${item.item.flag}`);
    let link1 = require('../Image/Flags/az.png');
    let result: any = item;

    return (
      <TouchableOpacity
        style={{flexDirection: 'row', height: 40}}
        onPress={() => NewModal.SelectedItem(result)}>
        <View style={{marginLeft: '2%', width: '10%'}}>
          <Image source={item.item.flag} />
        </View>

        <View style={{marginLeft: '5%', width: '60%'}}>
          <Text>{item.item.name}</Text>
        </View>
        <View style={{marginLeft: 10}}>
          <Text>+{item.item.callingCodes[0]}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <Modal animationType="fade" visible={NewModal.Modal}>
        <SafeAreaView style={{flexDirection: 'row', margin: 5}}>
          <View style={{width: Width / 15}}>
            <TouchableOpacity onPress={() => NewModal.ModalOpen()}>
              <Image
                source={require('../Image/Xclose.png')}
                style={{height: Width / 15, width: Width / 15}}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: (Width * 14) / 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20}}>Select country code</Text>
          </View>
        </SafeAreaView>

        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
          <View
            style={{
              flexDirection: 'row',
              borderColor: 'green',
              borderWidth: 0.5,
              margin: 10,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{flex: 1, marginLeft: 2}}>
              <TouchableOpacity>
                <Image
                  source={require('../Image/search.png')}
                  style={{height: 30, width: 30}}
                />
              </TouchableOpacity>
            </View>

            <View style={{flex: 6}}>
              <TextInput
                placeholder="Search for a country"
                autoFocus={false}
                onChangeText={text => SearchbyName(text)}
                value={text}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
        <FlatList
          data={dataSource}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </Modal>
    </SafeAreaView>
  );
});
export default Modal1;
const styles = StyleSheet.create({});
