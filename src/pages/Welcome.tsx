import React, { useState } from 'react';
import { Text, SafeAreaView, Image, StyleSheet } from 'react-native';

import { Button } from '../components/Button';

import wateringImg from '../assets/watering.png';

import colors from '../styles/colors';

export function Welcome() {
  const [visible, setVisible] = useState(false);

  function handleVisibility() {
    setVisible(!visible);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Manage {'\n'} your plants {'\n'} even easier 🌻
      </Text>
      {visible && <Image source={wateringImg} style={styles.image} />}
      <Text style={styles.subtitle}>
        Don't forget to water your plants anymore. We take care to remind you
        whenever you need
      </Text>
      <Button title=">" onPress={handleVisibility} />
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
  image: {
    height: 284,
    width: 292,
  },
});
