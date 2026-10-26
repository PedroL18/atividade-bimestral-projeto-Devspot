import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>DEV.SPOT</Text>
      <Ionicons name="sparkles-outline" size={38} color={colors.primary} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 16,
    paddingBottom: 20,
  },
  logo: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 1,
  },
  icon: {
    marginLeft: 6,
    marginTop: 6,
  },
});
