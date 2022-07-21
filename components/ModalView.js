import React, {useEffect, useRef, useState} from 'react';
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
  TouchableOpacity,
  Platform,
  Modal,
  TextInput,
} from 'react-native';

//STYLE IMPORT
import style from '../style';

const ModalView = props => {
  return (
    <View style={style.centerView}>
      <Modal animationType="fade" transparent={true} visible={props.visible}>
        <View style={style.overlay}></View>
        <View style={style.centerView}>
          <View style={style.ModalView}>{props.children}</View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalView;
