import React from 'react';
import { StyleSheet, Text, View,SafeAreaView, Platform } from 'react-native';

function AppText({children ,style}) {
    return <Text style={[styles.text,style]}>{children}</Text>
}

export default AppText;

const styles = StyleSheet.create({
    text : {
        fontSize : 18,
        fontFamily : Platform.OS === 'android' ? "Robot" : "Avenir"
    }
})