/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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

import ImagePicker from 'react-native-image-crop-picker';

//FIREBASE
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';

//STYLE IMPORT
import style from '../style';

//ICON IMPORT
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//COMPONENT IMPORT
import Card from '../components/card';
import Button from '../components/Button';

const Landing: () => Node = ({navigation}) => {
  //Firebase
  const dbRef = database().ref('adventure_lists/').push();
  const storageRef = storage();
  const storageKey = dbRef.key;

  //Modal States
  const [modalVisible, setModalVisible] = useState(false);
  const [newAdventureText, setNewAdventureText] = useState(
    'Start a new adventure',
  );
  newAdventureText === '' ? setNewAdventureText('Start a new adventure') : null;
  const [newAdventureImage, setNewAdventureImage] = useState('not_available');

  //Animations
  const fadeLeft = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    // Animations
    // Fade Left
    Animated.timing(fadeLeft, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeLeft]);

  return (
    <>
      <ScrollView contentContainerStyle={styles.landing}>
        <Animated.View
          style={{
            transform: [{translateX: fadeLeft}],
          }}>
          <Card
            name="Travel"
            image={require('../media/travelCard.jpg')}
            onPress={() => {
              navigation.navigate('Travel');
            }}
          />
          <Card name="Food" image={require('../media/foodCard.jpeg')} />
          <Card name="Activity" image={require('../media/activityCard.jpg')} />
        </Animated.View>
      </ScrollView>

      <TouchableOpacity style={style.addIcon}>
        <MaterialIcons
          name="add-circle"
          size={70}
          style={{color: 'white'}}
          onPress={() => {
            setModalVisible(true);
          }}></MaterialIcons>
      </TouchableOpacity>

      {/* //Modal */}
      <View style={style.centerView}>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={style.overlay}></View>
          <View style={style.centerView}>
            <View style={style.ModalView}>
              <Card
                name={newAdventureText}
                onPress={() => {
                  if (newAdventureImage === 'not_available') {
                    ImagePicker.openPicker({
                      width: 300,
                      height: 400,
                      cropping: true,
                    }).then(async image => {
                      setNewAdventureImage(image.path);
                    });
                  } else {
                    null;
                  }
                }}
                image={{uri: newAdventureImage}}
              />
              <TextInput
                style={{
                  padding: 10,
                  margin: 5,
                  backgroundColor: 'grey',
                  borderRadius: 10,
                }}
                placeholder="Name your next Adventure List"
                placeholderTextColor="white"
                onChangeText={setNewAdventureText}
              />
              <Button
                color="#50C878"
                text="Create"
                style={{
                  display:
                    newAdventureText !== 'Start a new adventure' &&
                    newAdventureImage !== ''
                      ? 'flex'
                      : 'none',
                }}
                onPress={async () => {
                  //Upload the image to firebase and get an url
                  await storageRef
                    .ref('adventure_lists/' + storageKey + '/' + 'list_picture')
                    .putFile(newAdventureImage);
                  const url = await storageRef
                    .ref('adventure_lists/' + storageKey + '/' + 'list_picture')
                    .getDownloadURL();
                  //TODO: Have to delete the image if someone selects an image but cancels the modal
                  dbRef.set({
                    name: newAdventureText,
                    image_url: url,
                  });
                  setNewAdventureText('Start a new adventure');
                  setNewAdventureImage('not_available');
                  setModalVisible(false);
                }}></Button>
              <Button
                color="#800020"
                text="Cancel"
                onPress={() => {
                  setModalVisible(false);
                  newAdventureImage !== 'not_available'
                    ? storageRef
                        .ref('adventure_lists/' + storageKey)
                        .delete()
                        .catch(err => console.warn(err))
                    : null;
                }}></Button>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  landing: {
    flexDirection: 'column',
    paddingTop: Platform.OS === 'ios' ? 50 : 0,
    alignItems: 'center',
    backgroundColor: '#1D1C1A',
    minHeight: '100%',
  },
});

export default Landing;
