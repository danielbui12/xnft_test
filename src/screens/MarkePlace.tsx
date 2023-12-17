import { Screen } from "../components/Screen";
import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import { COLORS } from "../consts/color";
import { mockCollectionData } from '../consts/mockdata';
import { useThemeContext } from "../hooks/useThemeContext";
import { NFTCard } from "../components/NFTCard";
import { TrendingCard } from "../components/TrendingCard";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";


export const MarketplaceScreen = ({ navigation }: NativeStackScreenProps<any>) => {
  const { themeStyle } = useThemeContext()
  const viewport = useWindowDimensions();

  const onGotoDetail = (data:any) => { 
    navigation.navigate('DetailNFT', data)
  }
  return (
    <Screen>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={[style.title, { color: themeStyle.color }]}>Top NFTS</Text>
        <FlatList
          snapToInterval={viewport.width * 0.55}
          decelerationRate="fast"
          contentContainerStyle={{ paddingRight: 20, paddingBottom: 20 }}
          horizontal
          data={mockCollectionData}
          renderItem={({ item }) => <NFTCard data={item} onPress={() => { onGotoDetail(item) }} />}
        />
        <Text style={[style.title, { color: themeStyle.color }]}>Trending collections</Text>
        <FlatList
          contentContainerStyle={{ paddingRight: 20, paddingBottom: 20 }}
          horizontal
          data={mockCollectionData}
          renderItem={({ item }) => <TrendingCard data={item} />}
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
    fontSize: 22,
    color: COLORS.black,
  },
  card: {
    height: 300,
    backgroundColor: COLORS.white,
    marginLeft: 20,
    borderRadius: 20,
    borderColor: COLORS.white,
    borderWidth: 7,
    shadowColor: COLORS.grey,
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: { height: 10, width: 0 },
    elevation: 10,
  },
  cardDetailsCon: {
    height: 70,
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    bottom: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardBtn: {
    width: 70,
    height: 30,
    backgroundColor: COLORS.violet,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
