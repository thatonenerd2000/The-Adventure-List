/**
 * @format
 */
import React, {Component, PropTypes} from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  addIcon: {
    position: 'absolute',
    bottom: 10,
    left: '80%',
  },

  ModalView: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: '90%',
    borderRadius: 10,
  },

  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
});

export default styles;
