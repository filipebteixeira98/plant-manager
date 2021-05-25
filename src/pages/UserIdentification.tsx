import React from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet } from 'react-native';

import fonts from '../styles/fonts';

import colors from '../styles/colors';

export function UserIdentification() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.emoji}>😋</Text>
          <Text style={styles.title}>What can i {'\n'} call you?</Text>
          <TextInput style={styles.input} />
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
    width: '100%',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 54,
  },
  emoji: {
    fontSize: 44,
  },
  input: {
    width: '100%',
    marginTop: 50,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: colors.gray,
    fontSize: 18,
    color: colors.heading,
    textAlign: 'center',
  },
  title: {
    marginTop: 20,
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    lineHeight: 32,
    textAlign: 'center',
  },
});
