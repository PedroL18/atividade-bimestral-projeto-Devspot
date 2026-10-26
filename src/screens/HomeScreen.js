import React from 'react';
import { View, Text, Switch, Alert, Linking, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../components/Header';
import ProfileImage from '../components/ProfileImage';
import PrimaryButton from '../components/PrimaryButton';
import SocialButton from '../components/SocialButton';
import Footer from '../components/Footer';
import { colors } from '../theme/colors';

const SOCIALS = [
  { title: 'GitHub', icon: 'logo-github', url: 'https://github.com' },
  { title: 'Linkedin', icon: 'logo-linkedin', url: 'https://www.linkedin.com' },
  { title: 'Instagram', icon: 'logo-instagram', url: 'https://www.instagram.com' },
  { title: 'Twitch', icon: 'logo-twitch', url: 'https://www.twitch.tv' },
];

export default function HomeScreen({ navigation }) {
  const [enabled, setEnabled] = React.useState(false);

  const handleSwitch = (value) => {
    setEnabled(value);
    Alert.alert('Switch pressionado');
  };

  const openLink = (url) => {
    Linking.openURL(url).catch(() => Alert.alert('Não foi possível abrir o link'));
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.content}>
          <Header />
          <ProfileImage source={require('../assets/perfil.png')} />

          <Text style={styles.title}>Eleve seu negócio digital a outro nível</Text>
          <Text style={[styles.title, styles.highlight]}>com um Front-end de qualidade!</Text>

          <Text style={styles.paragraph}>
            Olá! Sou Joana Santos, desenvolvedora Front-end com especialidade em React, HTML e
            CSS. Ajudo pequenos negócios e designers a colocarem em prática boas ideias. Vamos
            conversar?
          </Text>

          <PrimaryButton title="Sobre mim" onPress={() => navigation.navigate('About')} />
          <PrimaryButton title="Entre em contato!" onPress={() => Alert.alert('Entre em contato')} />

          <Text style={styles.section}>Acesse minhas redes:</Text>

          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Alterar visualização</Text>
            <Switch
              value={enabled}
              onValueChange={handleSwitch}
              trackColor={{ false: colors.primary, true: colors.primary }}
              thumbColor="#FFFFFF"
            />
          </View>

          {SOCIALS.map((s) => (
            <SocialButton key={s.title} title={s.title} icon={s.icon} onPress={() => openLink(s.url)} />
          ))}
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  scroll: { flexGrow: 1 },
  content: { flex: 1, paddingHorizontal: 20, paddingBottom: 24 },
  title: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 30,
  },
  highlight: { color: colors.primary, marginBottom: 16 },
  paragraph: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 24,
    marginBottom: 24,
  },
  section: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  switchLabel: { color: colors.textMuted, fontSize: 14 },
});
