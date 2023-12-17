import { View, StyleSheet, Image, Text } from 'react-native'
import React from 'react'
import { useThemeContext } from '../hooks/useThemeContext';

export function Header() {
  const { themeStyle }= useThemeContext();

  return (
    <View style={[styles.headerContainer, { backgroundColor: themeStyle.backgroundColor }]}>
      <Text style={[styles.slogan, { color: themeStyle.color }]}>Re-Imagining Live Streaming</Text>
      <Image style={styles.logo} source={require('../assets/images/logo.png')} alt='logo' />
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 150,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  slogan: {
    textAlign: 'center',
    fontWeight: '500',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  }
})