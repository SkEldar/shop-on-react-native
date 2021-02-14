import React from 'react';
import {Image, StyleSheet, Text, View,SafeAreaView } from 'react-native';
import colors from '../config/colors'
import AppText from "./AppText"

function Card({title,subTitle,image} ) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.detailsContainer}></View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    card : {
        borderRadius : 15, 
        backgroundColor : colors.white,
        marginBottom : 20,
        overflow : 'hidden',
        
    },
    detailsContainer : {
        padding : 20,
    },
    title : {
        marginBottom : 7,
        marginLeft : 20
    },
    image : {
        width : '100%',
        height : 200,
    },
    subTitle : {
        color : colors.secondary,
        fontWeight : 'bold',
        marginLeft : 20

    }
})

export default Card;