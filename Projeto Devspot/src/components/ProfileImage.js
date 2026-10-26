import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function ProfileImage({ source }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.frame} />
      <Image source={source} style={styles.image} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'center',
    width: '100%',
    aspectRatio: 1,
    maxWidth: 360,
    marginBottom: 24,
  },
  frame: {
    position: 'absolute',
    top: -6,
    left: 8,
    right: -6,
    bottom: 8,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 18,
  },
  image: {
    flex: 1,
    borderRadius: 16,
  },
});
