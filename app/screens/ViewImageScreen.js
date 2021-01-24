import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import colors from "../config/colors";
function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>

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
    width : 50,
    height : 50,
    backgroundColor : "#4ecdc4",
    position : 'absolute',
    top : 30,
    right : 30
  },
  closeIcon : {
      width : 50,
      height : 50,
      backgroundColor : "#fc5c65",
      position : 'absolute',
      top : 30,
      left : 30
  }
});

export default ViewImageScreen;
