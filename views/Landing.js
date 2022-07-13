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
  Easing
} from 'react-native';

//STYLE IMPORT
import style from "../style";
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
      <View style={styles.landing}>
        <ScrollView style={{width:"100%"}}>
          <Animated.View style={{
            left: fadeLeft,
          }}>
            <Card name="Travel" image={require('../media/travelCard.jpg')} onPress={()=>{navigation.navigate('Travel')}}/>
            <Card name="Food" image={require('../media/foodCard.jpeg')}/>
            <Card name="Activity" image={require('../media/activityCard.jpg')}/>
            <MaterialIcons name="menu" size={30} style={{color:"white"}}></MaterialIcons>
          </Animated.View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  landing:{
      flex: 1,
      flexDirection: "column",
      paddingTop: 50,
      alignItems: 'center',
      backgroundColor: '#1D1C1A',
  }
});

export default Landing;
