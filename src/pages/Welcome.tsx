import React from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import wateringImg from '../assets/watering.png';

import colors from '../styles/colors';

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Manage {'\n'} your plants {'\n'} even easier 🌻
      </Text>
      <Image source={wateringImg} style={styles.image} />
      <Text style={styles.subtitle}>
        Don't forget to water your plants anymore. We take care to remind you
        whenever you need
      </Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>{'>'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.heading,
    paddingHorizontal: 20,
  },
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
  image: {
    height: 284,
    width: 292,
  },
});
