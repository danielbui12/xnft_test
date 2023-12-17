import { Screen } from "../components/Screen";
import React from 'react';
import {
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { mockCollectionData } from '../consts/mockdata';
import { useThemeContext } from "../hooks/useThemeContext";
import { NFTCard } from "../components/NFTCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

export const CollectionScreen = ({ navigation }: NativeStackScreenProps<RootStackParamList, "Home">) => {
  const { themeStyle } = useThemeContext()
  
  return (
    <Screen>
      <StatusBar barStyle="dark-content" backgroundColor={themeStyle.backgroundColor} />
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
    fontSize: 22,
  }
});
