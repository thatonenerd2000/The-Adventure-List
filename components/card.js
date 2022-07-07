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
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

//STYLE IMPORT
import style from "../style";

const Card: () => Node = (props) => {
    return(
        <>
            <View style={styles.card}>
                <TouchableOpacity style={styles.touchBox} onPress={props.onPress}>
                    <ImageBackground style={styles.bgImage} source={props.image} imageStyle={{ borderRadius:20}}>
                        <View style={styles.textBox}>
                            <Text style={styles.CardText}>{props.name}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    card:{
        width: "96%",
        flexDirection: "row",
        alignItems: 'center',
        margin: 5,
    },
    bgImage:{
        height: 200,
    },
    touchBox:{
        flex:1,
        width: "100%",
        backgroundColor: "transparent",
    },
    textBox:{
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        marginTop: 'auto',
        padding: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    CardText:{
        color:"white", 
        fontFamily:"Pacifico",
        fontSize: 25,
    },
    subText:{
        color:"white",
    }
});

export default Card
