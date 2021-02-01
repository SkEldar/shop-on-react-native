import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import colors from "../config/colors";
import {MaterialCommunityIcons} from '@expo/vector-icons'
function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name='close' color='white' size={30} />
        </View>
        <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name='trash-can-outline' color='white' size={35} />
        </View>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  deleteIcon : {
    position : 'absolute',
    top : 30,
    right : 30
  },
  closeIcon : {
      position : 'absolute',
      top : 30,
      left : 30
  }
});

export default ViewImageScreen;
