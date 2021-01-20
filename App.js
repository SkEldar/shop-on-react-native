import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import AppButton from './app/components/AppButton';
import WelcomeScreen from './app/screens/WelcomeScreen'


export default function App() {
  return (
    <View style={{
      backgroundColor : '#f8f4f4',
      padding : 20,
      paddingTop : 100,

    }}>
      <Card 
      title="red jacket for sale"
      subTitle = "100$"
      image = {require("./app/assets/jacket.jpg")}
      />
    </View>
  )
}                                                              

const styles = StyleSheet.create({
    container : {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center'
    }
})