import React from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import { COLORS } from "../consts/color";

export const TrendingCard = ({ data }: any) => {
  return (
    <View
      style={{
        height: 150,
        width: 180,
        backgroundColor: COLORS.white,
        marginLeft: 20,
        borderRadius: 10,
        shadowColor: COLORS.grey,
        shadowRadius: 10,
        shadowOpacity: 0.2,
        shadowOffset: { height: 10, width: 0 },
        elevation: 10,
      }}>
      <Image
        source={data.image}
        style={{
          height: 80,
          width: '100%',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View style={{ height: 70, width: '100%', alignItems: 'center' }}>
        <Image
          source={data.creatorImage}
          style={{
            top: -20,
            height: 45,
            width: 45,
            borderRadius: 50,
            borderWidth: 3,
            borderColor: COLORS.white,
          }}
        />
        <Text style={{ fontWeight: 'bold', top: -20, color: COLORS.black }}>
          {data.creator}
        </Text>
      </View>
    </View>
  );
};