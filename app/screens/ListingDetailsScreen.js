import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/Listitem";

function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsConatiner}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.subTitle}>$100</AppText>
        <View styles={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsConatiner: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer : {
      marginVertical : 40,
  }
});

export default ListingDetailsScreen;
