import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';

import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    height: 56,
    width: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 24,
    color: colors.white,
  },
});
