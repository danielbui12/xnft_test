import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { COLORS } from "../consts/color";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const NFTCard = ({ data, onPress, type, onDetailPress, style }: any) => {
  const deviceSize = useWindowDimensions()
  return (
    <View style={{position: 'relative'}}>
      {
        type !== 'view' ? (
          <TouchableOpacity 
            onPress={() => {}}
            style={{ position: 'absolute', right: 10, top: 20, zIndex: 2 }}
          >
            <MaterialCommunityIcons
              name="heart-outline"
              size={28}
              color={COLORS.white}
            /> 
          </TouchableOpacity>
        ) : (<></>)
      }
      <TouchableOpacity
        style={[styles.card, { width: deviceSize.width * 0.55 }, style]}
        activeOpacity={0.8}
        onPress={onPress}
      >
        <Image
          source={data?.image}
          style={{ height: '100%', width: '100%', borderRadius: 20 }}
        />

        {type !== 'view' ? (
            <View style={styles.cardDetailsCon}>
              {
                type === 'not-owned' ? (
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                      source={require('../assets/images/sol.png')}
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
                ) : (
                  <></>
                )
              }
              <TouchableOpacity style={styles.cardBtn} onPress={onDetailPress}>
                <Text style={{ color: COLORS.white, fontSize: 10, fontWeight: 'bold' }}>
                  {
                    type === 'owned' ? (
                      "Sell"
                    ) : (
                      "Buy Now"
                    )
                  }
                </Text>
              </TouchableOpacity>
            </View>
        ) : (
          <></>
        )}
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
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
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
