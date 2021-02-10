import React, {useState} from "react";
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

const initialMessages = [
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
  const [messages, setMessages ] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    setMessages(messages.filter(m => m.id !== message.id));
  }
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <Listitem
          renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)}/> 
          }
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('pressed',item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ])
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({

});

export default MessageScreen;
