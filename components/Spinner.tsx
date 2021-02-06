import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FKA_PRIMARY, FKA_YELLOW } from '../styles/Colors';

interface Props {
  text?: string
}

export const Spinner = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/loading_tractor.gif')} style={styles.spinner} />
      {
        props.text?.length ? (
          <Text style={styles.text}>{props.text}</Text>
        ) : (
            <Text style={styles.text}>Vekstkontroll laster...</Text>
          )
      }
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
    color: FKA_YELLOW,
    textTransform: 'uppercase',
    fontWeight: '700'
  },

  spinner: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  }
})