/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useRef} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Animated,
  Easing,
  TouchableOpacity
} from 'react-native';

//STYLE IMPORT
import style from "../style"; 

//ICON IMPORT
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//COMPONENT IMPORT
import Card from '../components/card';

const Landing: () => Node = ({navigation}) => {
  //Animations
  const fadeLeft = useRef(new Animated.Value(100)).current

  useEffect(()=>{
    // Animations
    // Fade Left
    Animated.timing(
      fadeLeft,{
        toValue: 0,
        duration: 500,
      }
    ).start()
  },[fadeLeft])
  
  return (
    <>
      <ScrollView contentContainerStyle={styles.landing}>
        <Animated.View style={{
          left: fadeLeft,
        }}>
          <Card name="Travel" image={require('../media/travelCard.jpg')} onPress={()=>{navigation.navigate('Travel')}}/>
          <Card name="Food" image={require('../media/foodCard.jpeg')}/>
          <Card name="Activity" image={require('../media/activityCard.jpg')}/>
        </Animated.View>
      </ScrollView>
      <TouchableOpacity style={style.addIcon}>
        <MaterialIcons name="add-circle" size={80} style={{color:"white"}}></MaterialIcons>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  landing:{
      flexDirection: "column",
      alignItems: 'center',
      backgroundColor: '#1D1C1A',
      minHeight: "100%",
  }
});

export default Landing;
