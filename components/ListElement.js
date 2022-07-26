/**
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
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';

//STYLE IMPORT
import style from '../style';

const ListElement: () => Node = props => {
  return (
    <>
      <View style={styles.MainView}>
        <TouchableOpacity onPress={props.onPress}>
          <ImageBackground style={styles.bgImage} source={props.locationImage}>
            <View
              style={
                props.completed
                  ? styles.CompleteOverlay
                  : styles.InCompleteOverlay
              }></View>
            <Text
              style={
                props.completed
                  ? styles.completeListText
                  : styles.inCompleteListText
              }>
              {props.locationName.toUpperCase()}
            </Text>
            <Text
              style={props.completed ? styles.exploreText : {display: 'none'}}>
              ~Explored~
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  MainView: {
    width: '100%',
  },
  bgImage: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completeListText: {
    fontFamily: 'Arima',
    fontSize: 30,
    letterSpacing: 10,
    borderColor: 'white',
    borderWidth: 2,
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  inCompleteListText: {
    fontFamily: 'Arima',
    fontSize: 30,
    letterSpacing: 10,
    borderColor: 'white',
    borderWidth: 2,
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  InCompleteOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(128, 0, 32,0.5)',
  },
  CompleteOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  exploreText: {
    fontFamily: 'Arima',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
  },
});

export default ListElement;
