import React from 'react'
import tw from 'twrnc'
import { View, Text, StyleSheet, FlatList, useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import { Screen } from '../components/Screen'
import { RootStackParamList } from '../types'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useThemeContext } from '../hooks/useThemeContext'
import { mockCollectionData } from '../consts/mockdata'
import { NFTCard } from '../components/NFTCard'
import { ScrollView } from 'react-native-gesture-handler'
import { COLORS } from '../consts/color'

const RewardSection = ({ navigation }: NativeStackScreenProps<RootStackParamList, "Home">) => {
  const { themeStyle } = useThemeContext();
  const deviceSize = useWindowDimensions();

  return (
    <View style={tw`mb-6 border-b-2 border-gray-600 rounded-base pb-5`}>
      <View style={tw`flex flex-row mb-7`}>
        <View style={tw`w-1/3`}>
          <Image 
            source={require('../assets/images/creators/creator1.jpg')} 
            alt="Pixel on the mind"
            style={{
              width: 100,
              height: 100,
              borderRadius: 50
            }}
          />
        </View>
        <View style={tw`w-2/3`}>
          <Text style={[style.title, { color: themeStyle.color }]}>Pixel on the mind</Text>
          <Text style={{ lineHeight: 30, color: themeStyle.color }}>
            Dryptoqunk launched as a fixed set of 10,000 items in mid-2017 and
            became one of the inspirations for the ERC-721 standard. They have
            been featured in places like The New York Times, Christie's of London,
            Art| Basel Miami, and The PBS NewsHour.
          </Text>
        </View>
      </View>
      
      <FlatList
        contentContainerStyle={{
          paddingRight: 20,
          paddingBottom: 20,
        }}
        horizontal
        data={mockCollectionData}
        renderItem={({ item }) => (
          <NFTCard
            data={item}
            type='view'
            onPress={() => {
              navigation.navigate("DetailNFT", item)
            }}
            style={{
              height: 120,
              width: deviceSize.width * 0.2
            }}
          />
        )}
      />

      <TouchableOpacity 
        onPress={() => {}}
        style={[
          tw`rounded-lg h-10 mt-7`,
          {
            backgroundColor: COLORS.primary,
          }
        ]}
      >
        <Text style={[tw`fold-bold text-base text-center pt-2`, { color: themeStyle.color }]}>Switch</Text>
      </TouchableOpacity>
    </View>
  )
}

export const RewardScreen = (props: NativeStackScreenProps<RootStackParamList, "Home">) => {

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RewardSection {...props} />
        <RewardSection {...props} />
        <RewardSection {...props} />
        <RewardSection {...props} />
      </ScrollView>
    </Screen>
  )
}

const style = StyleSheet.create({
  title: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
  }
});
