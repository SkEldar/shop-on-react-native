import React, { useState } from "react";
import colors from "../config/colors";
import {
  FlatList,
  Image,
  View,
  Button,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import defaultStyles from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PIckerItem from "./PIckerItem";

function AppPicker({ selectItem,onSelectItem,items, icon, placeholder,}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}

          {selectItem ? (
            <AppText style={styles.text}>
            {selectItem.label}
            </AppText>
          ) : (
            <AppText style={styles.placeholder}>
            {placeholder}
            </AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setModalVisible(false)} />
          <FlatList 
            data={items}          
            keyExtractor={item => item.value}
            renderItem={({item}) => <PIckerItem 
            label={item.label}
            onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
            }}
            />}
          />
        </Screen>
      </Modal>
    </>
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
  text: {
    flex: 1,
  },
  placeholder : {
    color : defaultStyles.colors.medium,
    flex : 1,
  }
});

export default AppPicker;
