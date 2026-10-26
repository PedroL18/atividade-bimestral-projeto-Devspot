import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

export default function SocialButton({ title, icon, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      accessibilityRole="link"
    >
      <Ionicons name={icon} size={24} color={colors.primary} />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 14,
    marginBottom: 14,
  },
  pressed: { backgroundColor: 'rgba(34, 211, 255, 0.15)' },
  text: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 12,
  },
});
