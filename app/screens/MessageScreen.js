import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import Listitem from "../components/Listitem";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessageScreen(props) {
  return (
    <SafeAreaView style={styles.screen}>
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <Listitem
          title={item.title}
          subTitle={item.subTitle}
          image={item.image}
        />
      )}
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    screen : {
        paddingTop : Platform.OS == 'android' ? setStatusBar.currentHeight : 0
    }
})

export default MessageScreen;
