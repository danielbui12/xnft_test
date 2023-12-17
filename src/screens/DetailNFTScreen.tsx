import React from 'react';
import {
  Text,
  ImageBackground,
  StatusBar,
  View,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../consts/color';
import { Screen } from '../components/Screen';
import { useThemeContext } from '../hooks/useThemeContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { mockCollectionData } from '../consts/mockdata';
import { NFTCard } from '../components/NFTCard';

export const DetailNFTScreen = ({ navigation, route }: any) => {
  const data = route.params;
  const { themeStyle } = useThemeContext();

  return (
    <Screen style={{ maxWidth: '100%'}}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <ImageBackground
        source={data.image}
        style={{
          width: '100%',
          height: 400,
          borderBottomRightRadius: 60,
          overflow: 'hidden',
        }}>
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 30,
            justifyContent: 'space-between',
          }}>
          <MaterialCommunityIcons
            onPress={navigation.goBack}
            name="chevron-left"
            size={30}
            color={COLORS.white}
          />
          <MaterialCommunityIcons name="dots-vertical" size={30} color={COLORS.white} />
        </View>
      </ImageBackground>

      <View
        style={{
          width: '100%',
          backgroundColor: themeStyle.backgroundColor,
          padding: 20,
          paddingBottom: 30,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../assets/images/sol.png')}
            style={{ height: 30, width: 30, borderRadius: 30 }}
          />
          <Text
            style={{ marginLeft: 5, color: themeStyle.color, fontWeight: 'bold' }}>
            {data.price}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            height: 40,
            width: 100,
            backgroundColor: COLORS.primary,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: themeStyle.color, fontWeight: 'bold', fontSize: 12 }}>
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: '100%',
          padding: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={data.creatorImage}
              style={{ height: 50, width: 50, borderRadius: 50 }}
            />
            <Text style={{ marginLeft: 10, color: themeStyle.color }}>
              {data.creator}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              height: 30,
              width: 60,
              backgroundColor: COLORS.primary,
              borderRadius: 8,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}
            onPress={() => {}}
          >
            <MaterialCommunityIcons name="heart-outline" size={18} color={COLORS.white} />
            <Text
              style={{
                color: themeStyle.color,
                fontSize: 12,
                fontWeight: 'bold',
                marginLeft: 2,
              }}>
              33
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 22,
            color: themeStyle.color,
            marginVertical: 20,
            fontWeight: 'bold',
          }}>
          Description
        </Text>
        <Text style={{ lineHeight: 30, color: themeStyle.color }}>
          Dryptoqunk launched as a fixed set of 10,000 items in mid-2017 and
          became one of the inspirations for the ERC-721 standard. They have
          been featured in places like The New York Times, Christie's of London,
          Art| Basel Miami, and The PBS NewsHour.
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Text style={[style.title, { color: themeStyle.color }]}>Pixel on the mind</Text>
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
              type='owned'
              onPress={() => {
                navigation.navigate("DetailNFT", item)
              }}
            />
          )}
        />
      </ScrollView>
    </Screen>
  );
};


const style = StyleSheet.create({
  title: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
  }
});
