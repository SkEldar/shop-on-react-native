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
  import {Formik} from 'formik';
 function AppForm({children,initialValues, onSubmit,validationSchema}) {
   console.log({children})
     return (
        <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
            <>
            {children}
            </>
      </Formik>
     );
 }
 
 export default AppForm;