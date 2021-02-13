import React from "react";
import Screen from "../components/Screen";
import {
  FlatList,
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import Listitem from "../components/Listitem";
import colors from "../config/colors";
import Icon from "../components/Icon"
import ListItemSeparatorComponent from '../components/ListItemSeparator'

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "foramt-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Listings",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  }
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <Listitem
          title="Mosh Hamedani"
          subTitle="programmingwithmosh@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
        ItemSeparatorComponent={ListItemSeparatorComponent}
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <Listitem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <Listitem title="Log out" ImageComponent={<Icon name="logout" backgroundColor="#ffe66d"/>}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    
  },
  screen : {
      backgroundColor : colors.light
  }
});

export default AccountScreen;
