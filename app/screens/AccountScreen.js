import React from "react";
import Screen from "../components/Screen";
import {
  FlatList,
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
  FlatList,
} from "react-native";
import Listitem from "../components/Listitem";
import colors from "../config/colors";

const menuItems = [
  {
    { 
    title: "My Listings",
    icon: {
      name: "foramt-list-bulleted",
      backgroundColor: colors.primary,
    },
    },
    {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    }
  },
];

function AccountScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <Listitem
          title="Mosh Hamedani"
          subTitle="programmingwithmosh@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList data={menuItems}
        keyExtractor={menuItem => menuItem.title}
        renderItem={({item}) =><Listitem title={item.title}
        ImageComponent={
            <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
        }
        /> }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
