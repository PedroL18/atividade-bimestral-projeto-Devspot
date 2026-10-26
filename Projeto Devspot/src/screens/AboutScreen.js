import React from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../components/Header';
import ProfileImage from '../components/ProfileImage';
import PrimaryButton from '../components/PrimaryButton';
import Footer from '../components/Footer';
import { colors } from '../theme/colors';

const PARAGRAPHS = [
  'Sou a Joana Santos, desenvolvedora Front-end apaixonada por transformar ideias em interfaces funcionais, acessíveis e bem pensadas. Trabalho principalmente com React, HTML e CSS, criando experiências digitais que não só funcionam bem, mas também fazem sentido para quem usa.',
  'Gosto de colaborar de perto com pequenos negócios, designers e times criativos, ajudando a tirar projetos do papel e levá-los para a web de forma prática e eficiente. Acredito que um bom produto nasce do equilíbrio entre código bem escrito, atenção aos detalhes e uma comunicação clara ao longo de todo o processo.',
  'Estou sempre buscando evoluir, aprender novas tecnologias e aprimorar minhas soluções, seja otimizando performance, melhorando a usabilidade ou explorando novas formas de construir interfaces mais escaláveis. Se você tem uma ideia e quer transformá-la em algo real, vamos conversar.',
];

export default function AboutScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.content}>
          <Header />
          <ProfileImage source={require('../assets/perfil.png')} />

          <Text style={styles.title}>Sobre mim</Text>
          {PARAGRAPHS.map((p, i) => (
            <Text key={i} style={styles.paragraph}>
              {p}
            </Text>
          ))}

          <PrimaryButton title="Voltar" onPress={() => navigation.goBack()} />
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
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  paragraph: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 25,
    marginBottom: 24,
  },
});
