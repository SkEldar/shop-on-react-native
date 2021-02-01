import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import AppButton from './app/components/AppButton';
import WelcomeScreen from './app/screens/WelcomeScreen'
import Card from './app/components/Card'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import MessageScreen from './app/screens/MessageScreen';


export default function App() {
  return (
    <MessageScreen />
  )
}                                                              

const styles = StyleSheet.create({
    container : {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center'
    }
})