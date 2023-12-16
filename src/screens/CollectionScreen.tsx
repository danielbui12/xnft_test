import tw from "twrnc";
import { Screen } from "../components/Screen";
import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { COLORS } from "../consts/color";
import { mockCollectionData } from '../consts/mockdata';
import { DEVICE_WIDTH } from "../consts/styles";
import { useThemeContext } from "../context/themeContext";
import { NFTCard } from "../components/NFTCard";

export const CollectionScreen = () => {
  const { themeStyle } = useThemeContext()
  return (
    <Screen>
      <StatusBar barStyle="dark-content" backgroundColor={themeStyle.backgroundColor} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={[style.title, { color: themeStyle.color }]}>Lalisa</Text>
        <FlatList
          snapToInterval={DEVICE_WIDTH * 0.55}
          decelerationRate="fast"
          contentContainerStyle={{ paddingRight: 20, paddingBottom: 20, minWidth: DEVICE_WIDTH }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={mockCollectionData}
          renderItem={({ item }) => <NFTCard data={item} />}
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
  }
});
