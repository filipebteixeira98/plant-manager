import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import fonts from '../styles/fonts';

import colors from '../styles/colors';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

export const PlantCardPrimary = ({ data, ...rest }: PlantProps) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <SvgFromUri uri={data.photo} height={70} width={70} />
      <Text style={styles.text}>{data.name}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    maxWidth: '45%',
    margin: 10,
    paddingVertical: 10,
    backgroundColor: colors.shape,
    borderRadius: 20,
  },
  text: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
    marginVertical: 16,
  },
});
