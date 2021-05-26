import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import profileImg from '../assets/profile.png';

import fonts from '../styles/fonts';

import colors from '../styles/colors';

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Hello,</Text>
        <Text style={styles.userName}>John</Text>
      </View>
      <Image source={profileImg} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontFamily: fonts.text,
    fontSize: 32,
    color: colors.heading,
  },
  userName: {
    fontFamily: fonts.heading,
    fontSize: 32,
    color: colors.heading,
    lineHeight: 40,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 40,
  },
});
