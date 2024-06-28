import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from './UserContext';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  age: yup.number().required('Age is required').positive('Age must be positive').integer('Age must be an integer'),
  gender: yup.string().required('Gender is required'),
  location: yup.string().required('Location is required'),
});

const WelcomeScreen = ({ navigation }) => {
  const { updateUser } = useUser();

  const handleContinue = (values) => {
    const { name, age, gender, location } = values;

    const dummyUser = {
      name,
      age: age.toString(),
      gender,
      location,
    };

    updateUser(dummyUser);
    navigation.navigate('SwipePage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to SwipeApp!</Text>
      <Formik
        initialValues={{ name: '', age: '', gender: '', location: '' }}
        validationSchema={validationSchema}
        onSubmit={values => handleContinue(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.form}>
            <TextInput
              placeholder="Name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              style={styles.input}
            />
            {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

            <TextInput
              placeholder="Age"
              onChangeText={handleChange('age')}
              onBlur={handleBlur('age')}
              value={values.age}
              keyboardType="numeric"
              style={styles.input}
            />
            {touched.age && errors.age && <Text style={styles.errorText}>{errors.age}</Text>}

            <TextInput
              placeholder="Gender"
              onChangeText={handleChange('gender')}
              onBlur={handleBlur('gender')}
              value={values.gender}
              style={styles.input}
            />
            {touched.gender && errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}

            <TextInput
              placeholder="Location"
              onChangeText={handleChange('location')}
              onBlur={handleBlur('location')}
              value={values.location}
              style={styles.input}
            />
            {touched.location && errors.location && <Text style={styles.errorText}>{errors.location}</Text>}

            <Button title="Continue" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
  },
  errorText: {
    fontSize: 12,
    color: 'red',
  },
});

export default WelcomeScreen;
