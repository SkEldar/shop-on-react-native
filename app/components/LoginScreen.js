import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  Switch,
  Button,
} from "react-native";
import * as Yup from "yup";
import Screen from "./Screen";
import {AppForm,AppFormField,SubmitButton} from '../components/forms'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <AppForm
        validationSchema={validationSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              name="email"
              keyboardType="email-address"
              placeholder="Email"
              textContentType="emailAdress"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              name="password"
              icon="lock"
              placeholder="Password"
              keyboardType="email-address"
              secureTextEntry
            />
            <SubmitButton title="Login"/>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
