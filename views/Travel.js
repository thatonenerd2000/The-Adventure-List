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
} from 'react-native';

//STYLE IMPORT
import style from "../style";

//ICON IMPORT
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//COMPONENT IMPORT
import ListElement from '../components/ListElement';

const Travel: () => Node = (props) => {
    return(
        <>
            <View style={styles.MainView}>
                <ScrollView style={{width:"100%"}}>
                    <ListElement locationName="ireland" locationImage={require('../media/irelandList.jpg')} completed={false}/>
                    <ListElement locationName="japan" locationImage={require('../media/japanList.jpg')} completed={false}/>
                    <ListElement locationName="dubai" locationImage={require('../media/dubaiList.jpg')} completed={true}/>
                    <ListElement locationName="egypt" locationImage={require('../media/egyptList.jpg')} completed={false}/>
                    <ListElement locationName="greece" locationImage={require('../media/greeceList.jpg')} completed={false}/>
                </ScrollView>
                <TouchableOpacity style={style.addIcon}>
                    <MaterialIcons name="add-circle" size={80} style={{color:"white"}}></MaterialIcons>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    MainView:{
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        backgroundColor: '#1D1C1A',
    }
});

export default Travel
