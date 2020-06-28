import React, {useContext} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/Screens/Home';
import Opening from './src/Screens/Opening';
import Registration from './src/Screens/Registration';
import {observer} from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactNative';

import {CountryStore} from './Store/CountryStore';

const Stack1 = createStackNavigator();
const Stack2 = createStackNavigator();
const Stack3 = createStackNavigator();

const StackApp1 = () => {
  return (
    <Stack2.Navigator>
      <Stack1.Screen
        name="Opening"
        component={Opening}
        options={{headerShown: false}}
      />
    </Stack2.Navigator>
  );
};
const StackApp2 = () => {
  return (
    <Stack3.Navigator>
      <Stack3.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack3.Navigator>
  );
};

const App = observer(() => {
  const countStore = useContext(CountryStore);

  return (
    <NavigationContainer>
      <Stack1.Navigator>
        <Stack1.Screen
          name="StackApp2"
          component={StackApp2}
          options={{headerShown: false}}
        />
      </Stack1.Navigator>
    </NavigationContainer>
  );
});
export default App;

const styles = StyleSheet.create({});
