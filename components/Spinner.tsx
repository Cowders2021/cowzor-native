import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Spinner: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Appen laster...</Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})