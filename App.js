import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import AppButton from './app/components/AppButton';
import WelcomeScreen from './app/screens/WelcomeScreen'
import Card from './app/components/Card'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'

export default function App() {
  return (
    <ListingDetailsScreen />
  )
}                                                              

const styles = StyleSheet.create({
    container : {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center'
    }
})