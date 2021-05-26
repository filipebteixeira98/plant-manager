import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Button } from '../components/Button';

import fonts from '../styles/fonts';

import colors from '../styles/colors';

export function Confirmation() {
  const navigation = useNavigation();

  function handleChangePage() {
    navigation.navigate('PlantSelect');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😃</Text>
        <Text style={styles.title}>All right</Text>
        <Text style={styles.subtitle}>
          Now let's start taking care of your plants very carefully
        </Text>
        <View style={styles.footer}>
          <Button title="Start" onPress={handleChangePage} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 30,
  },
  emoji: {
    fontSize: 78,
  },
  title: {
    marginTop: 15,
    fontFamily: fonts.heading,
    fontSize: 22,
    color: colors.heading,
    lineHeight: 38,
    textAlign: 'center',
  },
  subtitle: {
    paddingVertical: 10,
    fontFamily: fonts.text,
    fontSize: 17,
    color: colors.heading,
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 50,
  },
});
