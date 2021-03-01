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
import AppButton from "./AppButton";
import AppTextInput from "./AppTextInput";
import { Formik } from "formik";
import Screen from "./Screen";
import AppText from "./AppText";
import ErrorMessage from "./ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <Formik
        validationSchema={validationSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ touched, handleChange, handleSubmit, errors, setFieldTouched }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange("email")}
              icon="email"
              keyboardType="email-address"
              placeholder="Email"
              onBlur={() => setFieldTouched("email")}
              textContentType="emailAdress"
            />
            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              onChangeText={handleChange("password")}
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="Password"
              keyboardType="email-address"
              onBlur={() => setFieldTouched("password")}
              secureTextEntry
            />

            <ErrorMessage error={errors.password} visible={touched.email} />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
