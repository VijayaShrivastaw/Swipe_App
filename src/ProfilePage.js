import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useUser } from './UserContext';

const ProfilePage = () => {
  const { user, updateUser } = useUser();





  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Profile</Text>
      <View style={styles.section}>
        <Text style={styles.label}>Name:</Text>

        <Text style={styles.text}>{user.name}</Text>

      </View>


      <View style={styles.section}>
        <Text style={styles.label}>Age:</Text>

        <Text style={styles.text}>{user.age}</Text>

      </View>


      <View style={styles.section}>
        <Text style={styles.label}>Gender:</Text>

        <Text style={styles.text}>{user.gender}</Text>

      </View>


      <View style={styles.section}>
        <Text style={styles.label}>Location:</Text>

        <Text style={styles.text}>{user.location}</Text>

      </View>



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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },


});

export default ProfilePage;
