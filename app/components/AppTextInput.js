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
import defaultStyles from '../config/styles'
import { MaterialCommunityIcons } from "@expo/vector-icons";
function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
       placeholderTextColor={defaultStyles.colors.medium}
       style={defaultStyles.text} {...otherProps} 
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
