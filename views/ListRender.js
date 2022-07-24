/**
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
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
import ListElement from '../components/ListElement';
import ModalView from '../components/ModalView';
import Button from '../components/Button';
import Card from '../components/card';

const Travel: () => Node = props => {
  //Modal States
  const [modalVisible, setModalVisible] = useState(false);
  const [newListText, setNewListText] = useState('Start a new adventure');
  newListText === '' ? setNewListText('Start a new adventure') : null;
  const [newAdventureImage, setNewAdventureImage] = useState('not_available');

  //Firebase
  const dbRef = database()
    .ref(`adventure_lists/${global.selectedList}/lists`)
    .push();
  const storageRef = storage();
  const storageKey = dbRef.key;

  //Data
  const [lists, setLists] = useState({});
  const [listKeys, setListKeys] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  useState(() => {
    // Get Lists
    async function getData() {
      database()
        .ref(`/adventure_lists/${global.selectedList}/lists`)
        .on('value', snap => {
          //Check if the reference exists in the database
          if (snap.val() !== null) {
            setLists(snap.val());
            setListKeys(Object.keys(snap.val()));
            setIsEmpty(false);
          }
        });
    }
    getData();
  }, []);

  if (isEmpty === false) {
    return (
      <>
        <View style={styles.MainView}>
          <ScrollView style={{width: '100%'}}>
            {listKeys.map(list => {
              return (
                <ListElement
                  key={list}
                  locationName={lists[list].name}
                  locationImage={{uri: lists[list].image_url}}
                />
              );
            })}
          </ScrollView>
          <TouchableOpacity
            style={style.addIcon}
            onPress={() => {
              setModalVisible(true);
            }}>
            <MaterialIcons
              name="add-circle"
              size={70}
              style={{color: 'white'}}></MaterialIcons>
          </TouchableOpacity>
          {/* Modal */}
          <ModalView visible={modalVisible}>
            <ListElement
              locationName={newListText}
              locationImage={{uri: newAdventureImage}}
              completed={false}
              onPress={() => {
                if (newAdventureImage === 'not_available') {
                  ImagePicker.openPicker({
                    width: 1280,
                    height: 720,
                    cropping: true,
                  }).then(async image => {
                    setNewAdventureImage(image.path);
                  });
                } else {
                  null;
                }
              }}
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
              onChangeText={setNewListText}
            />
            <Button
              color="#50C878"
              text="Create"
              style={{
                display:
                  newListText !== 'Start a new adventure' && newListText !== ''
                    ? 'flex'
                    : 'none',
              }}
              onPress={async () => {
                //Upload the image to firebase and get an url
                await storageRef
                  .ref(
                    `adventure_lists/${global.selectedList}/list_images/${storageKey}/list_image`,
                  )
                  .putFile(newAdventureImage);
                const url = await storageRef
                  .ref(
                    `adventure_lists/${global.selectedList}/list_images/${storageKey}/list_image`,
                  )
                  .getDownloadURL();
                dbRef.set({
                  name: newListText,
                  image_url: url,
                });
                setNewListText('Start a new adventure');
                setNewAdventureImage('not_available');
                setModalVisible(false);
              }}></Button>
            <Button
              color="#800020"
              text="Cancel"
              onPress={() => {
                setNewListText('Start a new adventure');
                setNewAdventureImage('not_available');
                setModalVisible(false);
              }}>
              Cancel
            </Button>
          </ModalView>
        </View>
      </>
    );
  } else {
    return (
      <>
        <View style={styles.MainView}>
          <Text style={{color: 'white'}}>
            It's empty in here, try adding some adventures!
          </Text>
          <TouchableOpacity
            style={style.addIcon}
            onPress={() => {
              setModalVisible(true);
            }}>
            <MaterialIcons
              name="add-circle"
              size={70}
              style={{color: 'white'}}></MaterialIcons>
          </TouchableOpacity>
          {/* Modal */}
          <ModalView visible={modalVisible}>
            <ListElement
              locationName={newListText}
              locationImage={{uri: newAdventureImage}}
              completed={false}
              onPress={() => {
                if (newAdventureImage === 'not_available') {
                  ImagePicker.openPicker({
                    width: 1280,
                    height: 720,
                    cropping: true,
                  }).then(async image => {
                    setNewAdventureImage(image.path);
                  });
                } else {
                  null;
                }
              }}
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
              onChangeText={setNewListText}
            />
            <Button
              color="#50C878"
              text="Create"
              style={{
                display:
                  newListText !== 'Start a new adventure' && newListText !== ''
                    ? 'flex'
                    : 'none',
              }}
              onPress={async () => {
                //Upload the image to firebase and get an url
                await storageRef
                  .ref(
                    `adventure_lists/${global.selectedList}/list_images/${storageKey}/list_image`,
                  )
                  .putFile(newAdventureImage);
                const url = await storageRef
                  .ref(
                    `adventure_lists/${global.selectedList}/list_images/${storageKey}/list_image`,
                  )
                  .getDownloadURL();
                dbRef.set({
                  name: newListText,
                  image_url: url,
                });
                setNewListText('Start a new adventure');
                setNewAdventureImage('not_available');
                setModalVisible(false);
              }}></Button>
            <Button
              color="#800020"
              text="Cancel"
              onPress={() => {
                setNewListText('Start a new adventure');
                setNewAdventureImage('not_available');
                setModalVisible(false);
              }}>
              Cancel
            </Button>
          </ModalView>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#1D1C1A',
  },
});

export default Travel;
