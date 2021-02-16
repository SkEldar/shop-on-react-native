import React from 'react';
import { StyleSheet, Text, View,SafeAreaView, Platform } from 'react-native';
import defaultStyles from '../config/styles'

function AppText({children ,style}) {
    return <Text style={[defaultStyles.text,style]}>{children}</Text>
}

export default AppText;

const styles = StyleSheet.create({
   
})