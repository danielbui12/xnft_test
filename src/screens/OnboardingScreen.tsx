import React from 'react';
import {
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { COLORS } from '../consts/color';
import { Screen } from '../components/Screen';
import { useThemeContext } from '../context/themeContext';

const OnboardingScreen = () => {
  const { themeStyle } = useThemeContext();

  return (
    <Screen>
      <StatusBar barStyle="light-content" />
      <View style={style.imageBg}>
        <Image
          source={require('../assets/images/nft.png')}
          style={{
            height: 250,
            width: 180,
            marginTop: 70,
          }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 50,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={[style.title, { color: themeStyle.color }]}>Collecting Best</Text>
          <Text style={[style.title, { color: themeStyle.color }]}>NFT Cryto Art.</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('HomeScreen')
          }}
          activeOpacity={0.7}
          style={style.btn}>
          <Text style={{ color: themeStyle.color, fontWeight: 'bold' }}>Start</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const style = StyleSheet.create({
  imageBg: {
    height: 320,
    width: 220,
    backgroundColor: COLORS.violet,
    marginTop: 70,
    marginHorizontal: 20,
    borderRadius: 40,
    overflow: 'hidden',
    paddingHorizontal: 20,
  },
  title: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
  },
  btn: {
    height: 50,
    width: 150,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});

export default OnboardingScreen;