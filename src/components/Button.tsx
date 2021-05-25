import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import fonts from '../styles/fonts';

import colors from '../styles/colors';

export function Button() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Confirm</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    backgroundColor: colors.green,
    borderRadius: 16,
  },
  text: {
    fontFamily: fonts.heading,
    fontSize: 16,
    color: colors.white,
  },
});
