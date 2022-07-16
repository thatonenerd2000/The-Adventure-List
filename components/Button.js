/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useRef, useState} from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity style={{width: '90%'}} onPress={props.onPress}>
      <View
        style={[
          props.style,
          styles.buttonStyle,
          {backgroundColor: props.color},
        ]}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 2,
  },
});

export default Button;
