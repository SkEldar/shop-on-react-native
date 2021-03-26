import React from 'react';
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
  import {useFormikContext} from 'formik';
  import AppButton from '../AppButton';
function SubmitButton({title }) {
    const { handleSubmit } = useFormikContext();
    return (
        <AppButton title={title} onPress={handleSubmit} />        
    );
}

export default SubmitButton;