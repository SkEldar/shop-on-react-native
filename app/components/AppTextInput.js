import React from "react";
import colors from "../config/colors";
import {
  FlatList,
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.TextInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  TextInput: {
    fontSize: 18,
    color : colors.dark,
    fontFamily: Platform.OS === "android" ? "Robot" : "Avenir",
  },
});

export default AppTextInput;
