import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import colors from '../config/colors'

function Card(title,subTitle,image ) {
    return (
        <View style={styles.card}>
            <Image source={image}/>
            <Text>{title}</Text>
            <Text>{subTitle}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card : {
        borderRadius : 15, 
        backgroundColor : colors.white,
        marginBottom : 20,
    }
})

export default Card;