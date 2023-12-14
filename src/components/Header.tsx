import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../hooks/useTheme';

export default function Header() {
  const theme = useTheme();

  return (
    <View>
      <Text style={[{ color: theme.themeStyle.fontColor }]}>asdasd</Text>
    </View>
  )
}