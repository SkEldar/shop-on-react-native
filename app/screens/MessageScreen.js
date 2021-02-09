import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import Screen from '../components/Screen'
import Listitem from "../components/Listitem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

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
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <Listitem
          renderRightActions={
            ListItemDeleteAction
          }
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('pressed',item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({

});

export default MessageScreen;
