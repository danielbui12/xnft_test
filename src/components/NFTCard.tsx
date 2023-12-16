import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { COLORS } from "../consts/color";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DEVICE_WIDTH } from '../consts/styles';

export const NFTCard = ({ data }: any) => {
  return (
    <TouchableOpacity
      style={style.card}
      activeOpacity={0.8}
      onPress={() => {
        // navigation.navigate('DetailsScreen', data)
      }}>
      <MaterialCommunityIcons
        name="heart-outline"
        size={28}
        color={COLORS.white}
        style={{ position: 'absolute', right: 10, top: 20, zIndex: 1 }}
      />
      <Image
        source={data?.image}
        style={{ height: '100%', width: '100%', borderRadius: 20 }}
      />
      <View style={style.cardDetailsCon}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../assets/images/eth.png')}
            style={{ height: 25, width: 25, borderRadius: 25 }}
          />
          <Text
            style={{
              marginLeft: 2,
              fontSize: 12,
              fontWeight: 'bold',
              color: COLORS.white,
            }}>
            {data.price}
          </Text>
        </View>
        <View style={style.cardBtn}>
          <Text style={{ color: COLORS.white, fontSize: 10, fontWeight: 'bold' }}>
            Buy Now
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};


const style = StyleSheet.create({
  card: {
    height: 300,
    width: DEVICE_WIDTH * 0.55,
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
