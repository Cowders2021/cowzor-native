import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FKA_PRIMARY, FKA_YELLOW } from '../styles/Colors';

export const Spinner: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/loading_tractor.gif')} style={styles.spinner} />
      <Text style={styles.text}>Appen laster...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: FKA_PRIMARY
  },

  text: {
    color: FKA_YELLOW
  },

  spinner: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  }
})