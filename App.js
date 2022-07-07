/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

//STYLE IMPORT
import style from "./style";

//COMPONENT IMPORT
import Card from './components/card';

const App: () => Node = () => {
  return (
    <>
      <View id="landing" style={style.landing}>
        <ScrollView style={{width:"100%"}}>
          <Card name="Travel" image={require('./media/travelCard.jpg')}/>
          <Card name="Food" image={require('./media/foodCard.jpeg')}/>
          <Card name="Activity" image={require('./media/activityCard.jpg')}/>
          <Card name="Whats next?" image={require('./media/addCard.jpg')}/>
        </ScrollView>
      </View>
    </>
  );
};

export default App;
