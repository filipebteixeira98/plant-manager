import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';

import fonts from '../styles/fonts';

import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.text}>{title}</Text>
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
