/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef, useEffect} from 'react';
import {Animated, Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';


const Opening = () =>{
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    }, 0);
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    }, 2000);
    setTimeout(() => {
      navigation.navigate('Home');
    }, 4000);
  }, [fadeAnim, navigation]);



  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim, // Bind opacity to animated value
          },
        ]}>

        <Text style={styles.fadingText}>Taxi App</Text>
      </Animated.View>
    </View>
  );
};


export default Opening;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  fadingText: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: 'navy',
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 16,
  },
});
